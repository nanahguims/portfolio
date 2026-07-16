import { Badge } from "../ui/badge";
import {
  Code2,
  Server,
  Palette,
  Wrench,
  Languages,
  BookHeart,
} from "lucide-react";
import { motion } from "motion/react";

const SKILLS = [
  {
    icon: Code2,
    label: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Vue",
      "TailwindCSS",
      "Framer Motion",
      "VTEX-io",
    ],
  },
  {
    icon: Server,
    label: "Backend",
    items: ["Node.js", "React", "Python", "REST APIs", "PostgreSQL"],
  },
  {
    icon: Palette,
    label: "UI / UX",
    items: ["Figma", "Prototyping", "Accessibility"],
  },
  {
    icon: Wrench,
    label: "Tools",
    items: ["Git", "Vite", "Storybook", "Vercel", "GitHub Actions"],
  },
  {
    icon: Languages,
    label: "Linguagens",
    items: ["Portuguese — Nativo", "Inglês — intermediário"],
  },
  {
    icon: BookHeart,
    label: "Aprendendo",
    items: ["Motion for React", "Shader UI", "WebGL basics"],
  },
];

export default function Skils() {
  return (
    <section id="skills" className="mt-40">
      <h2 className="text-left mb-0 max-lg:text-4xl lg:mb-5">Tecnologias</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="glass-card group relative overflow-hidden rounded-3xl p-6"
          >
            <div className="absolute -right-6 -top-6 size-24 rouded-full bg-linear-to-br from-pink-200 to-fuchsia-200 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-grid size-11 place-items-center rounded-2xl bg-linear-to-br from-pink-200 via-rose-200 to-pink-500 text-pink-700 shadow-inner">
                <c.icon className="size-5" />
              </span>
              <p className="font-display">{c.label}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {c.items.map((item) => (
                <Badge variant={"secondary"}>{item}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
