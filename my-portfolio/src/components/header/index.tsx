import React from "react";
import "./style.scss";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-container-image">
          <img src="/images/logo.gif" alt="logo" />
          <p className="logo-title">Dev Portfólio</p>
        </div>
        <div>
          <nav className="header-nav">
            <li className="header-item">
              <a className="header-link" href="http://">
                Sobre
              </a>
            </li>
            <li className="header-item">
              <a className="header-link" href="http://">
                Experiência
              </a>
            </li>
            <li className="header-item">
              <a className="header-link" href="http://">
                Contato
              </a>
            </li>
          </nav>
        </div>
      </div>
    </>
  );
}
