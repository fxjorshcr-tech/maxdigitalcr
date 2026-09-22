import Icon from "./Icon";

interface FAQItemProps {
  question: string;
  answer: string;
  dark?: boolean;
  defaultOpen?: boolean;
}

/**
 * Native <details> accordion: the answer is always in the HTML (good for
 * search engines and AI crawlers that do not run JavaScript) and keyboard
 * accessible without any client code.
 */
export default function FAQItem({ question, answer, dark = false, defaultOpen = false }: FAQItemProps) {
  return (
    <details
      open={defaultOpen}
      className={`group rounded-xl border transition-all ${
        dark
          ? "bg-neutral-800 border-neutral-700 open:border-[#3ECF8E]/60"
          : "bg-neutral-50 border-neutral-200 open:border-[#3ECF8E]"
      }`}
    >
      <summary
        className={`flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 text-base sm:text-lg font-semibold ${
          dark ? "text-white" : "text-neutral-900"
        }`}
      >
        <span>{question}</span>
        <Icon
          name="chevronDown"
          size={20}
          className="shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className={`px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 leading-relaxed ${dark ? "text-neutral-400" : "text-neutral-600"}`}>
        {answer}
      </div>
    </details>
  );
}
