import React from "react";
import Header from "../components/header/";
import Footer from "@/components/footer";
import "./style.scss";
import { History } from "@/components/accordion/content";

const myAge = () => {
  const birthdayDate = new Date("2005-02-02");
  const today = new Date();

  let age = today.getFullYear() - birthdayDate.getFullYear();

  const newAge =
    today.getMonth() > birthdayDate.getMonth() ||
    (today.getMonth() === birthdayDate.getMonth() &&
      today.getDate() >= birthdayDate.getDate());

  if (!newAge) {
    age--;
  }

  return age;
};

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="home-container">
          <section className="home-infocard">
            <div className="infocard-image">
              <div className="infocard-image-container">
                <img src="./icons/infocard.svg" alt="" />
                Olá, eu sou a Nana!
              </div>
              <img src="./images/nanahguims.jpeg" alt="nanahguims" />
            </div>
            <div className="infocard-links">
              <h2 className="infocard-title">
                Desenvolvedora <br /> <strong>Front-end</strong>
              </h2>
              <p className="infocard-text">
                Olá, Mundo! Seja bem-vindo(a) ao meu portfólio! Meu nome é
                Fernanda Guimarães Santana, trabalho com tecnologia há mais ou
                menos 3 anos, tenho experiência sólida em desenvolvimento
                front-end e suporte TI. Se quiser saber mais de forma prática ↪
                cheque o meu currículo clicando no botão abaixo.
              </p>
              <div className="infocard-buttons">
                <a
                  className="infocard-link"
                  href="./cv_fernanda.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="default-button"> cv_fernanda</button>
                </a>
                <a
                  className="infocard-link"
                  href="./cv_fernanda.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="secondary-button"> cv_fernanda</button>
                </a>
              </div>
            </div>
          </section>
          <div className="about-container default-container">
            <section className="technologys-container">
              <h3 className="technologys-title h3-title">Tecnologias</h3>
              <div className="technologys">
                <div className="technologys-item">
                  <div className="technologys-icon">
                    <img src="./icons/html.svg" alt="html" />
                  </div>
                  Html5
                </div>
                <div className="technologys-item">
                  <div className="technologys-icon">
                    <img src="./icons/javascript.svg" alt="Javascript" />
                  </div>
                  JS (ES6+)
                </div>
                <div className="technologys-item">
                  <div className="technologys-icon">
                    <img src="./icons/react.svg" alt="React" />
                  </div>
                  React.js
                </div>
                <div className="technologys-item">
                  <div className="technologys-icon">
                    <img src="./icons/nextjs.svg" alt="NextJs" />
                  </div>
                  Next.js
                </div>
                <div className="technologys-item">
                  <div className="technologys-icon">
                    <img src="./icons/tailwind.svg" alt="tailwind" />
                  </div>
                  Tailwind
                </div>
                <div className="technologys-item">
                  <div className="technologys-icon">
                    <img src="./icons/css.svg" alt="Css" />
                  </div>
                  CSS3
                </div>
              </div>
            </section>
            <section id="experience" className="experience-container">
              <h3 className="h3-title">Experiência</h3>
              <div className="experience">
                <div className="experience-div">
                  <div className="experience-item">
                    <h4 className="experience-title">Mais Internet</h4>

                    <p className="experience-description paragraph-text">
                      Desenvolvimento e integração de sistemas web utilizando
                      tecnologias como ReactJS, JavaScript, TypeScript e
                      CSS/Tailwind, consultas e requisições de APIs REST.
                    </p>
                  </div>
                </div>
                <div className="experience-div">
                  <div className="experience-item">
                    <h4 className="experience-title">Avanti</h4>
                    <p className="experience-description paragraph-text">
                      Desenvolvimento de sites de e-commerce utilizando a
                      plataforma VTEX.IO como: Fila, PenseFarma, Kopenhagen e
                      Mizuno.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section
            id="education"
            className="education-container default-container"
          >
            <div className="education-div">
              <div className="education-description">
                <h4 className="education-name h4-title">
                  Bacharelado Interdiciplinar em Ciência e Tecnologia
                </h4>
                <p className="education-university subtitle">
                  Universidade do Estado de Santa Cataria (UDESC)
                </p>
                <p className="education-text paragraph-text">Quinto semestre</p>
                <div className="formation">
                  <p className="paragraph-text">2024 - 2026</p>
                </div>
              </div>
            </div>
          </section>
          <div id="sobre" className="sobre">
            <section className="sobre-container default-container">
              <h3 className="sobre-title h3-title">About me</h3>
              <div className="sobre-div">
                <div className="sobre-container-photo">
                  <img src="./images/me.jpeg" alt="" />
                  <p className="subtitle">
                    <strong>Fernanda</strong>
                  </p>
                  <p className="paragraph-text">Idade: {myAge()}</p>
                  <p className="paragraph-text">
                    Jogo favorito: Stardew Valley
                  </p>
                  <a
                    className="sobre-link"
                    href="https://www.linkedin.com/in/fernanda-guimar%C3%A3es-santana/"
                    target="_blank"
                  ></a>
                </div>
                <div className="sobre-container-bio">
                  <p className="sobre-text paragraph-text">
                    <strong>bio</strong> <br />
                    Comecei minha carreira no mundo da programação aos 16 anos,
                    desde então o meu foco tem sido aprimorar minhas
                    habilidades, especialmente conhecendo de tudo um pouco, para
                    cada vez mais me aprofundar no que me identifico. <br />{" "}
                    Como estudante, quero me desenvolver profissionalmente,
                    sempre em busca de inovar e trazer bons resultados. Sou
                    proativa e bem detalhista, e como sempre eu digo: não há
                    nada que eu não sei que eu não possa aprender e descobrir.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <section className="history-container default-container">
            <History />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
