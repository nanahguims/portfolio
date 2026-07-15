import profileImage from "../../../public/me.png";
import { Badge } from "../ui/badge";
export default function About() {
  return (
    <section id="#about" className="mt-48">
      <div className="md:grid md:grid-cols-[1fr_3fr] flex flex-wrap items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <img className="rounded-sm" src={profileImage} alt="" />
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
    </section>
  );
}
