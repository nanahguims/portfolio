import React from "react";
import Header from "../components/header/";
import "./style.css";

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
                cheque o meu currículo clicando no botão a baixo ↓
              </p>
              <button className="infocard-button">CV</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
