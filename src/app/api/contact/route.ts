import { NextRequest, NextResponse } from "next/server";

// API key segura en el servidor
const WEB3FORMS_API_KEY = "e64e2899-46a4-408d-93a7-2b6b277188df";

// Rate limiting simple (en memoria)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minuto
const RATE_LIMIT_MAX = 5; // máximo 5 envíos por minuto por IP

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

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body" },
        { status: 400 }
      );
    }

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

    // Preparar datos para Web3Forms
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_API_KEY);
    formData.append("subject", `Nuevo contacto desde MaxDigitalCR: ${name}`);
    formData.append("from_name", "MaxDigitalCR Website");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("whatsapp", whatsapp || "No proporcionado");
    formData.append("tipo_pagina", tipo || "No especificado");
    formData.append("message", message);

    // Enviar a Web3Forms usando FormData
    const web3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    // Leer respuesta como texto primero
    const responseText = await web3Response.text();

    // Intentar parsear como JSON
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      console.error("Web3Forms returned non-JSON response:", responseText.substring(0, 500));
      return NextResponse.json(
        { success: false, message: "Error connecting to email service" },
        { status: 500 }
      );
    }

    if (responseData.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Web3Forms error:", responseData);
      return NextResponse.json(
        { success: false, message: responseData.message || "Failed to send message" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
