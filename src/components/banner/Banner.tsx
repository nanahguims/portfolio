import { motion } from "motion/react";
import { CodeCard } from "./CodeCard";

export default function Banner() {
  return (
    <section className="banner md:grid md:grid-cols-2 flex flex-wrap">
      <div className="flex flex-col gap-2">
        <h1>
          Olá, meu nome é <strong>Fernanda</strong>, desenvolvedora front-end.
        </h1>
        <h2>
          Seja bem-vindo(a) ao meu portfólio! Trabalho com tecnologia há mais ou
          menos 3 anos, tenho experiência sólida em desenvolvimento front-end.
          Se quiser saber mais de forma prática, cheque o meu currículo clicando
          no botão abaixo.
        </h2>
        <div className="flex gap-2 mt-5">
          <button className="btn-primary rounded-full">Baixar currículo</button>
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
