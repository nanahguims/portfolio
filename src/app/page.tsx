import React from "react";
import Header from "../components/header/";
import Footer from "@/components/footer";
import "./style.scss";

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
                Olá Mundo! Seja bem vindo(a) ao meu portfólio! Meu nome é
                Fernanda Guimarães Santana, sou desenvolvedora a mais ou menos 3
                anos, tenho experiência sólida no front-end, principalmente
                utilizando o ReactJS. Se quiser saber mais de forma prática ↪
                cheque o meu currículo clicando no botão a baixo.
              </p>
              <a
                className="infocard-link"
                href="https://www.canva.com/design/DAGEdID2D-c/HPas-G49TvoFK4N1cacEqw/edit?utm_content=DAGEdID2D-c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
              >
                <button className="infocard-button"> cv_fernanda</button>
              </a>
            </div>
          </section>
          <section className="technologys-container ">
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
          <section id="experience" className="experience-container">
            <h3 className="experience-title h3-title">Experiência</h3>
            <div className="experience">
              <div className="experience-div">
                <h4 className="experience-name h4-title">Avanti</h4>
                <p className="subtitle"> 09/2021 - 07/2023</p>
                <p className="experience-description paragraph-text">
                  Execução de projetos utilizando a plataforma VTEX.IO como:
                  Fila, PenseFarma, Kopenhagen e Mizuno.
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
          </section>
          <section id="education" className="education-container">
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
        </div>
        <Footer />
      </div>
    </>
  );
}
