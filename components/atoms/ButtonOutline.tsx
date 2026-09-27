"use client";

interface ButtonOutlineProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function ButtonOutline({
  children,
  onClick,
  className = "",
  href,
  target,
  rel,
}: ButtonOutlineProps) {
  const sharedClasses = `rounded-full border-2 border-[var(--primary)] bg-transparent px-6 py-3 text-sm font-semibold tracking-[0.08em] text-[var(--primary)] shadow-[0_12px_30px_rgba(181,139,68,0.28)] transition-all duration-200 hover:-translate-y-0.5 ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={sharedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={sharedClasses}
    >
      {children}
    </button>
  );
}
