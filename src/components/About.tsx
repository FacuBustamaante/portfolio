import { FiLinkedin } from "react-icons/fi";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-display text-sm uppercase tracking-[0.3em] text-secondary">
            What I Do
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-4xl text-balance text-3xl font-light leading-snug sm:text-5xl">
            I specialize in building full-stack web applications that are{" "}
            <span className="text-gradient font-medium">fast</span>,{" "}
            <span className="text-gradient font-medium">reliable</span> and{" "}
            <span className="text-gradient font-medium">user-friendly</span>.
            With a solid foundation in both frontend and backend, I help bring
            ideas to life — for a business, a startup or a product team.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="https://www.linkedin.com/in/fambustamante/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-app px-7 py-3.5 font-semibold text-body transition-colors hover:border-secondary hover:text-secondary"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}
