import profileImage from "../../assets/me.png";
import { Badge } from "../ui/badge";
import { Heart, Compass, Code2, Rocket, Sparkles, Coffee } from "lucide-react";
import { motion } from "motion/react";

const ABOUT_CARDS = [
  {
    icon: Compass,
    title: "Onde tudo começou",
    text: "Cresci no interior de São Paulo, onde desenvolvi uma curiosidade natural por tecnologia. Mesmo com poucos recursos, sempre gostei de explorar ferramentas e descobrir como elas funcionavam.",
  },
  {
    icon: Heart,
    title: "O ponto de virada",
    text: "Aos 13 anos conheci o Technovation Girls, programa que incentiva meninas na tecnologia. Foi ali que descobri que programação poderia ser a minha carreira.",
  },
  {
    icon: Code2,
    title: "Transformando interesse em profissão",
    text: "Conquistei uma bolsa para o curso Técnico em Desenvolvimento de Sistemas e comecei a transformar interesse em conhecimento e prática.",
  },
  {
    icon: Rocket,
    title: "Aprendendo na prática",
    text: "Durante o curso iniciei meu estágio, conciliando trabalho, estudos e ensino médio. Um período intenso que acelerou meu crescimento profissional.",
  },
  {
    icon: Sparkles,
    title: "Escolhas que impulsionam",
    text: "A oportunidade de efetivação marcou um novo capítulo da minha trajetória, consolidando minha experiência em projetos e desafios do dia a dia.",
  },
  {
    icon: Coffee,
    title: "O que vem pela frente",
    text: "Hoje sigo ampliando meus conhecimentos na graduação e busco criar interfaces que unem tecnologia, design e boas experiências para as pessoas.",
  },
];

export default function About() {
  return (
    <section id="about" className="mt-40">
      <div className="md:grid md:grid-cols-[1fr_3fr] flex flex-wrap items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <img className="w-50" src={profileImage} alt="" />
          <Badge className="flex gap-2" variant={"secondary"}>
            <span className="size-2 rounded-full bg-pink-300"></span>
            Fernanda Guimarães
          </Badge>
          <Badge className="flex gap-2" variant={"secondary"}>
            <span className="size-2 rounded-full bg-pink-300"></span>
            Jogo favorito: Stardew Valley
          </Badge>
        </div>
        <div>
          <h2 className="text-left mb-0 max-lg:text-4xl lg:mb-5">
            Um pouco sobre mim
          </h2>
          <strong className="text-gradient">bio</strong>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Comecei minha carreira no mundo da programação aos 16 anos, desde
            então o meu foco tem sido aprimorar minhas habilidades,
            especialmente conhecendo de tudo um pouco, para cada vez mais me
            aprofundar no que me identifico. <br />
            Como estudante, quero me desenvolver profissionalmente, sempre em
            busca de inovar e trazer bons resultados. Sou proativa e bem
            detalhista, e como sempre eu digo: não há nada que eu não sei que eu
            não possa aprender e descobrir.
          </p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ABOUT_CARDS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="glass-card group relative overflow-hidden rounded-3xl p-6"
          >
            <div className="absolute -right-6 -top-6 size-24 rouded-full bg-linear-to-br from-pink-200 to-fuchsia-200 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
            <span className="mb-4 inline-grid size-11 place-items-center rounded-2xl bg-linear-to-br from-pink-200 via-rose-200 to-pink-500 text-pink-700 shadow-inner">
              <c.icon className="size-5" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="font-display">{c.title}</p>
              <p className="leading-relaxed text-muted-foreground text-sm">
                {c.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
