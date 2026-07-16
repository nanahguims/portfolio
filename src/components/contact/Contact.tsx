import { Github, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-40 flex flex-col justify-center items-center gap-5"
    >
      <h2 className="text-left max-lg:text-4xl">Entre em contato</h2>
      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
        Minhas redes sociais
      </p>
      <div className="flex flex-wrap mb-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            {
              icon: Github,
              label: "GitHub",
              href: "https://github.com/nanahguims/",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/fernanda-guimar%C3%A3es-santana/",
            },
            {
              icon: Instagram,
              label: "Instagram",
              href: "https://www.instagram.com/nanahguims",
            },
            {
              icon: Mail,
              label: "Email",
              href: "mailto:fernandadev0202@gmail.com",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              className="glass-card grid size-20 place-items-center rounded-full transition hover:-translate-y-0.5 hover:shadow-[shadow-soft]"
            >
              <s.icon className="size-6" />
            </a>
          ))}
        </div>
      </div>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5548988528045"
      >
        <button className="flex items-center gap-2 btn-primary rounded-full">
          <MessageCircle className="size-5" />
          Enviar Mensagem
        </button>
      </a>
    </section>
  );
}
