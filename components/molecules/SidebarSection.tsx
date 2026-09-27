import Title from "../atoms/Title";

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function SidebarSection({
  title,
  children,
}: SidebarSectionProps) {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
      <Title className="mb-4 text-base uppercase tracking-[0.12em] text-[var(--brown)]">
        {title}
      </Title>
      {children}
    </section>
  );
}
