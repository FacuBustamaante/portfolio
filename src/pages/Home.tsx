import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Marquee from "../components/Marquee";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <About />
      <Marquee />
      <Skills />
      <Projects />
      <Contact />
    </motion.div>
  );
}
