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

export default function Services() {
  return (
    <>
      <Navbar />

      <main className="bg-neutral-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Our Services</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              Websites that
              <br />
              <span className="text-neutral-500">drive your business.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              From landing pages in 1 day to complete online stores.
              All with the best technology at affordable prices.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Our Difference</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Why are we different?
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                We don&apos;t just build websites. We create a unique development experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Ultra-fast delivery",
                  desc: "Landing pages in 1-3 days. Catalog sites in 3-7 days. E-commerce in 7-10 days. Maximum 10 business days, guaranteed."
                },
                {
                  icon: "👀",
                  title: "Real-time preview",
                  desc: "We share preview branches so you can see changes on your phone instantly. No waiting, no surprises."
                },
                {
                  icon: "🤝",
                  title: "Full support",
                  desc: "We're with you every step of the way. From the first call to after launch. We never leave you alone."
                },
                {
                  icon: "💰",
                  title: "Transparent pricing",
                  desc: "You know exactly what you'll pay from day 1. No hidden costs, no surprises at the end."
                },
                {
                  icon: "🔧",
                  title: "Support included",
                  desc: "30 days of post-launch support included in all plans. After that, optional maintenance plans available."
                },
                {
                  icon: "📱",
                  title: "100% responsive",
                  desc: "Your page looks perfect on any device: phone, tablet, computer. No exception."
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E] transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section id="plans" className="py-24 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Plans & Pricing</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Choose the perfect plan
                <br />
                <span className="text-neutral-500">for your business.</span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                All plans include responsive design, basic SEO, and 30 days of support.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Landing Page */}
              <div className="rounded-2xl p-8 bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-4xl">📄</span>
                  </div>
                  <div className="bg-[#3ECF8E]/20 text-[#3ECF8E] text-xs font-bold px-3 py-1 rounded-full">
                    1-3 DAYS
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Landing Page</h3>
                <p className="text-neutral-400 mb-6">
                  High-impact page to capture clients. Perfect for campaigns, launches, or basic web presence.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">from</span>
                  <div className="text-4xl font-bold text-[#3ECF8E]">$200</div>
                  <span className="text-sm text-neutral-500">one-time payment</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Modern, responsive design",
                    "Up to 5 sections",
                    "Contact form",
                    "SEO optimized",
                    "WhatsApp integration",
                    "30 days of support",
                    "First year hosting included"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-neutral-700/50 rounded-lg mb-6">
                  <p className="text-xs text-neutral-400 mb-1">Ideal for:</p>
                  <p className="text-sm text-white">Freelancers, marketing campaigns, product launches</p>
                </div>
                <Link
                  href="/en/contacto"
                  className="block text-center py-4 rounded-lg font-medium transition-all bg-neutral-700 text-white hover:bg-neutral-600"
                >
                  Get a Quote
                </Link>
              </div>

              {/* Catalog Site */}
              <div className="rounded-2xl p-8 bg-neutral-800 border-2 border-[#3ECF8E] relative hover:scale-105 transition-all">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#3ECF8E] text-neutral-900 text-sm font-bold px-4 py-2 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
                <div className="flex items-center justify-between mb-6 mt-2">
                  <div>
                    <span className="text-4xl">📚</span>
                  </div>
                  <div className="bg-[#3ECF8E]/20 text-[#3ECF8E] text-xs font-bold px-3 py-1 rounded-full">
                    3-7 DAYS
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Catalog Site</h3>
                <p className="text-neutral-400 mb-6">
                  Complete website to showcase your products or services. Multiple pages and product gallery.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">from</span>
                  <div className="text-4xl font-bold text-[#3ECF8E]">$400</div>
                  <span className="text-sm text-neutral-500">one-time payment</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Landing Page +",
                    "Up to 10 pages",
                    "Products/services gallery",
                    "Optional blog",
                    "Admin panel",
                    "Multiple forms",
                    "Social media integration"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-neutral-700/50 rounded-lg mb-6">
                  <p className="text-xs text-neutral-400 mb-1">Ideal for:</p>
                  <p className="text-sm text-white">Restaurants, hotels, professional services, portfolios</p>
                </div>
                <Link
                  href="/en/contacto"
                  className="block text-center py-4 rounded-lg font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                >
                  Get a Quote
                </Link>
              </div>

              {/* E-Commerce */}
              <div className="rounded-2xl p-8 bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-4xl">🛒</span>
                  </div>
                  <div className="bg-[#3ECF8E]/20 text-[#3ECF8E] text-xs font-bold px-3 py-1 rounded-full">
                    7-10 DAYS
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">E-Commerce</h3>
                <p className="text-neutral-400 mb-6">
                  Complete online store with shopping cart, online payments, and inventory management.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">from</span>
                  <div className="text-4xl font-bold text-[#3ECF8E]">$600</div>
                  <span className="text-sm text-neutral-500">+ monthly maintenance</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Catalog Site +",
                    "Shopping cart",
                    "Payment processor (cards/PayPal)",
                    "Inventory management",
                    "Order notifications",
                    "Sales dashboard",
                    "Monthly maintenance included"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-neutral-700/50 rounded-lg mb-6">
                  <p className="text-xs text-neutral-400 mb-1">Ideal for:</p>
                  <p className="text-sm text-white">Clothing stores, handmade products, any business with online sales</p>
                </div>
                <Link
                  href="/en/contacto"
                  className="block text-center py-4 rounded-lg font-medium transition-all bg-neutral-700 text-white hover:bg-neutral-600"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Custom Projects */}
            <div className="mt-12 rounded-2xl p-8 bg-gradient-to-r from-[#3ECF8E]/10 to-transparent border border-[#3ECF8E]/30">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Need something more complex?</h3>
                  <p className="text-neutral-400">
                    We develop custom web applications, booking systems, dashboards,
                    API integrations, and more. Tell us your idea.
                  </p>
                </div>
                <Link
                  href="/en/contacto"
                  className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-white text-neutral-900 hover:bg-neutral-100"
                >
                  Get a custom quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work - Preview System */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Unique Process</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  Review changes
                  <br />
                  <span className="text-neutral-400">in real time.</span>
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Forget waiting weeks to see how your page is going. With our
                  preview branch system, you can see every change we make <strong>instantly</strong> on your phone.
                </p>
                <p className="text-lg text-neutral-600 mb-8">
                  This way we work faster, avoid misunderstandings, and deliver exactly what you want.
                  It&apos;s a development approach that was previously only used by big tech companies.
                </p>
                <ul className="space-y-4">
                  {[
                    "We share a private link to see the changes",
                    "Works on your phone, tablet, or computer",
                    "Give us immediate feedback via WhatsApp",
                    "We iterate until you're 100% satisfied"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-900 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-[#3ECF8E]" />
                  <span className="ml-4 text-sm font-mono text-neutral-500">preview.yourbusiness.com</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg">
                    <div className="w-10 h-10 bg-[#3ECF8E] rounded-full flex items-center justify-center text-white text-lg">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">We make a change</p>
                      <p className="text-neutral-500 text-sm">New header design</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg">
                    <div className="w-10 h-10 bg-[#3ECF8E] rounded-full flex items-center justify-center text-white text-lg">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">You open the link on your phone</p>
                      <p className="text-neutral-500 text-sm">See the change instantly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg">
                    <div className="w-10 h-10 bg-[#3ECF8E] rounded-full flex items-center justify-center text-white text-lg">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">You message us on WhatsApp</p>
                      <p className="text-neutral-500 text-sm">&ldquo;I like it, but change the color&rdquo;</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#3ECF8E]/20 border border-[#3ECF8E] rounded-lg">
                    <div className="w-10 h-10 bg-[#3ECF8E] rounded-full flex items-center justify-center text-neutral-900 text-lg">
                      ✓
                    </div>
                    <div>
                      <p className="text-white font-medium">Done in minutes</p>
                      <p className="text-neutral-400 text-sm">No waiting, no endless emails</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance & Support */}
        <section className="py-24 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">After Launch</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Maintenance & Support
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Not all websites need constant maintenance, but all need support.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* No Maintenance Needed */}
              <div className="rounded-2xl p-8 bg-neutral-800 border border-neutral-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Landing & Catalog</h3>
                    <p className="text-neutral-500">No mandatory maintenance</p>
                  </div>
                </div>
                <p className="text-neutral-400 mb-6">
                  Static pages (landing pages and catalogs) don&apos;t require monthly maintenance.
                  Once delivered, they work perfectly without intervention.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Support included</span>
                    <span className="text-[#3ECF8E] font-medium">30 days free</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Minor changes after</span>
                    <span className="text-white font-medium">Quoted separately</span>
                  </div>
                </div>
              </div>

              {/* Maintenance Required */}
              <div className="rounded-2xl p-8 bg-neutral-800 border border-[#3ECF8E]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">E-Commerce</h3>
                    <p className="text-neutral-500">Monthly maintenance included</p>
                  </div>
                </div>
                <p className="text-neutral-400 mb-6">
                  Online stores require constant maintenance: security updates,
                  backups, payment processor monitoring, and ongoing technical support.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Security updates</span>
                    <span className="text-[#3ECF8E]">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Automatic backups</span>
                    <span className="text-[#3ECF8E]">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Priority support</span>
                    <span className="text-[#3ECF8E]">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Minor changes included</span>
                    <span className="text-[#3ECF8E]">✓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="rounded-xl p-6 bg-neutral-800 border border-neutral-700">
              <p className="text-center text-neutral-400">
                <strong className="text-white">Important:</strong> Even though not all pages require maintenance,
                it&apos;s always good to have a support plan. Technology changes and so does your business.
                We&apos;re here when you need us.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Costs */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Additional Costs</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Costs that are on you
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                We&apos;re transparent. These are external costs that you pay directly to providers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Domain */}
              <div className="rounded-2xl p-8 bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">Domain</h3>
                    <p className="text-neutral-500">yourbusiness.com</p>
                  </div>
                </div>
                <div className="text-center py-4 bg-white rounded-lg border border-neutral-200 mb-6">
                  <span className="text-sm text-neutral-500">approximately</span>
                  <div className="text-3xl font-bold text-neutral-900">$11-15</div>
                  <span className="text-sm text-neutral-500">per year</span>
                </div>
                <p className="text-neutral-600 text-sm">
                  The domain is your page&apos;s address (e.g.: yourbusiness.com). You register it in your name
                  and it&apos;s yours forever. We help you with the registration process.
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl p-8 bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">Professional Email</h3>
                    <p className="text-neutral-500">info@yourbusiness.com</p>
                  </div>
                </div>
                <div className="text-center py-4 bg-white rounded-lg border border-neutral-200 mb-6">
                  <span className="text-sm text-neutral-500">from</span>
                  <div className="text-3xl font-bold text-neutral-900">$6</div>
                  <span className="text-sm text-neutral-500">per account / month</span>
                </div>
                <p className="text-neutral-600 text-sm">
                  Professional email with your domain (e.g.: info@yourbusiness.com). We use Google Workspace
                  or more economical alternatives depending on your budget. We help you set it up.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-neutral-500">
                <strong className="text-neutral-900">Note:</strong> First year hosting is included
                in all our plans. After that, the cost is minimal (approximately $5-10/month).
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Have questions?
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How long does it take to deliver my website?",
                  a: "It depends on the type of project. Landing pages: 1-3 days. Catalog sites: 3-7 days. E-commerce: 7-10 days. Never more than 10 business days."
                },
                {
                  q: "What if I don't like the design?",
                  a: "With our real-time preview system, you see every change. If you don't like something, we adjust it instantly. We iterate until you're 100% satisfied."
                },
                {
                  q: "Can I make changes after the page is ready?",
                  a: "Yes. The first 30 days of support are included. After that, you can hire a maintenance plan or pay for specific changes."
                },
                {
                  q: "Is hosting included?",
                  a: "Yes, first year hosting is included in all plans. After that, the cost is minimal (approximately $5-10/month)."
                },
                {
                  q: "Do I need to know about technology?",
                  a: "Not at all. We take care of all the technical stuff. You just tell us what you want and we make it happen."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "PayPal, bank transfer, and credit/debit cards. We're flexible to accommodate your preferred payment method."
                },
              ].map((item) => (
                <div key={item.q} className="rounded-xl p-6 bg-neutral-800 border border-neutral-700">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-neutral-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
              Tell us your idea and we&apos;ll give you a no-commitment quote in less than 24 hours.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
            >
              Get a quote
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
