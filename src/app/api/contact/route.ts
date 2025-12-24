import { NextRequest, NextResponse } from "next/server";

// API key segura en el servidor - no expuesta al cliente
const WEB3FORMS_API_KEY = process.env.WEB3FORMS_API_KEY || "e64e2899-46a4-408d-93a7-2b6b277188df";

// Rate limiting simple (en memoria - para producción usar Redis)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minuto
const RATE_LIMIT_MAX = 3; // máximo 3 envíos por minuto por IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

// Validación del lado del servidor
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // Obtener IP para rate limiting
    const ip = request.headers.get("x-forwarded-for") ||
               request.headers.get("x-real-ip") ||
               "unknown";

    // Verificar rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please wait a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, whatsapp, tipo, message, honeypot } = body;

    // Anti-spam: Si el honeypot está lleno, fingir éxito
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Validaciones del servidor
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Enviar a Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_API_KEY,
        subject: `Nuevo contacto desde MaxDigitalCR: ${name}`,
        from_name: "MaxDigitalCR Website",
        name: name,
        email: email,
        whatsapp: whatsapp || "No proporcionado",
        tipo_pagina: tipo || "No especificado",
        message: message,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to send message" },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
