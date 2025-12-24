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
  const [honeypot, setHoneypot] = useState(""); // Honeypot anti-bot field
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [showModal, setShowModal] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setValidationError("");
  };

  // Stricter email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam: If honeypot is filled, it's a bot
    if (honeypot) {
      setStatus("sent");
      setShowModal(true);
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Validations
    if (formData.name.trim().length < 2) {
      setValidationError(isEnglish ? "Name must be at least 2 characters" : "El nombre debe tener al menos 2 caracteres");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setValidationError(isEnglish ? "Please enter a valid email address" : "Por favor ingresá un email válido");
      return;
    }

    if (formData.message.trim().length < 10) {
      setValidationError(isEnglish ? "Message must be at least 10 characters" : "El mensaje debe tener al menos 10 caracteres");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          tipo: formData.tipo,
          message: formData.message,
          honeypot: honeypot,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", whatsapp: "", tipo: "", message: "" });
        setShowModal(true);
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
    poweredBy: "Powered by",
    tagline: "Professional web development 🇨🇷",
    modalTitle: "Message Sent!",
    modalMessage: "Thank you for contacting us. We'll get back to you within 24 hours.",
    modalClose: "Got it!"
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
    poweredBy: "Powered by",
    tagline: "Desarrollo web profesional 🇨🇷",
    modalTitle: "¡Mensaje Enviado!",
    modalMessage: "Gracias por contactarnos. Te responderemos en menos de 24 horas.",
    modalClose: "¡Entendido!"
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
                          </div>
          </div>

          {/* Quick Contact Form - Expanded */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-4 text-white">
              {t.quickContact}
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Hidden honeypot field - bots fill it, humans don't see it */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Validation error message */}
              {validationError && (
                <div className="p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">
                  {validationError}
                </div>
              )}

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
            {/* Powered by Card - Glassmorphism */}
            <a
              href="https://maxdigitalcr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Glow effect - more subtle */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3ECF8E] to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-500" />

              {/* Card */}
              <div className="relative px-8 py-5 bg-neutral-800/80 border border-neutral-700 rounded-xl overflow-hidden group-hover:border-[#3ECF8E]/50 transition-all duration-300">
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <div className="relative flex flex-col items-center gap-3">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 group-hover:text-[#3ECF8E] transition-colors font-medium">
                    {t.poweredBy}
                  </span>
                  <Image
                    src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-max-transparente.png"
                    alt="MaxDigitalCR"
                    width={200}
                    height={60}
                    className="h-12 w-auto brightness-0 invert group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    {t.tagline}
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-scaleIn">
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-[#3ECF8E]/20 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              {t.modalTitle}
            </h3>

            {/* Message */}
            <p className="text-neutral-400 text-center mb-8">
              {t.modalMessage}
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 px-6 bg-[#3ECF8E] text-neutral-900 font-semibold rounded-lg hover:bg-[#2eb67d] transition-colors"
            >
              {t.modalClose}
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
}
