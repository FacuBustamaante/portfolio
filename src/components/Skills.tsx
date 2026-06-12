import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import Reveal from "./Reveal";
import { skills, aiSkills } from "../data/projects";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl font-black sm:text-6xl">
            Languages & <span className="text-gradient">Tools</span>
          </h2>
        </Reveal>

        {/* Highlighted AI Developing card */}
        <Reveal delay={0.1}>
          <div className="group relative mt-14 overflow-hidden rounded-3xl border border-secondary/40 bg-surface p-8 sm:p-10">
            {/* glow accents */}
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-secondary/20 blur-[90px] transition-opacity duration-500 group-hover:opacity-80" />
            <div className="pointer-events-none absolute -bottom-24 left-1/3 size-72 rounded-full bg-primary/20 blur-[90px]" />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-[#00210f]">
                  <HiSparkles /> AI Developing
                </span>
                <span className="text-sm text-muted">
                  Building software with AI at the core
                </span>
              </div>

              <p className="mt-5 max-w-2xl text-balance text-xl font-light leading-snug text-body sm:text-2xl">
                I design and ship products{" "}
                <span className="text-gradient font-medium">
                  alongside AI agents
                </span>{" "}
                — using spec-driven workflows, tool integrations and modern
                LLM tooling to move from idea to production faster.
              </p>

              <ul className="mt-8 flex flex-wrap gap-3">
                {aiSkills.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl border border-secondary/30 bg-elevated px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-secondary hover:text-secondary hover:shadow-[0_0_24px_-8px_rgba(0,237,100,0.6)]"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Core skill groups */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([group, items], gi) => (
            <Reveal key={group} delay={gi * 0.1}>
              <div className="h-full rounded-2xl border border-app bg-surface p-6">
                <h3 className="mb-5 text-sm uppercase tracking-[0.2em] text-muted">
                  {group}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + i * 0.05 }}
                      className="rounded-lg border border-app bg-elevated px-3.5 py-2 text-sm font-medium transition-colors hover:border-secondary hover:text-secondary"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
