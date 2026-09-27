"use client";

interface KnowledgeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function KnowledgeCard({ title, description, icon }: KnowledgeCardProps) {
  return (
    <div className="flex min-h-[220px] flex-col rounded-[22px] border border-[var(--primary)] bg-[#f8f2e9] p-5 text-center shadow-[0_0_0_1px_rgba(212,175,110,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(212,175,110,0.12)]">
      <div className="flex min-h-full flex-col items-center">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-[18px] border border-[var(--primary)] bg-transparent [&>img]:h-14 [&>img]:w-14 [&>img]:object-contain">
          {icon}
        </div>

        <div className="flex min-h-[52px] w-full items-center justify-center">
          <h3 className="text-xl font-semibold text-[#2f241d]">
            {title}
          </h3>
        </div>

        <p className="mt-3 flex-1 text-base leading-relaxed text-[#4d3c32]">
          {description}
        </p>
      </div>
    </div>
  );
}
