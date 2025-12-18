import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Checkmark icon component
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#3ECF8E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Navbar />

      <main className="bg-neutral-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">About Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              We are MaxDigitalCR.
              <br />
              <span className="text-neutral-500">Your web development team.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              A team of developers in Costa Rica passionate about creating
              professional and accessible websites for local businesses.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Our Story</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  Born from frustration.
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  We saw how traditional agencies charged fortunes for simple websites.
                  Months-long delivery times. Endless bureaucratic processes. Mediocre results.
                </p>
                <p className="text-lg text-neutral-600 mb-6">
                  Meanwhile, small businesses and entrepreneurs in Costa Rica continued without a digital presence,
                  losing customers every day to competitors who did have a website.
                </p>
                <p className="text-lg text-neutral-600">
                  <strong className="text-neutral-900">We decided to change that.</strong> We use the same technology
                  that Netflix and Airbnb use, but we make it accessible for local businesses.
                  We deliver in days, not months. And at a fraction of the cost.
                </p>
              </div>

              <div className="bg-neutral-900 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#3ECF8E] text-xl">⚡</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Speed</p>
                      <p className="text-sm text-neutral-400">We deliver in days, not months</p>
                    </div>
                  </div>
                  <div className="border-t border-neutral-700" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#3ECF8E] text-xl">💰</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Fair prices</p>
                      <p className="text-sm text-neutral-400">Cutting-edge technology accessible to everyone</p>
                    </div>
                  </div>
                  <div className="border-t border-neutral-700" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#3ECF8E] text-xl">🎯</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Real results</p>
                      <p className="text-sm text-neutral-400">Websites that generate clients for your business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Our Values</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                What we believe in.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Results above all",
                  desc: "We build websites that generate clients and sales for your business. Design with purpose."
                },
                {
                  icon: "💬",
                  title: "Direct communication",
                  desc: "No middlemen or bureaucratic processes. You talk directly with the person building your website."
                },
                {
                  icon: "⚡",
                  title: "Speed without sacrificing quality",
                  desc: "We deliver fast because we use the best tools, not because we cut corners."
                },
                {
                  icon: "🤝",
                  title: "Radical honesty",
                  desc: "If you don't need something, we tell you. If there's a cheaper option that works, we recommend it."
                },
                {
                  icon: "📚",
                  title: "Constant learning",
                  desc: "Technology changes every day. We stay updated to always give you the best."
                },
                {
                  icon: "🌱",
                  title: "Local impact",
                  desc: "We believe that when local businesses grow, the entire community benefits."
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">What We Do</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                We solve real problems.
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                We help businesses grow in the digital world with professional websites.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">What we do</h3>
                <ul className="space-y-4">
                  {[
                    "Landing pages that convert visitors into clients",
                    "Catalog sites to showcase products and services",
                    "Online stores with integrated payments",
                    "Custom web applications",
                    "SEO optimization to appear on Google",
                    "Social media and WhatsApp integration",
                    "Continuous support and maintenance"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-6">Our commitment</h3>
                <ul className="space-y-4">
                  {[
                    "Fair and transparent pricing from the start",
                    "Fast delivery in 1-10 business days",
                    "Custom designs for your business",
                    "Continuous support after delivery",
                    "Clear and direct communication",
                    "Simple and effective solutions",
                    "We only offer what you really need"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-300">
                      <svg className="w-5 h-5 text-[#3ECF8E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Our Numbers</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                The results speak.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "SSL", label: "Security included" },
                { number: "100%", label: "Satisfied clients" },
                { number: "24h", label: "Response time" },
                { number: "🇨🇷", label: "100% Costa Rican" },
              ].map((item) => (
                <div key={item.label} className="p-6 rounded-xl bg-neutral-800 border border-neutral-700 text-center">
                  <div className="text-4xl font-bold text-[#3ECF8E] mb-2">{item.number}</div>
                  <p className="text-neutral-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Where We Are</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  100% Costa Rican.
                  <br />
                  <span className="text-neutral-400">100% committed.</span>
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  We operate from La Fortuna, in the heart of Costa Rica. But we work with
                  clients from all over the country (and the world).
                </p>
                <p className="text-lg text-neutral-600 mb-8">
                  We understand the local market, the challenges of Costa Rican small businesses, and how
                  the local consumer works. That gives us an advantage that no foreign agency can offer.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">La Fortuna, Alajuela</p>
                    <p className="text-neutral-500">Costa Rica</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🌋", label: "La Fortuna" },
                  { icon: "🇨🇷", label: "Costa Rica" },
                  { icon: "💻", label: "100% Remote" },
                  { icon: "🌎", label: "Global clients" },
                ].map((item) => (
                  <div key={item.label} className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="font-medium text-neutral-900">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Want to work with us?
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
              Tell us your idea. We&apos;re ready to help you take your business to the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
              >
                Contact us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/en/servicios"
                className="inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-sm font-medium transition-all border-neutral-600 text-white hover:border-[#3ECF8E] hover:text-[#3ECF8E]"
              >
                View services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
