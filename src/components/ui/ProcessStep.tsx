interface ProcessStepProps {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

export default function ProcessStep({ step, title, desc, icon }: ProcessStepProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-neutral-700 border border-neutral-600 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <span className="text-xs font-mono text-[#3ECF8E] block mb-2">{step}</span>
      <span className="text-lg font-semibold block text-white">{title}</span>
      <p className="text-sm mt-2 text-neutral-400">{desc}</p>
    </div>
  );
}
