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
            <div className="infocard-links">
              <h2 className="infocard-title">Fernanda Guimarães</h2>
              <p className="infocard-text">
                Olá! Seja bem vindo(a) ao meu portfólio! Cheque o meu currículo
                clicando no botão a baixo, se preferir.
              </p>
              <button className="infocard-button">CV</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
