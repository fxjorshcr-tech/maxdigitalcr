"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import WhatsAppButton from "@/components/WhatsAppButton";
import LogoCarousel from "@/components/LogoCarousel";

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
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden bg-neutral-900">
          <ParticleBackground />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 bg-neutral-800 border border-neutral-700">
              <span className="w-2 h-2 bg-[#3ECF8E] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-neutral-400">
                Web Development in Costa Rica
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              Fast. <span className="text-[#3ECF8E]">Professional.</span> Affordable.
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-neutral-400">
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
                href="#planes"
                className="inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-sm font-medium transition-all border-neutral-700 text-white hover:border-[#3ECF8E] hover:text-[#3ECF8E]"
              >
                View Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <LogoCarousel title="Trusted By" />

        {/* Professional Websites Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Our Offer</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                  Professional Websites
                  <br />
                  <span className="text-neutral-500">for your business.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-400">
                  We create your professional website with <strong className="text-white">world-class technology</strong>, optimized for Google and ready to receive customers.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Ultra-fast websites that load in under 1 second",
                    "Modern, responsive design on any device",
                    "Technical SEO optimized from day one",
                    "Clear pricing, no hidden costs"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-300">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#planes" className="inline-flex items-center gap-2 text-[#3ECF8E] font-medium hover:underline">
                  View plans and pricing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "1-10", label: "business days", desc: "delivery time" },
                  { stat: "100%", label: "responsive", desc: "mobile first" },
                  { stat: "<1s", label: "load time", desc: "ultra fast" },
                  { stat: "A+", label: "score", desc: "Google PageSpeed" },
                ].map((item) => (
                  <div key={item.label} className="p-6 rounded-xl bg-neutral-800 border border-neutral-700 text-center hover:border-[#3ECF8E] transition-all">
                    <div className="text-3xl font-bold text-[#3ECF8E] mb-1">{item.stat}</div>
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="text-xs text-neutral-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats with Real Sources */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">The Reality</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                Google, AI, social media...
                <br />
                <span className="text-neutral-400">Your customers search everywhere.</span>
              </h2>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto text-neutral-600">
                97% of consumers search for businesses on Google before buying. And now they also ask ChatGPT, Perplexity, and other AI assistants. If you don&apos;t show up anywhere, you simply don&apos;t exist.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { stat: "97%", desc: "search Google before buying", source: "BrightLocal 2023", icon: "🔍" },
                { stat: "1B+", desc: "users ask ChatGPT", source: "OpenAI 2024", icon: "🤖" },
                { stat: "75%", desc: "judge credibility by design", source: "Stanford Web Credibility", icon: "💎" },
                { stat: "53%", desc: "leave if it takes +3 seconds", source: "Google/SOASTA Research", icon: "⚡" },
              ].map((item) => (
                <div key={item.stat} className="p-4 sm:p-6 rounded-xl border bg-neutral-50 border-neutral-200 text-center transition-all hover:border-[#3ECF8E] hover:shadow-lg">
                  <div className="text-2xl sm:text-3xl mb-3">{item.icon}</div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3ECF8E] mb-2">{item.stat}</div>
                  <p className="text-sm text-neutral-600 mb-2">{item.desc}</p>
                  <p className="text-xs text-neutral-400">Source: {item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans and Pricing - Full Section */}
        <section id="planes" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Plans and Pricing</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                Choose your plan.
                <br />
                <span className="text-neutral-500">Transparent prices.</span>
              </h2>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto text-neutral-400">
                Fixed prices with no surprises. You know exactly what you&apos;re getting before you start.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Essential Plan */}
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Essential</h3>
                  <p className="text-neutral-400 text-sm">Perfect for getting started</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$200</span>
                  <span className="text-neutral-500 ml-2">one-time</span>
                </div>
                <div className="mb-6 pb-6 border-b border-neutral-700">
                  <p className="text-sm text-neutral-400">
                    <span className="text-[#3ECF8E] font-medium">1-3 business days</span> delivery
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Landing page (1 page)",
                    "Responsive design",
                    "Contact form",
                    "WhatsApp integration",
                    "Basic SEO",
                    "SSL Certificate",
                    "30 days support"
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/en/contacto" className="block w-full text-center py-3 rounded-full border border-[#3ECF8E] text-[#3ECF8E] font-medium hover:bg-[#3ECF8E] hover:text-neutral-900 transition-all">
                  Get Started
                </Link>
              </div>

              {/* Professional Plan */}
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-800 border-2 border-[#3ECF8E] relative hover:scale-105 transition-all">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#3ECF8E] text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
                  <p className="text-neutral-400 text-sm">For growing businesses</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$400</span>
                  <span className="text-neutral-500 ml-2">one-time</span>
                </div>
                <div className="mb-6 pb-6 border-b border-neutral-700">
                  <p className="text-sm text-neutral-400">
                    <span className="text-[#3ECF8E] font-medium">3-7 business days</span> delivery
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Catalog site (up to 5 pages)",
                    "Premium responsive design",
                    "Advanced contact form",
                    "WhatsApp + social media",
                    "Advanced SEO",
                    "Google Analytics",
                    "Admin panel",
                    "60 days support"
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/en/contacto" className="block w-full text-center py-3 rounded-full bg-[#3ECF8E] text-neutral-900 font-medium hover:bg-[#2eb67d] transition-all">
                  Get Started
                </Link>
              </div>

              {/* Premium Plan */}
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
                  <p className="text-neutral-400 text-sm">Complete online store</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$600</span>
                  <span className="text-neutral-500 ml-2">one-time</span>
                </div>
                <div className="mb-6 pb-6 border-b border-neutral-700">
                  <p className="text-sm text-neutral-400">
                    <span className="text-[#3ECF8E] font-medium">7-10 business days</span> delivery
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "E-commerce (unlimited products)",
                    "Custom design",
                    "Shopping cart",
                    "Payment processor",
                    "Inventory management",
                    "Automatic notifications",
                    "Complete admin panel",
                    "90 days support"
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/en/contacto" className="block w-full text-center py-3 rounded-full border border-[#3ECF8E] text-[#3ECF8E] font-medium hover:bg-[#3ECF8E] hover:text-neutral-900 transition-all">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-neutral-400 mb-4">Need something different?</p>
              <Link href="/en/contacto" className="inline-flex items-center gap-2 text-[#3ECF8E] font-medium hover:underline">
                Contact us for a custom quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Difference Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Our Difference</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                Why choose us?
              </h2>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto text-neutral-600">
                We&apos;re not a traditional agency. We work differently — and the results prove it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "⚡", title: "Fast Delivery", desc: "1-10 business days. Not weeks. Not months. Your website ready in record time." },
                { icon: "💰", title: "Clear Pricing", desc: "Fixed prices from the start. No hidden costs, no surprises, no hourly billing." },
                { icon: "👁️", title: "Real-Time Preview", desc: "You see your site progress on a private link. Changes in real time." },
                { icon: "💬", title: "Direct Communication", desc: "Talk to who builds your site. No middlemen, no account managers." },
                { icon: "🔧", title: "Modern Technology", desc: "Next.js, React, Vercel. The same tools used by Netflix and Airbnb." },
                { icon: "🤝", title: "Included Support", desc: "30-90 days post-launch support depending on plan. You&apos;re never alone." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E] hover:shadow-lg transition-all">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">No Complications</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                We remove your worries
                <br />
                <span className="text-neutral-500">from the table.</span>
              </h2>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto text-neutral-400">
                We know building a website can seem complicated. That&apos;s why we take care of everything.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { worry: "\"I don't know anything about technology\"", solution: "We handle everything. You just tell us what you want and we make it happen.", icon: "🤔" },
                { worry: "\"It's too expensive\"", solution: "Prices from $200. A fraction of what traditional agencies charge.", icon: "💰" },
                { worry: "\"It takes too long\"", solution: "We deliver in 1-10 business days depending on the project. Not months.", icon: "⏰" },
                { worry: "\"Who helps me afterward?\"", solution: "Support included post-launch. You'll always have someone to help.", icon: "🤝" },
                { worry: "\"I don't know what design I need\"", solution: "We guide you and propose options based on your industry and goals.", icon: "🎨" },
                { worry: "\"I'm afraid it won't work\"", solution: "Tested, fast, and optimized sites. They work perfectly from day one.", icon: "✅" },
              ].map((item) => (
                <div key={item.worry} className="p-6 rounded-xl bg-neutral-800 border border-neutral-700 transition-all hover:border-[#3ECF8E]">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <p className="text-white font-semibold mb-3">{item.worry}</p>
                  <p className="text-neutral-400 text-sm">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unique Process Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Unique Process</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                  Preview in
                  <br />
                  <span className="text-neutral-400">real time.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-600">
                  Unlike other agencies that show you a final design after weeks of waiting, <strong className="text-neutral-900">we give you a private link from day one</strong> where you can see your website progress.
                </p>
                <p className="text-lg mb-8 text-neutral-600">
                  Each change we make is reflected immediately. You can comment, suggest changes, and see how your site evolves in real time.
                </p>
                <ul className="space-y-3">
                  {[
                    "Private preview link from day one",
                    "See changes in real time",
                    "Comment and suggest changes directly",
                    "Never wait to see progress"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-neutral-800">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-neutral-500 font-mono">preview-your-site.vercel.app</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800">
                    <div className="w-8 h-8 rounded-full bg-[#3ECF8E] flex items-center justify-center text-white text-sm">✓</div>
                    <div>
                      <p className="text-white text-sm font-medium">Design approved</p>
                      <p className="text-neutral-500 text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">↻</div>
                    <div>
                      <p className="text-white text-sm font-medium">Building contact section...</p>
                      <p className="text-neutral-500 text-xs">In progress</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-neutral-500 text-sm">○</div>
                    <div>
                      <p className="text-neutral-400 text-sm font-medium">SEO optimization</p>
                      <p className="text-neutral-500 text-xs">Pending</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Stars Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Online Reputation</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                  Google stars
                  <br />
                  <span className="text-neutral-500">sell for you.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-400">
                  When someone searches for your business on Google, the first thing they see are the stars and reviews from Google My Business. A business with 4.5+ stars generates <strong className="text-white">270% more clicks</strong> than one without reviews.
                </p>
                <p className="text-lg mb-8 text-neutral-400">
                  Your website and Google My Business profile work together. We help you set up both so your business looks professional and trustworthy from the first moment.
                </p>
                <ul className="space-y-3">
                  {[
                    "Google My Business setup",
                    "Integration with website",
                    "Strategy for more reviews",
                    "Reviews widget on your site"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-300">
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
                    <div key={item.label} className="p-4 rounded-xl bg-neutral-800 border border-neutral-700">
                      <div className="text-2xl font-bold text-[#3ECF8E]">{item.number}</div>
                      <p className="text-xs text-neutral-400">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Solutions for Everyone</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                Who is this for?
              </h2>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto text-neutral-600">
                If you have a business and want to grow, you need a digital presence.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
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
                <div key={item.name} className="p-3 sm:p-4 rounded-xl border text-center transition-all hover:scale-105 bg-neutral-50 border-neutral-200 hover:border-[#3ECF8E]">
                  <span className="text-2xl sm:text-3xl mb-2 block">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-900">{item.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-neutral-600 mb-4">
                <strong className="text-neutral-900">Don&apos;t see your industry?</strong> No problem.
              </p>
              <p className="text-xl font-semibold text-neutral-900">
                If you have customers, you need a website. <span className="text-[#3ECF8E]">Period.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Maintenance Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Maintenance and Support</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                  Your website
                  <br />
                  <span className="text-neutral-500">always up to date.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-400">
                  Once your website is live, we continue supporting you. Our maintenance plan includes everything you need to keep your site running and secure.
                </p>
                <div className="p-6 rounded-xl bg-neutral-800 border border-neutral-700 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-white">Monthly Maintenance</span>
                    <span className="text-2xl font-bold text-[#3ECF8E]">$15/mo</span>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Managed hosting",
                      "Security updates",
                      "Daily backups",
                      "Technical support",
                      "Minor content changes"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-neutral-300">
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "🛡️", title: "Security", desc: "Monitoring and protection against attacks. Your site always secure." },
                  { icon: "💾", title: "Backups", desc: "Daily automatic copies. If something fails, we restore in minutes." },
                  { icon: "🔄", title: "Updates", desc: "Security updates and improvements without extra charges." },
                  { icon: "💬", title: "Priority Support", desc: "Direct WhatsApp. Fast response for any issue." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800 border border-neutral-700">
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

        {/* Additional Costs Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Additional Costs</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                Full transparency.
              </h2>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto text-neutral-600">
                Besides development, there are some external services you&apos;ll need. Here we explain each one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌐</span>
                    <span className="font-bold text-neutral-900">Domain</span>
                  </div>
                  <span className="text-[#3ECF8E] font-bold">~$12/year</span>
                </div>
                <p className="text-neutral-600 text-sm">
                  Your unique web address (e.g., yourbusiness.com). We help you buy it and set it up. The price varies by extension (.com, .cr, .co).
                </p>
              </div>

              <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <span className="font-bold text-neutral-900">Professional Email</span>
                  </div>
                  <span className="text-[#3ECF8E] font-bold">from $6/mo</span>
                </div>
                <p className="text-neutral-600 text-sm">
                  Professional email with your domain (e.g., info@yourbusiness.com). We use Google Workspace or more economical alternatives based on your budget. We help you set it up.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-neutral-500">
                <strong className="text-neutral-900">Note:</strong> Hosting and professional email are not included in the development price. They are additional costs paid separately.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are + Technology + Process */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            {/* Who We Are */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Who We Are</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                  We are MaxDigitalCR.
                  <br />
                  <span className="text-neutral-500">Your web development team.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-400">
                  A team of developers in Costa Rica specialized in creating professional websites for SMBs and entrepreneurs.
                </p>
                <p className="text-lg mb-8 text-neutral-400">
                  <strong className="text-white">Direct communication, efficient processes</strong> and your website ready in days, not months.
                </p>
                <Link href="/en/nosotros" className="inline-flex items-center gap-2 text-[#3ECF8E] font-medium hover:underline">
                  Learn more about us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "⚡", title: "Fast delivery", desc: "1-10 business days" },
                  { icon: "💬", title: "Direct communication", desc: "Talk to who builds your site" },
                  { icon: "🔧", title: "Ongoing support", desc: "There's always someone to help" },
                  { icon: "🇨🇷", title: "100% Costa Rican", desc: "We understand the local market" },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-neutral-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology */}
            <div className="mb-24">
              <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Technology</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  The same tools used by the giants.
                </h3>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                  Netflix, Airbnb, TikTok — they all build with the same tools we use.
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  { name: "Next.js", icon: "▲", color: "bg-white text-black" },
                  { name: "React", icon: "⚛️", color: "bg-[#61DAFB]" },
                  { name: "TypeScript", icon: "TS", color: "bg-[#3178C6]" },
                  { name: "Vercel", icon: "▲", color: "bg-white text-black" },
                  { name: "Supabase", icon: "⚡", color: "bg-[#3ECF8E]" },
                  { name: "Tailwind", icon: "🎨", color: "bg-[#06B6D4]" },
                ].map((tech) => (
                  <div key={tech.name} className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 text-center hover:border-[#3ECF8E] transition-all">
                    <div className={`w-10 h-10 mx-auto rounded-lg ${tech.color} flex items-center justify-center text-sm font-bold mb-2`}>
                      {tech.icon}
                    </div>
                    <p className="text-sm font-medium text-white">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="rounded-3xl p-6 sm:p-8 md:p-12 bg-neutral-800 border border-neutral-700">
              <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-widest mb-4 text-[#3ECF8E] font-bold">Simple Process</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  How we work.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "We Talk", desc: "Tell us your idea and we understand what you need.", icon: "💬" },
                  { step: "02", title: "We Propose", desc: "Clear plan with fixed price. No surprises.", icon: "📋" },
                  { step: "03", title: "We Build", desc: "We develop while you see progress.", icon: "🔨" },
                  { step: "04", title: "We Launch", desc: "Your website live with support included.", icon: "🚀" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-neutral-700 border border-neutral-600 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono text-[#3ECF8E] block mb-2">{item.step}</span>
                    <span className="text-lg font-semibold block text-white">{item.title}</span>
                    <p className="text-sm mt-2 text-neutral-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-2xl font-bold text-white">
                  Your website ready in <span className="text-[#3ECF8E]">1-10 business days</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                Have questions?
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "How long does it take to deliver my website?", a: "Depends on the project type. Landing pages: 1-3 days. Catalog sites: 3-7 days. E-commerce: 7-10 days. Never more than 10 business days." },
                { q: "What if I don't like the design?", a: "With our real-time preview system, you see every change. If you don't like something, we adjust it instantly. We iterate until you're 100% satisfied." },
                { q: "Can I make changes after the site is ready?", a: "Yes. The first 30 days of support are included. After that, you can hire a maintenance plan or pay for specific changes." },
                { q: "Is hosting included?", a: "No, hosting and professional email are additional costs. Hosting costs approximately $15/month and email from $6/month. We help you set up everything." },
                { q: "Do I need to know about technology?", a: "Not at all. We take care of all the technical stuff. You just tell us what you want and we make it happen." },
                { q: "What payment methods do you accept?", a: "SINPE Móvil, bank transfer, and for e-commerce we set up your preferred payment processor (SINPE, card, etc)." },
              ].map((item) => (
                <div key={item.q} className="rounded-xl p-6 bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E] transition-all">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.q}</h3>
                  <p className="text-neutral-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-neutral-900 to-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Ready to start?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-neutral-400">
              Every day without a website is a customer you lost. While you read this, someone is searching for exactly what you offer.
            </p>
            <Link href="/en/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]">
              Get a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
