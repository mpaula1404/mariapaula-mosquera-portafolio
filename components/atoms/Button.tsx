"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
  href,
}: ButtonProps) {
  const buttonClassName = `rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(181,139,68,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-dark)] ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
}