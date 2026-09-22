import Icon, { type IconName } from "./Icon";

interface ProcessStepProps {
  step: string;
  title: string;
  desc: string;
  icon: IconName;
}

export default function ProcessStep({ step, title, desc, icon }: ProcessStepProps) {
  return (
    <div className="text-center">
      <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-neutral-800 border border-brand-2/30 flex items-center justify-center text-brand-2">
        <Icon name={icon} size={24} />
      </div>
      <span className="text-xs font-mono text-brand-2 block mb-2">{step}</span>
      <span className="text-lg font-semibold block text-white">{title}</span>
      <p className="text-sm mt-2 text-neutral-400">{desc}</p>
    </div>
  );
}
