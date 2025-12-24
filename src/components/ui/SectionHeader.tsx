interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  dark?: boolean;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  dark = false,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center" : ""} mb-16`}>
      {badge && (
        <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">
          {badge}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 ${dark ? "text-white" : "text-neutral-900"}`}>
        {title}
        {titleHighlight && (
          <>
            <br />
            <span className={dark ? "text-neutral-500" : "text-neutral-400"}>{titleHighlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`text-xl max-w-3xl ${center ? "mx-auto" : ""} ${dark ? "text-neutral-400" : "text-neutral-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
