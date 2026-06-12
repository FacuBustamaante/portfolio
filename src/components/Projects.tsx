import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-4xl font-black sm:text-6xl">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-app px-6 py-3 font-semibold transition-colors hover:border-secondary hover:text-secondary"
            >
              See all
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
