import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

const links = [
  { label: "Home", href: "#inicio" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (href: string) =>
    onHome ? href : `/${href}`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`mt-4 flex w-full max-w-6xl items-center justify-between rounded-2xl border border-app px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass shadow-lg" : "border-transparent"
        }`}
      >
        <Link
          to="/"
          className="grid size-10 place-items-center rounded-xl bg-primary font-display text-lg font-bold text-white"
          aria-label="Home"
        >
          FB
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={navLink(l.href)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-body"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="grid size-10 place-items-center rounded-xl border border-app text-body transition-colors hover:border-secondary hover:text-secondary"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid size-10 place-items-center rounded-xl border border-app text-body md:hidden"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute top-20 w-[92%] max-w-6xl rounded-2xl border border-app p-2 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={navLink(l.href)}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-body transition-colors hover:bg-surface"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
