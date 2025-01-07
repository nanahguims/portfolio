import React from "react";
import "./style.scss";

export default function Footer() {
  return (
    <>
      <div id="contact" className="footer-container">
        <div className="socialmedia-container">
          <h3 className="footer-title"> Entre em contato: </h3>
          <div className="socialmedia">
            <a href="https://github.com/nanahguims/" target="_blank">
              <img src="./images/github.png" alt="" />
            </a>
            <a href="mailto:fernandadev0202@gmail.com">
              <img src="./images/email.png" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/fernanda-guimar%C3%A3es-santana/"
              target="_blank"
            >
              <img src="./images/linkedin.png" alt="" />
            </a>
            <a href="https://www.instagram.com/nanahguims" target="_blank">
              <img src="./images/instagram.png" alt="" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5548988528045"
              target="_blank"
            >
              <img src="./images/whatsapp.png" alt="" />
            </a>
          </div>
        </div>
        <p className="footer-text">
          Layout totalmente desenvolvido por Fernanda Guimarães Santana
        </p>
        <p className="footer-text">
          Link do Repositório:{" "}
          <a href="https://github.com/nanahguims/portfolio" target="_blank">
            github
          </a>
        </p>
      </div>
    </>
  );
}
