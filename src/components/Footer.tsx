"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    tipo: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "e64e2899-46a4-408d-93a7-2b6b277188df",
          subject: `Nuevo contacto desde MaxDigitalCR: ${formData.name}`,
          from_name: "MaxDigitalCR Website",
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp || "No proporcionado",
          tipo_pagina: formData.tipo || "No especificado",
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", whatsapp: "", tipo: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  // Translations
  const t = isEnglish ? {
    title: "MaxDigitalCR",
    about: "Your web development team in Costa Rica. World-class technology at accessible prices.",
    location: "📍 La Fortuna, Costa Rica",
    nav: "Navigation",
    home: "Home",
    services: "Services",
    aboutUs: "About",
    contact: "Contact",
    followUs: "Follow Us",
    quickContact: "Quick Contact",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    whatsappPlaceholder: "+506 8888 8888",
    typeLabel: "What type of website do you need?",
    typeOptions: [
      { value: "", label: "Select an option" },
      { value: "landing", label: "Landing Page (₡100,000+)" },
      { value: "catalogo", label: "Catalog Site (₡200,000+)" },
      { value: "ecommerce", label: "E-Commerce (₡300,000+)" },
      { value: "personalizado", label: "Custom Project" },
      { value: "otro", label: "Other / Not sure" },
    ],
    messagePlaceholder: "Tell us about your project...",
    sending: "Sending...",
    sent: "Sent!",
    send: "Send message",
    response: "We respond within 24 hours.",
    copyright: "All rights reserved.",
    poweredBy: "Powered by"
  } : {
    title: "MaxDigitalCR",
    about: "Tu equipo de desarrollo web en Costa Rica. Tecnología de clase mundial a precios accesibles.",
    location: "📍 La Fortuna, Costa Rica",
    nav: "Navegación",
    home: "Inicio",
    services: "Servicios",
    aboutUs: "Nosotros",
    contact: "Contacto",
    followUs: "Síguenos",
    quickContact: "Contacto Rápido",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@email.com",
    whatsappPlaceholder: "+506 8888 8888",
    typeLabel: "¿Qué tipo de página necesitás?",
    typeOptions: [
      { value: "", label: "Seleccioná una opción" },
      { value: "landing", label: "Landing Page (₡100,000+)" },
      { value: "catalogo", label: "Sitio Catálogo (₡200,000+)" },
      { value: "ecommerce", label: "E-Commerce (₡300,000+)" },
      { value: "personalizado", label: "Proyecto Personalizado" },
      { value: "otro", label: "Otro / No estoy seguro" },
    ],
    messagePlaceholder: "Contanos sobre tu proyecto...",
    sending: "Enviando...",
    sent: "¡Enviado!",
    send: "Enviar mensaje",
    response: "Te respondemos en menos de 24 horas.",
    copyright: "Todos los derechos reservados.",
    poweredBy: "Powered by"
  };

  const navPrefix = isEnglish ? "/en" : "";

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">
              {t.title}
            </h3>
            <p className="text-sm mb-4 text-neutral-400">
              {t.about}
            </p>
            <p className="text-sm text-neutral-500">
              {t.location}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">
              {t.nav}
            </h4>
            <div className="space-y-2">
              <Link
                href={`${navPrefix}/`}
                className="block text-sm transition-colors text-neutral-400 hover:text-[#3ECF8E]"
              >
                {t.home}
              </Link>
              <Link
                href={`${navPrefix}/nosotros`}
                className="block text-sm transition-colors text-neutral-400 hover:text-[#3ECF8E]"
              >
                {t.aboutUs}
              </Link>
              <Link
                href={`${navPrefix}/contacto`}
                className="block text-sm transition-colors text-neutral-400 hover:text-[#3ECF8E]"
              >
                {t.contact}
              </Link>
            </div>

            <h4 className="text-sm font-bold mt-6 mb-4 text-white">
              {t.followUs}
            </h4>
            <div className="flex gap-3">
              <a
                href="https://wa.me/50685962438"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-all"
                title="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/maxdigitalcr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-all"
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/maxdigitalcr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition-all"
                title="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="mailto:hola@maxdigitalcr.com"
                className="w-10 h-10 rounded-full bg-[#3ECF8E] flex items-center justify-center text-neutral-900 hover:scale-110 transition-all"
                title="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Contact Form - Expanded */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-4 text-white">
              {t.quickContact}
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name and Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#3ECF8E] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailPlaceholder}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#3ECF8E] transition-colors"
                />
              </div>

              {/* WhatsApp and Type row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder={t.whatsappPlaceholder}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#3ECF8E] transition-colors"
                />
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#3ECF8E] transition-colors"
                >
                  {t.typeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-neutral-800">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                rows={3}
                required
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#3ECF8E] transition-colors resize-none"
              />

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                  status === "sent"
                    ? "bg-green-500 text-white"
                    : status === "sending"
                    ? "bg-neutral-700 text-neutral-400 cursor-wait"
                    : "bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {t.sending}
                  </>
                ) : status === "sent" ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t.sent}
                  </>
                ) : (
                  <>
                    {t.send}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-3">
              {t.response}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600">
              © {new Date().getFullYear()} MaxDigitalCR. {t.copyright}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-400">{t.poweredBy}</span>
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-max-transparente.png"
                alt="MaxDigitalCR"
                width={120}
                height={40}
                className="h-6 w-auto brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
