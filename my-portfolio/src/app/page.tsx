import React from "react";
import Header from "../components/header/";
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
              <button className="infocard-button">cv_fernanda_guimaraes</button>
            </div>
          </div>
          <div className="technologys-container ">
            <h3 className="technologys-title h3-title">Tecnologias</h3>
            <div className="technologys">
              <img src="/typescript.svg" alt="" />
              <img src="/css.svg" alt="" />
              <img src="/html.svg" alt="" />
              <img src="/sass.svg" alt="" />
              <img src="/js.svg" alt="" />
              <img src="/react.svg" alt="" />
              <img src="/nextjs.svg" alt="" />
            </div>
          </div>
          <div className="experience-container">
            <h3 className="experience-title h3-title">Experiência</h3>
            <div className="experience">
              <div className="experience-div">
                <img src="/web-developer.svg" alt="" />
                <h4 className="experience-name h4-title">Web Developer</h4>
                <p className="experience-description paragraph-text">
                  Execução de projetos utilizando a plataforma VTEX.IO como:
                  Fila, PenseFarma, Kopenhagen e Mizuno.
                </p>
              </div>
              <div className="experience-div">
                <img src="/aprendiz-suporte.svg" alt="" />
                <h4 className="experience-name h4-title">Aprendiz Suporte</h4>
                <p className="experience-description paragraph-text">
                  This is a template Figma file, turned into code using Anima.
                  Learn more at AnimaApp.com
                </p>
              </div>
              <div className="experience-div">
                <img src="/aprendiz-backend.svg" alt="" />
                <h4 className="experience-name h4-title">Aprendiz Back-end</h4>
                <p className="experience-description paragraph-text">
                  This is a template Figma file, turned into code using Anima.
                  Learn more at AnimaApp.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
