import { motion } from "motion/react";
import { CodeCard } from "./CodeCard";
import { Download } from "lucide-react";
import { Badge } from "../ui/badge";

export default function Banner() {
  return (
    <section className="banner md:grid md:grid-cols-2 flex flex-wrap items-center md:gap-2 gap-4">
      <div className="flex flex-col gap-2">
        <Badge className="flex gap-2" variant={"secondary"}>
          <span className="size-2 rounded-full bg-pink-300"></span>
          Disponível para novos projetos
        </Badge>
        <h1 className="max-lg:text-4xl">
          Olá, meu nome é <strong className="text-gradient">Fernanda</strong>{" "}
          <br />
          desenvolvedora front-end
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          Seja bem-vindo(a) ao meu portfólio! Trabalho com tecnologia há mais ou
          menos 3 anos, tenho experiência sólida em desenvolvimento front-end.
          Se quiser saber mais de forma prática, cheque o meu currículo clicando
          no botão abaixo.
        </p>
        <div className="flex gap-2 mt-5">
          <button className="flex gap-2 btn-primary rounded-full">
            <Download />
            Baixar currículo
          </button>
          <button className="btn-ghost rounded-full">Entre em contato</button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        className="relative mx-auto w-full max-w-md"
      >
        <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-pink-200 via-rose-200 to-fuchsia-200 blur-2xl opacity-70" />
        <CodeCard />
      </motion.div>
    </section>
  );
}
