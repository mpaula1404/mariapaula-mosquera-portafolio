"use client";

import { useState } from "react";
import ProjectCard from "../atoms/ProjectCard";
import Modal from "./Modal";

interface Project {
  title: string;
  description: string;
  image: string;
  details: string;
  tech: string[];
  link?: string;
}

interface ProjectPortfolioProps {
  projects: Project[];
}

export default function ProjectPortfolio({ projects }: ProjectPortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="mt-8 overflow-x-auto pb-3">
        <div className="flex min-w-max gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              onViewMore={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-5">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="h-52 w-full rounded-2xl object-cover"
            />

            <p className="text-base leading-7 text-gray-200">
              {selectedProject.details}
            </p>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">
                Tecnologías
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--primary)]/50 bg-[var(--primary)]/10 px-3 py-1 text-xs text-[var(--primary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[#1a1410] transition hover:bg-[var(--primary-dark)]"
              >
                Ver proyecto
              </a>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}
