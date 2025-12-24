interface FAQItemProps {
  question: string;
  answer: string;
  dark?: boolean;
}

export default function FAQItem({ question, answer, dark = false }: FAQItemProps) {
  return (
    <div className={`rounded-xl p-6 hover:border-[#3ECF8E] transition-all ${
      dark
        ? "bg-neutral-800 border border-neutral-700"
        : "bg-neutral-50 border border-neutral-200"
    }`}>
      <h3 className={`text-lg font-semibold mb-2 ${dark ? "text-white" : "text-neutral-900"}`}>
        {question}
      </h3>
      <p className={dark ? "text-neutral-400" : "text-neutral-600"}>{answer}</p>
    </div>
  );
}
