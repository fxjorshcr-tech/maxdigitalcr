import Icon, { type IconName } from "./Icon";

interface FeatureCardProps {
  icon: IconName;
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
      <div
        className={`p-4 rounded-xl text-center transition-all ${
          dark
            ? "bg-neutral-800/50 border border-neutral-700/50 hover:border-neutral-600"
            : "bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E]"
        }`}
      >
        <div className={`mx-auto mb-3 w-9 h-9 rounded-lg flex items-center justify-center ${dark ? "bg-neutral-700/60 text-[#3ECF8E]" : "bg-white border border-neutral-200 text-[#2eb67d]"}`}>
          <Icon name={icon} size={18} />
        </div>
        <p className={`font-medium text-sm ${dark ? "text-white" : "text-neutral-900"}`}>{title}</p>
        <p className="text-xs text-neutral-500 mt-1">{desc}</p>
      </div>
    );
  }

  if (variant === "large") {
    return (
      <div
        className={`p-6 sm:p-8 rounded-2xl text-center transition-all hover:border-[#3ECF8E] ${
          dark ? "bg-neutral-800 border border-neutral-700" : "bg-neutral-50 border border-neutral-200"
        }`}
      >
        <div className={`mx-auto mb-5 w-12 h-12 rounded-xl flex items-center justify-center ${dark ? "bg-[#3ECF8E]/15 text-[#3ECF8E]" : "bg-[#3ECF8E]/15 text-[#2eb67d]"}`}>
          <Icon name={icon} size={24} />
        </div>
        <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${dark ? "text-white" : "text-neutral-900"}`}>{title}</h3>
        <p className={dark ? "text-neutral-400" : "text-neutral-600"}>{desc}</p>
      </div>
    );
  }

  return (
    <div
      className={`p-6 rounded-xl transition-all hover:border-[#3ECF8E] ${
        dark ? "bg-neutral-800 border border-neutral-700" : "bg-neutral-50 border border-neutral-200"
      }`}
    >
      <div className={`mb-4 w-11 h-11 rounded-lg flex items-center justify-center ${dark ? "bg-neutral-700/60 text-[#3ECF8E]" : "bg-white border border-neutral-200 text-[#2eb67d]"}`}>
        <Icon name={icon} size={22} />
      </div>
      <h3 className={`text-lg font-bold mb-2 ${dark ? "text-white" : "text-neutral-900"}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${dark ? "text-neutral-400" : "text-neutral-600"}`}>{desc}</p>
    </div>
  );
}
