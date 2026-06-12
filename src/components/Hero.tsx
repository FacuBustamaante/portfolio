import { motion } from "framer-motion";
import { FiGithub, FiArrowDown } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

const CV_URL =
  "https://drive.google.com/file/d/16M79YxxmFvsg0A7qtQZlH9stzdGDh7gf/view?usp=drive_link";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="grid-bg relative flex min-h-screen items-center overflow-hidden px-6"
    >
      {/* glow accents */}
      <div className="pointer-events-none absolute -top-32 left-1/4 size-[36rem] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 size-[28rem] rounded-full bg-primary/20 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-6xl"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-app px-4 py-1.5 text-sm text-muted"
        >
          <span className="size-2 animate-pulse rounded-full bg-secondary" />
          Available for new projects
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-6xl font-black leading-[0.9] tracking-tight sm:text-8xl lg:text-[9rem]"
        >
          Facundo
          <br />
          <span className="text-gradient">Bustamante</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg text-muted sm:text-2xl"
        >
          Full-Stack Developer crafting fast, reliable and user-friendly web
          applications.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://www.github.com/FacuBustamaante"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-semibold text-[#00210f] transition-transform hover:scale-105"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-app px-7 py-3.5 font-semibold text-body transition-colors hover:border-secondary hover:text-secondary"
          >
            <HiOutlineDocumentText /> Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="block"
        >
          <FiArrowDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}
