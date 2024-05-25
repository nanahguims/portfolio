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
          <div className="home-infocard">
            <div className="infocard-image">
              <img src="/images/annythingelse.jpg" alt="annythingelse" />
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
              <button className="infocard-button">cv_fernanda</button>
            </div>
          </div>
          <div className="technologys-container ">
            <h3 className="technologys-title h3-title">Tecnologias</h3>
            <div className="technologys">
              <img src="/icons/typescript.svg" alt="" />
              <img src="/icons/css.svg" alt="" />
              <img src="/icons/html.svg" alt="" />
              <img src="/icons/sass.svg" alt="" />
              <img src="/icons/js.svg" alt="" />
              <img src="/icons/react.svg" alt="" />
              <img src="/icons/vtex.svg" alt="" />
              <img src="/icons/nextjs.svg" alt="" />
            </div>
          </div>
          <div className="experience-container">
            <h3 className="experience-title h3-title">Experiência</h3>
            <div className="experience">
              <div className="experience-div">
                <img src="/icons/web-developer.svg" alt="" />
                <div>
                  <h4 className="experience-name h4-title">Web Developer</h4>
                  <p className="subtitle">
                    Avanti Ecommerce & Marketing Digital
                  </p>
                  <p className="experience-description paragraph-text">
                    Execução de projetos utilizando a plataforma VTEX.IO como:
                    Fila, PenseFarma, Kopenhagen e Mizuno.
                  </p>
                </div>
              </div>
              <div className="experience-div">
                <img src="/icons/aprendiz-suporte.svg" alt="" />
                <div>
                  <h4 className="experience-name h4-title">Aprendiz Suporte</h4>
                  <p className="subtitle">NSC Comunicação</p>
                  <p className="experience-description paragraph-text">
                    Atender a problemas de hardware ou software, oferecer
                    suporte técnico e montar equipamentos.
                  </p>
                </div>
              </div>
              <div className="experience-div">
                <img src="/icons/aprendiz-backend.svg" alt="" />
                <div>
                  <h4 className="experience-name h4-title">
                    Aprendiz Back-end
                  </h4>
                  <p className="subtitle">Intelbras</p>
                  <p className="experience-description paragraph-text">
                    Aprender e trabalhar no desenvolvimento focado no back-end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
