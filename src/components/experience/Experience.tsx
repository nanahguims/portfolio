import { Badge } from "../ui/badge";
import { motion } from "motion/react";

const EXPERIENCE = [
  {
    year: "2026 — Presente",
    role: "Junior Front-end Developer",
    company: "Mais Internet",
    text: "Desenvolvimento e integração de sistemas web utilizando tecnologias como ReactJS, JavaScript, TypeScript e CSS/Tailwind, consultas e requisições de APIs REST.",
  },
  {
    year: "2024",
    role: "Aprendiz Backend",
    company: "Intelbras",
    text: "Aprender a desenvolver aplicações web incluindo integrações ao banco de dados.",
  },
  {
    year: "2022",
    role: "Front-end Developer",
    company: "Avanti E-commerce & Marketing Digital",
    text: "Aprender a trabalhar/desenvolver sites de e-commerce utilizando a plataforma VTEX IO; e para customizações de funcionalidades utilizava-se ReactJS, TypeScript, etc.",
  },
  {
    year: "2021-1",
    role: "Estágio",
    company: "Avanti E-commerce & Marketing Digital",
    text: "Incio das aulas do curso técnico de desenvolvimento de sistemas, bolsa concebida pela empresa, logo após iniciei o programa de estágio.",
  },
  {
    year: "2021",
    role: "Conhecendo a área",
    company: "Technovation",
    text: "Apredendo a lógica de programação com ferramentas como Scratch e AppInventor.",
  },
];
export default function Skils() {
  return (
    <section id="experience" className="mt-40">
      <h2 className="text-left mb-0 max-lg:text-4xl lg:mb-5">Experiência</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-linear-to-b from-pink-300 via-pink-200 to-transparent md:left-1/2" />
        {EXPERIENCE.map((c, i) => (
          <motion.div
            key={c.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className={`relative grid md:grid-cols-2 md:gap-10 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
          >
            <div
              className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}
            >
              <div className="glass-card flex flex-col rounded-2xl px-6 py-5 text-left shadow-soft gap-2 mt-5">
                <Badge variant={"secondary"}>{c.year}</Badge>
                <p className="font-display">{c.role}</p>
                <p className="leading-relaxed text-sm">{c.company}</p>
                <p className="leading-relaxed text-muted-foreground text-sm">
                  {c.text}
                </p>
              </div>
            </div>
            <div className="hidden md:block" />
            <span className="absolute left-4 top-6 grid size-4 -translate-x-1/2 place-items-center rounded-full bg-white shadow-md md:left-1/2 mt-5">
              <span className="size-2 rounded-full bg-linear-to-br from-pink-400 to-fuchsia-500" />
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
