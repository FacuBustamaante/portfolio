import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "../data/projects";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-app bg-surface transition-colors hover:border-secondary/50"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-elevated p-8">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-auto max-w-[70%] object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/0 to-secondary/0 transition-colors duration-500 group-hover:from-secondary/10" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-elevated px-2.5 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-app pt-5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-opacity hover:opacity-80"
            >
              Live <FiArrowUpRight />
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-body"
          >
            <FiGithub /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
