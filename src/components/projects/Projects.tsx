import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { Github, ExternalLink } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import festaJunina from "../../assets/festa-junina.png";
import calculadora from "../../assets/calculadora.png";
import desconto from "../../assets/desconto.png";
import bellaNails from "../../assets/bellanails.png";
import { Badge } from "../ui/badge";

type Project = {
  title: string;
  category: "Aplicação web" | "Landing page" | "Site";
  description: string;
  tech: string[];
  gradient: string;

  preview: string;
  live?: string;
  github?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Receitas Juninas",
    category: "Site",
    description:
      "Site de receitas típicas de festa junina, com páginas dedicadas aos pratos, ingredientes, modo de preparo e formulário de contato.",
    tech: ["HTML", "CSS"],
    gradient: "from-pink-200 via-rose-100 to-pink-300",

    preview: festaJunina,
    live: "https://nanahguims.github.io/receitas/",
    github: "https://github.com/nanahguims/receitas/",
  },
  {
    title: "Studio Bella Nails",
    category: "Landing page",
    description:
      "Landing page responsiva para um estúdio de unhas, com catálogo de serviços, formulário de agendamento e galeria em carrossel.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Slick"],
    gradient: "from-rose-100 via-pink-200 to-fuchsia-200",
    preview: bellaNails,
    live: "https://nanahguims.github.io/studio-bella-nails/",
    github: "https://github.com/nanahguims/studio-bella-nails",
  },
  {
    title: "Calculadora",
    category: "Aplicação web",
    description:
      "Calculadora web para operações aritméticas básicas, com validação de entradas, tratamento de divisão por zero e interface responsiva.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-fuchsia-100 via-pink-100 to-rose-200",
    preview: calculadora,
    live: "https://nanahguims.github.io/calculadora/",
    github: "https://github.com/nanahguims/calculadora",
  },
  {
    title: "Calculadora de Desconto",
    category: "Aplicação web",
    description:
      "Aplicação que calcula o desconto proporcional devido por períodos sem serviços de internet ou telefonia, considerando o plano e o mês de referência.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    gradient: "from-pink-100 via-rose-200 to-pink-200",
    preview: desconto,
    live: "https://nanahguims.github.io/maisinternet-desconto/",
    github: "https://github.com/nanahguims/maisinternet-desconto",
  },
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("Todos");

  const CATEGORIES = [
    "Todos",
    "Aplicação web",
    "Landing page",
    "Site",
  ] as const;
  const items = useMemo(
    () =>
      filter === "Todos"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="relative mt-40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title={
            <>
              <span className="text-gradient">Projetinhos </span> que desenvolvi
            </>
          }
          subtitle="Projetos que desenvolvi ao longo do tempo que me ajudaram a me aprimorar como profissional front-end."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => {
            const active = c === filter;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  active
                    ? "btn-primary shadow-lg"
                    : "glass-strong text-foreground/80 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="grid gap-8">
          {items.map((p, i) => (
            <ProjectRow key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`grid gap-8 md:grid-cols-2 md:items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div className="group relative min-w-0">
        <div
          className={`absolute -inset-3 -z-10 rounded-[2.5rem] bg-linear-to-br ${project.gradient} opacity-70 blur-2xl`}
        />
        <motion.div
          whileHover={{ y: -6, rotate: reverse ? -1 : 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="glass-strong relative w-full max-w-full overflow-hidden rounded-[2rem] p-1 shadow-(--shadow-float)"
        >
          <div
            className={`aspect-4/3 w-full overflow-hidden rounded-[1.75rem] bg-linear-to-br ${project.gradient} p-4 sm:p-8`}
          >
            <div className="flex h-full min-h-0 flex-col">
              <div className="flex items-center justify-between">
                <span className="chip bg-white/70">{project.category}</span>
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-white/80" />
                  <span className="size-2.5 rounded-full bg-white/60" />
                  <span className="size-2.5 rounded-full bg-white/40" />
                </div>
              </div>
              <div className="my-3 flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden sm:my-4">
                <img
                  className="block h-auto max-h-full w-auto max-w-full object-contain"
                  src={project.preview}
                  alt={`Prévia do projeto ${project.title}`}
                />
              </div>
              <div className="glass-card min-w-0 truncate rounded-2xl px-4 py-3 text-xs font-semibold">
                nanahguims /{" "}
                <span className="text-pink-600">
                  {project.title.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div>
        <Badge className="mb-3" variant="secondary">
          {project.category}
        </Badge>
        <h3 className="font-display text-3xl font-medium sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge variant="secondary" key={t}>
              {t}
            </Badge>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            <ExternalLink className="size-4" /> Ver projeto
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            <Github className="size-4" /> Código-fonte
          </a>
        </div>
      </div>
    </motion.article>
  );
}
