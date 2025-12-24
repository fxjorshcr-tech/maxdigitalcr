interface StatCardProps {
  stat: string;
  desc: string;
  source: string;
  icon: string;
}

export default function StatCard({ stat, desc, source, icon }: StatCardProps) {
  return (
    <div className="p-5 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E] transition-all">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-3xl sm:text-4xl">{icon}</div>
        <div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3ECF8E] mb-2">{stat}</div>
          <p className="text-base sm:text-lg text-neutral-700 mb-3">{desc}</p>
          <p className="text-sm text-neutral-400 italic">— {source}</p>
        </div>
      </div>
    </div>
  );
}
