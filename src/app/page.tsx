import React from "react";
import Header from "../components/header/";
import Footer from "@/components/footer";
import "./style.scss";
import { History } from "@/components/accordion/content";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="home-container">
          <section className="home-infocard">
            <div className="infocard-image">
              <img src="./images/annythingelse.jpg" alt="annythingelse" />
            </div>
            <div className="infocard-links">
              <h2 className="infocard-title">Front-end Developer</h2>
              <p className="infocard-text">
                Olá, Mundo! Seja bem-vindo(a) ao meu portfólio! Meu nome é
                Fernanda Guimarães Santana, sou desenvolvedora há mais ou menos
                3 anos e tenho experiência sólida no front-end, principalmente
                utilizando o ReactJS. Se quiser saber mais de forma prática ↪
                cheque o meu currículo clicando no botão abaixo.
              </p>
              <a
                className="infocard-link"
                href="./cv-fernanda.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="default-button"> cv_fernanda</button>
              </a>
            </div>
          </section>
          <section className="technologys-container default-container ">
            <h3 className="technologys-title h3-title">Hard Skills</h3>
            <div className="technologys">
              <img src="./icons/typescript.svg" alt="" />
              <img src="./icons/sass.svg" alt="" />
              <img src="./icons/js.svg" alt="" />
              <img src="./icons/react.svg" alt="" />
              <img src="./icons/vtex.svg" alt="" />
              <img src="./icons/nextjs.svg" alt="" />
            </div>
          </section>
          <section
            id="experience"
            className="experience-container default-container"
          >
            <h3 className="experience-title h3-title">Experiência</h3>
            <div className="experience">
              <div className="experience-div">
                <h4 className="experience-name h4-title">Avanti</h4>
                <p className="subtitle"> 09/2021 - 07/2023</p>
                <p className="experience-description paragraph-text">
                  Desenvolvimento de sites de e-commerce utilizando a plataforma
                  VTEX.IO como: Fila, PenseFarma, Kopenhagen e Mizuno.
                </p>
              </div>
              <div className="experience-div">
                <h4 className="experience-name h4-title">NSC Comunicação</h4>
                <p className="subtitle">12/2023 - 03/2024</p>
                <p className="experience-description paragraph-text">
                  Atender a problemas de hardware ou software, oferecer suporte
                  técnico e montar equipamentos.
                </p>
              </div>
              <div className="experience-div">
                <h4 className="experience-name h4-title">Intelbras</h4>
                <p className="subtitle">03/2024 - Atualmente</p>
                <p className="experience-description paragraph-text">
                  Aprender e trabalhar no desenvolvimento focado no back-end.
                </p>
              </div>
            </div>
            <div className="certificates-container">
              <a
                href="https://drive.google.com/drive/folders/1RddMQjN_q8icJxYVU4g20Rwm65xWTY2G?usp=sharing"
                target="_blank"
              >
                <button className="certificates">
                  Clique aqui para visualizar certificados
                </button>
              </a>
            </div>
          </section>
          <section
            id="education"
            className="education-container default-container"
          >
            <h3 className="education-title h3-title">Formação</h3>
            <div className="education-div">
              <img src="./images/education.png" alt="" />
              <div className="education-description">
                <h4 className="education-name h4-title">
                  Bacharelado Interdiciplinar em Ciência e Tecnologia
                </h4>
                <p className="education-university subtitle">
                  Universidade do Estado de Santa Cataria (UDESC)
                </p>
                <p className="education-text paragraph-text">
                  02/2024 - Atualmente
                </p>
              </div>
            </div>
          </section>
          <div id="sobre" className="sobre">
            <section className="sobre-container default-container">
              <h3 className="sobre-title h3-title">Um pouco sobre mim</h3>
              <div className="sobre-div">
                <div className="sobre-container-photo">
                  <img src="./images/me.png" alt="" />
                  <p className="subtitle">
                    <strong> Nanda</strong>
                  </p>
                  <p className="paragraph-text">19 anos</p>
                  <p className="paragraph-text">
                    Jogo favorito: Stardew Valley
                  </p>
                  <a
                    className="sobre-link"
                    href="https://www.linkedin.com/in/fernanda-guimar%C3%A3es-santana/"
                    target="_blank"
                  >
                    <button className="sobre-button default-button">
                      ver mais
                    </button>
                  </a>
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
            <h4 className="history-title h4-title">Minha História</h4>
            <History />
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
