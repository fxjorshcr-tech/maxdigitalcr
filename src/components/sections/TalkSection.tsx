import Link from "next/link";
import { Reveal } from "@/components/motion";
import { Icon } from "@/components/ui";
import { SITE, type HomeData } from "@/lib/data";

interface TalkSectionProps {
  data: HomeData["talk"];
  contactLink?: string;
}

/** 6. Hablemos, por todos los canales. */
export default function TalkSection({ data, contactLink = "/contacto" }: TalkSectionProps) {
  const channels = [
    {
      icon: "messageCircle" as const,
      title: data.whatsapp,
      desc: data.whatsappDesc,
      value: SITE.phone,
      href: SITE.whatsapp,
      external: true,
      accent: "bg-[#25D366] text-white",
    },
    {
      icon: "mail" as const,
      title: data.email,
      desc: data.emailDesc,
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      external: false,
      accent: "bg-neutral-900 text-white",
    },
    {
      icon: "fileText" as const,
      title: data.form,
      desc: data.formDesc,
      value: contactLink.includes("/en") ? "Open form" : "Abrir formulario",
      href: contactLink,
      external: false,
      accent: "bg-[#3ECF8E] text-neutral-900",
    },
    {
      icon: "users" as const,
      title: data.social,
      desc: data.socialDesc,
      value: "@maxdigitalcostarica",
      href: SITE.social.instagram,
      external: true,
      accent: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white",
    },
  ];

  return (
    <section id="hablemos" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-neutral-950 text-white overflow-hidden grain">
      <div className="aurora">
        <span className="a" style={{ opacity: 0.2 }} />
        <span className="b" style={{ opacity: 0.15 }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">{data.badge}</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              {data.title}
              <br />
              <span className="text-neutral-500">{data.titleHighlight}</span>
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed">{data.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((c, i) => {
            const inner = (
              <>
                <div className={`w-12 h-12 mb-5 rounded-xl flex items-center justify-center ${c.accent}`}>
                  <Icon name={c.icon} size={22} />
                </div>
                <h3 className="text-xl font-bold mb-1">{c.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5">{c.desc}</p>
                <p className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#3ECF8E] group-hover:gap-2.5 transition-all">
                  {c.value}
                  <Icon name="arrowUpRight" size={14} />
                </p>
              </>
            );
            const cls =
              "group h-full flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 sm:p-7 transition-all hover:border-[#3ECF8E]/60 hover:bg-white/[0.08] hover:-translate-y-1";
            return (
              <Reveal key={c.title} delay={i * 90}>
                {c.external ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <Link href={c.href} className={cls}>
                    {inner}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={300}>
          <p className="mt-10 text-center text-sm text-neutral-500 flex items-center justify-center gap-2">
            <Icon name="clock" size={16} className="text-[#3ECF8E]" />
            {data.response}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
