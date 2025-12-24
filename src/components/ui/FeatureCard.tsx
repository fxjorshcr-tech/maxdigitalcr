interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
  variant?: "default" | "small" | "large";
  dark?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  desc,
  variant = "default",
  dark = true,
}: FeatureCardProps) {
  if (variant === "small") {
    return (
      <div className={`p-4 rounded-xl text-center ${
        dark
          ? "bg-neutral-800/50 border border-neutral-700/50"
          : "bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E]"
      }`}>
        <div className="text-2xl mb-2">{icon}</div>
        <p className={`font-medium text-sm ${dark ? "text-white" : "text-neutral-900"}`}>{title}</p>
        <p className={`text-xs ${dark ? "text-neutral-500" : "text-neutral-500"}`}>{desc}</p>
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div className={`p-6 sm:p-8 rounded-2xl text-center hover:border-[#3ECF8E] transition-all ${
        dark
          ? "bg-neutral-800 border border-neutral-700"
          : "bg-neutral-50 border border-neutral-200"
      }`}>
        <div className="text-3xl sm:text-4xl mb-4">{icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#3ECF8E] mb-2">{title}</h3>
        <p className={dark ? "text-neutral-400" : "text-neutral-600"}>{desc}</p>
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-xl hover:border-[#3ECF8E] transition-all ${
      dark
        ? "bg-neutral-800 border border-neutral-700"
        : "bg-neutral-50 border border-neutral-200"
    }`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className={`text-lg font-bold mb-2 ${dark ? "text-white" : "text-neutral-900"}`}>{title}</h3>
      <p className={`text-sm ${dark ? "text-neutral-400" : "text-neutral-600"}`}>{desc}</p>
    </div>
  );
}
