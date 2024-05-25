import React from "react";
import "./style.scss";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="socialmedia-container">
          <h3 className="footer-title h3-title"> Entre em contato</h3>
          <div className="socialmedia">
            <a href="">
              <img src="/images/github.png" alt="" />
            </a>
            <a href="">
              <img src="/images/email.png" alt="" />
            </a>
            <a href="">
              <img src="/images/linkedin.png" alt="" />
            </a>
            <a href="">
              <img src="/images/instagram.png" alt="" />
            </a>
            <a href="">
              <img src="/images/whatsapp.png" alt="" />
            </a>
          </div>
        </div>
        <p className="footer-text paragraph-text">
          Layout totalmente desenvolvido por Fernanda Guimarães Santana
        </p>
        <p className="footer-text paragraph-text">
          Link do Repositório: <a href="">github</a>
        </p>
      </div>
    </>
  );
}
