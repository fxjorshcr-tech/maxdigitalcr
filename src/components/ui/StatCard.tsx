import Icon, { type IconName } from "./Icon";

interface StatCardProps {
  stat: string;
  desc: string;
  source: string;
  icon: IconName;
}

export default function StatCard({ stat, desc, source, icon }: StatCardProps) {
  return (
    <div className="p-5 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-brand transition-all">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="shrink-0 w-11 h-11 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-brand-dark">
          <Icon name={icon} size={22} />
        </div>
        <div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-2">{stat}</div>
          <p className="text-base sm:text-lg text-neutral-700 mb-3">{desc}</p>
          <p className="text-sm text-neutral-400">Fuente: {source}</p>
        </div>
      </div>
    </div>
  );
}
