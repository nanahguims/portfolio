import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Menu, X } from "lucide-react";

const NAV = [
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Habilidades" },
  { id: "experience", label: "Experiência" },
  { id: "contact", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a
          href="#top"
          className={`glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            scrolled ? "shadow-[var(--shadow-soft)]" : ""
          }`}
        >
          <span className="grid size-7 place-items-center rounded-full bg-gradient-to-br from-pink-300 to-fuchsia-400 text-white">
            <Heart className="size-3.5" fill="currentColor" />
          </span>
          <span className="font-display font-light">Nanahguims</span>
        </a>

        <nav className="glass-strong hidden items-center gap-1 rounded-full p-1.5 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-foreground/80 transition hover:bg-pink-100/70 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="glass-strong grid size-11 place-items-center rounded-full md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-5 mt-3 md:hidden"
          >
            <div className="glass-card grid gap-1 rounded-3xl p-3">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-2.5 text-sm font-medium hover:bg-pink-100/70"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
