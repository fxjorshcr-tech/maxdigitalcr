"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

// Checkmark icon component
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#3ECF8E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function HomeEN() {
  return (
    <>
      <Navbar />

      <main className="bg-neutral-900">
        {/* Hero Section with Particles */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-neutral-900">
          <ParticleBackground />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 bg-neutral-800 border border-neutral-700">
              <span className="w-2 h-2 bg-[#3ECF8E] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-neutral-400">
                Web Development in Costa Rica
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              <span className="whitespace-nowrap">Fast. <span className="text-[#3ECF8E]">Professional.</span> Affordable.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-neutral-400">
              Professional websites at a fraction of the traditional cost.
              Delivered in days, ultra-fast, and built with the latest technology.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
              >
                Get a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/en/servicios"
                className="inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-sm font-medium transition-all border-neutral-700 text-white hover:border-[#3ECF8E] hover:text-[#3ECF8E]"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-sm uppercase tracking-widest mb-10 text-neutral-900 font-bold">
              Trusted By
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <Image src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Logo%20CWT%20Costa%20Rica-FINAL-01.png" alt="Can't Wait Travel" width={200} height={80} className="h-14 md:h-18 w-auto" />
              <Image src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/WhatsApp%20Image%202025-12-15%20at%2010.26.40%20PM.jpeg" alt="Go Adventures" width={200} height={80} className="h-14 md:h-18 w-auto" />
              <Image src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Orostudios%20CR%20Logo.png" alt="Orostudios CR" width={200} height={80} className="h-14 md:h-18 w-auto" />
              <Image src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-grupo-oroz.png" alt="Grupo Oroz" width={200} height={80} className="h-14 md:h-18 w-auto" />
            </div>
          </div>
        </section>

        {/* Digital Presence Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Digital Presence</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                Google, AI, social media...
                <br />
                <span className="text-neutral-500">Your customers search everywhere.</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-neutral-400">
                97% of consumers search for businesses on Google before buying. And now they also ask ChatGPT, Perplexity, and other AI assistants. If you don&apos;t show up anywhere, you simply don&apos;t exist.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { stat: "97%", desc: "search Google before buying", icon: "🔍" },
                { stat: "1B+", desc: "users ask ChatGPT", icon: "🤖" },
                { stat: "75%", desc: "judge credibility by design", icon: "💎" },
                { stat: "53%", desc: "leave if it takes +3 seconds", icon: "⚡" },
              ].map((item) => (
                <div key={item.stat} className="p-6 rounded-xl border bg-neutral-800 border-neutral-700 text-center transition-all hover:border-[#3ECF8E] hover:scale-105">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-[#3ECF8E] mb-2">{item.stat}</div>
                  <p className="text-sm text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 bg-neutral-800 border border-neutral-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Optimized for Google</p>
                    <p className="text-sm text-neutral-400">
                      Technical SEO, perfect speed, and structure that Google loves. Appear first in search results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl p-6 bg-neutral-800 border border-neutral-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Optimized for AI</p>
                    <p className="text-sm text-neutral-400">
                      Structured data and correct semantics so ChatGPT, Claude, and Perplexity recommend you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google My Business Section */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Online Reputation</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                  Google stars
                  <br />
                  <span className="text-neutral-400">sell for you.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-600">
                  When someone searches for your business on Google, the first thing they see are the stars and reviews from Google My Business. A business with 4.5+ stars generates <strong className="text-neutral-900">270% more clicks</strong> than one without reviews.
                </p>
                <p className="text-lg mb-8 text-neutral-600">
                  Your website and Google My Business profile work together. We help you set up both so your business looks professional and trustworthy from the first moment.
                </p>
                <ul className="space-y-3">
                  {[
                    "Google My Business setup",
                    "Website integration",
                    "Strategy for more reviews",
                    "Reviews widget on your site"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">G</div>
                    <div>
                      <p className="font-semibold text-neutral-900">Your Business</p>
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-sm text-neutral-500 ml-2">4.9 (127 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-neutral-100 pt-4">
                    <p className="text-sm text-neutral-600 italic">&quot;Excellent service, very professional. My website turned out amazing and they delivered super fast. 100% recommended.&quot;</p>
                    <p className="text-xs text-neutral-400 mt-2">— Satisfied customer</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { number: "4.9", label: "Rating" },
                    { number: "270%", label: "More clicks" },
                    { number: "88%", label: "Trust reviews" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                      <div className="text-2xl font-bold text-[#3ECF8E]">{item.number}</div>
                      <p className="text-xs text-neutral-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Who We Are</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                  We are MaxDigitalCR.
                  <br />
                  <span className="text-neutral-500">Your web development team.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-400">
                  We are a team of developers in Costa Rica specialized in creating professional websites for SMBs and entrepreneurs. We combine world-class technology with a deep understanding of the local market.
                </p>
                <p className="text-lg mb-8 text-neutral-400">
                  <strong className="text-white">We are agile, direct, and results-focused.</strong> Clear communication, efficient processes, and your website ready in days, not months.
                </p>
                <Link href="/en/nosotros" className="inline-flex items-center gap-2 text-[#3ECF8E] font-medium hover:underline">
                  Learn more about us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "⚡", title: "Fast delivery", desc: "Your website ready in 1-10 business days" },
                  { icon: "💬", title: "Direct communication", desc: "Talk directly with who builds your site" },
                  { icon: "🔧", title: "Ongoing support", desc: "There's always someone to help you" },
                  { icon: "🇨🇷", title: "100% Costa Rican", desc: "We understand the local market" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800 border border-neutral-700">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-neutral-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">No Complications</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                We take your worries
                <br />
                <span className="text-neutral-400">off the table.</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-neutral-600">
                We know building a website can seem complicated. That&apos;s why we handle everything.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { worry: "\"I don't know anything about technology\"", solution: "We handle everything. You just tell us what you want and we make it happen.", icon: "🤔" },
                { worry: "\"It's too expensive\"", solution: "Prices starting at $200. A fraction of what traditional agencies charge.", icon: "💰" },
                { worry: "\"It takes too long\"", solution: "We deliver in 1-10 business days depending on the project. Not months.", icon: "⏰" },
                { worry: "\"Who helps me after?\"", solution: "Post-launch support included. You'll always have someone to answer.", icon: "🤝" },
                { worry: "\"I don't know what design I need\"", solution: "We guide you and propose options based on your industry and goals.", icon: "🎨" },
                { worry: "\"I'm afraid it won't work\"", solution: "Tested, fast, and optimized sites. They work perfectly from day 1.", icon: "✅" },
              ].map((item) => (
                <div key={item.worry} className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 transition-all hover:border-[#3ECF8E] hover:shadow-lg">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <p className="text-neutral-900 font-semibold mb-3">{item.worry}</p>
                  <p className="text-neutral-600 text-sm">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Is This For Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Solutions for Everyone</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                Who is this for?
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-neutral-400">
                If you have a business and want to grow, you need digital presence.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: "🏨", name: "Hotels" },
                { icon: "🍽️", name: "Restaurants" },
                { icon: "✂️", name: "Barbershops" },
                { icon: "🏠", name: "Real Estate" },
                { icon: "🚗", name: "Auto Shops" },
                { icon: "🌴", name: "Tours" },
                { icon: "💪", name: "Gyms" },
                { icon: "🏥", name: "Clinics" },
                { icon: "📸", name: "Photographers" },
                { icon: "⚖️", name: "Lawyers" },
                { icon: "🎨", name: "Designers" },
                { icon: "🛒", name: "Stores" },
              ].map((item) => (
                <div key={item.name} className="p-4 rounded-xl border text-center transition-all hover:scale-105 bg-neutral-800 border-neutral-700 hover:border-[#3ECF8E]">
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <span className="text-sm font-medium text-white">{item.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-neutral-400 mb-4">
                <strong className="text-white">Don&apos;t see your industry?</strong> No problem.
              </p>
              <p className="text-xl font-semibold text-white">
                If you have customers, you need a website. <span className="text-[#3ECF8E]">Period.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Our Services</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                The perfect website
                <br />
                <span className="text-neutral-400">for your business.</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-neutral-600">
                From landing pages to complete online stores. Delivered in record time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Landing Page", price: "$200", time: "1-3 days", desc: "High-impact page to capture clients.", features: ["Responsive design", "Contact form", "SEO optimized"] },
                { title: "Catalog Site", price: "$400", time: "3-7 days", desc: "Show all your products or services.", features: ["Multiple pages", "Product gallery", "Admin panel"], popular: true },
                { title: "E-Commerce", price: "$600", time: "7-10 days", desc: "Complete online store with payments.", features: ["Shopping cart", "Payment processor", "Inventory"] },
              ].map((service) => (
                <div key={service.title} className={`rounded-2xl p-6 border transition-all hover:scale-105 ${service.popular ? "bg-neutral-900 border-[#3ECF8E] border-2 relative" : "bg-neutral-900 border-neutral-700"}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#3ECF8E] text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-neutral-400 mb-4">{service.desc}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#3ECF8E]">{service.price}</span>
                    <span className="text-neutral-500 text-sm ml-2">• {service.time}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-neutral-300">
                        <CheckIcon />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/en/servicios" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]">
                View all services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Cutting-edge Technology</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                  The same technology
                  <br />
                  <span className="text-neutral-400">used by the giants.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-600">
                  Netflix, Airbnb, TikTok, Uber — they all build their apps with the same tools we use.
                </p>
                <p className="text-lg mb-8 text-neutral-600">
                  <strong className="text-neutral-900">Before, this cost millions.</strong> Today, thanks to open-source tools and the cloud, we can give you the same quality at a fraction of the cost and in record time.
                </p>
                <ul className="space-y-3">
                  {[
                    "Sites that load in less than 1 second",
                    "Scalable for thousands of visitors",
                    "Secure with SSL certificate included",
                    "Optimized for Google from day 1"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Next.js", desc: "React Framework", icon: "▲", color: "bg-black" },
                  { name: "React", desc: "User Interface", icon: "⚛️", color: "bg-[#61DAFB]" },
                  { name: "TypeScript", desc: "Robust Code", icon: "TS", color: "bg-[#3178C6]" },
                  { name: "Vercel", desc: "Global Deploy", icon: "▲", color: "bg-black" },
                  { name: "Supabase", desc: "Database", icon: "⚡", color: "bg-[#3ECF8E]" },
                  { name: "Tailwind", desc: "Modern Design", icon: "🎨", color: "bg-[#06B6D4]" },
                ].map((tech) => (
                  <div key={tech.name} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E] transition-all">
                    <div className={`w-10 h-10 rounded-lg ${tech.color} flex items-center justify-center text-white text-sm font-bold mb-3`}>
                      {tech.icon}
                    </div>
                    <h3 className="text-neutral-900 font-semibold">{tech.name}</h3>
                    <p className="text-sm text-neutral-500">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Simple Process</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                How we work.
              </h2>
              <p className="mt-4 text-neutral-400">
                Simple. Transparent. Effective.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3ECF8E]/30 to-transparent -translate-y-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "We Talk", desc: "You tell us your idea and we understand exactly what you need.", icon: "💬" },
                  { step: "02", title: "We Propose", desc: "We present a clear plan with fixed price. No surprises.", icon: "📋" },
                  { step: "03", title: "We Build", desc: "We develop while you see progress in real time.", icon: "🔨" },
                  { step: "04", title: "We Launch", desc: "Your site live. We teach you how to use it and provide support.", icon: "🚀" },
                ].map((item) => (
                  <div key={item.step} className="relative text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-neutral-800 border border-neutral-700 flex flex-col items-center justify-center relative z-10 transition-all hover:border-[#3ECF8E] hover:scale-110">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <span className="text-xs font-mono text-[#3ECF8E] block mb-2">{item.step}</span>
                    <span className="text-lg font-semibold block text-white">{item.title}</span>
                    <p className="text-sm mt-2 text-neutral-400 max-w-[200px] mx-auto">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-neutral-400 mb-6">The result?</p>
              <p className="text-2xl font-bold text-white">
                Your website ready in <span className="text-[#3ECF8E]">1-10 business days</span>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Every day without a website
              <br />
              <span className="text-neutral-500">is a customer you lost.</span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-neutral-400">
              While you read this, someone is searching for exactly what you offer.
              If they don&apos;t find you, they find your competition.
            </p>
            <Link href="/en/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]">
              Start today
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
