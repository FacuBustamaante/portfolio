import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function AllProjects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="px-6 pb-28 pt-36"
    >
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-secondary"
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Back home
        </Link>

        <h1 className="mt-8 font-display text-5xl font-black sm:text-7xl">
          All <span className="text-gradient">Projects</span>
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          A collection of everything I've built — from full-stack apps to
          experiments.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
