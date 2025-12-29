"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    tipo: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "e64e2899-46a4-408d-93a7-2b6b277188df");
      formDataToSend.append("subject", `New contact from MaxDigitalCR: ${formData.name}`);
      formDataToSend.append("from_name", "MaxDigitalCR Website");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("whatsapp", formData.whatsapp || "Not provided");
      formDataToSend.append("website_type", formData.tipo || "Not specified");
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
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

  return (
    <>
      <Navbar />

      <main className="bg-neutral-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Contact</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              Have a project?
              <br />
              <span className="text-neutral-500">Let&apos;s talk.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Tell us your idea and we&apos;ll respond in less than 24 hours with a no-commitment quote.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all text-neutral-900"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all text-neutral-900"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-neutral-700">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all text-neutral-900"
                      placeholder="+1 555 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="tipo" className="block text-sm font-medium mb-2 text-neutral-700">
                      What type of website do you need?
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all text-neutral-900 bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="landing">Landing Page ($200+)</option>
                      <option value="catalogo">Catalog Site ($400+)</option>
                      <option value="ecommerce">E-Commerce ($600+)</option>
                      <option value="personalizado">Custom Project</option>
                      <option value="otro">Other / Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-700">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all resize-none text-neutral-900"
                      placeholder="What do you have in mind? Tell us about your business, what you want to achieve, and any details that help us better understand your project."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending" || status === "sent"}
                    className={`w-full py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                      status === "sent"
                        ? "bg-green-500 text-white"
                        : status === "sending"
                        ? "bg-neutral-300 text-neutral-500 cursor-wait"
                        : "bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                    }`}
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : status === "sent" ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Sent!
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>

                  <p className="text-sm text-neutral-500 text-center">
                    We respond in less than 24 hours
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Or contact us directly</h2>

                <div className="space-y-6 mb-12">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/50685962438"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl hover:bg-[#25D366]/20 transition-all"
                  >
                    <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">WhatsApp</p>
                      <p className="text-neutral-600">Message us directly</p>
                      <p className="text-[#25D366] font-medium">+506 8596 2438</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@maxdigitalcr.com"
                    className="flex items-center gap-4 p-6 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-neutral-100 transition-all"
                  >
                    <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Email</p>
                      <p className="text-neutral-600">For formal inquiries</p>
                      <p className="text-[#3ECF8E] font-medium">info@maxdigitalcr.com</p>
                    </div>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61585468526315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-[#1877F2]/10 border border-[#1877F2]/30 rounded-xl hover:bg-[#1877F2]/20 transition-all"
                  >
                    <div className="w-14 h-14 bg-[#1877F2] rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Facebook</p>
                      <p className="text-neutral-600">Follow us on Facebook</p>
                      <p className="text-[#1877F2] font-medium">MaxDigital Costa Rica</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/maxdigitalcostarica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-neutral-100 transition-all"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Instagram</p>
                      <p className="text-neutral-600">Follow us to see our work</p>
                      <p className="text-[#3ECF8E] font-medium">@maxdigitalcostarica</p>
                    </div>
                  </a>
                </div>

                {/* Location */}
                <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Location</p>
                      <p className="text-neutral-600">La Fortuna, Alajuela</p>
                      <p className="text-neutral-500">Costa Rica</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500">
                    We work 100% remotely with clients from all over the country and the world.
                    No need to meet in person (though we can do that too).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Before You Contact</p>
              <h2 className="text-3xl font-bold text-white">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How much does a website cost?",
                  a: "Prices start at $200 for landing pages, $400 for catalog sites, and $600 for e-commerce. The final price depends on the specific features you need."
                },
                {
                  q: "How long does it take to respond?",
                  a: "We respond to all inquiries in less than 24 hours, usually much sooner. If it's urgent, message us on WhatsApp."
                },
                {
                  q: "Do you work with clients outside Costa Rica?",
                  a: "Yes! We work 100% remotely and can serve clients from anywhere in the world. We've worked with clients in the USA, Mexico, and other countries."
                },
                {
                  q: "What do I need to get started?",
                  a: "Just an idea of what you want. We guide you through the entire process: design, content, photos, domain, etc. You don't need to have anything ready beforehand."
                },
              ].map((item) => (
                <div key={item.q} className="rounded-xl p-6 bg-neutral-800 border border-neutral-700">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-neutral-400">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/en"
                className="inline-flex items-center gap-2 text-[#3ECF8E] font-medium hover:underline"
              >
                See all our services and pricing
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Prefer WhatsApp?
            </h2>
            <p className="text-neutral-400 mb-8">
              It&apos;s the fastest way to contact us. Send us a message and we&apos;ll respond right away.
            </p>
            <a
              href="https://wa.me/50685962438"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#128C7E] transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Open WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            style={{ animation: "scaleIn 0.3s ease-out" }}
          >
            {/* Success Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-[#3ECF8E]/20 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-neutral-900 text-center mb-3">
              Message Sent!
            </h3>

            {/* Message */}
            <p className="text-neutral-600 text-center mb-8">
              Thank you for contacting us. We&apos;ll get back to you within 24 hours.
            </p>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 px-6 bg-[#3ECF8E] text-neutral-900 font-semibold rounded-lg hover:bg-[#2eb67d] transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <Footer />
    </>
  );
}
