"use client";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onViewMore: () => void;
}

export default function ProjectCard({
  title,
  description,
  image,
  onViewMore,
}: ProjectCardProps) {
  return (
    <article className="w-[300px] overflow-hidden rounded-[28px] border border-[#e7d7ba] bg-white shadow-[0_20px_40px_rgba(70,50,38,0.08)] transition-transform duration-200 hover:-translate-y-1 md:w-[340px]">
      <div className="h-44 overflow-hidden bg-[#efe3d0]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-[1.3rem] font-bold text-[#2f241d]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#5d4133]">{description}</p>
        </div>

        <button
          onClick={onViewMore}
          className="text-sm font-semibold tracking-[0.08em] text-[var(--primary)] transition hover:text-[var(--primary-dark)]"
        >
          Saber más &nbsp;›
        </button>
      </div>
    </article>
  );
}
