import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import Reveal from "./Reveal";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/542615889646",
    icon: <FaWhatsapp />,
  },
  {
    label: "Email",
    href: "mailto:facundombustamante@gmail.com",
    icon: <FiMail />,
  },
  {
    label: "X",
    href: "https://www.x.com/facubustamantex",
    icon: <FaXTwitter />,
  },
];

const quotes = [
  "Be yourself and don't go with the flow.",
  "The future belongs to those who believe in the beauty of their dreams.",
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <h2 className="font-display text-4xl font-black sm:text-6xl">
              Let's <span className="text-gradient">talk</span>
            </h2>
            <p className="mt-4 text-muted">Made with ❤️ by Facundo.</p>

            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-12 place-items-center rounded-xl border border-app text-xl text-body transition-colors hover:border-secondary hover:bg-secondary hover:text-[#00210f]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <blockquote className="flex h-full items-center rounded-3xl border border-app bg-surface p-7 font-serif text-lg italic text-muted">
                "{q}"
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
