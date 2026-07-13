import React from "react";
import "./style.scss";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-container-image">
          <p className="logo-title">nanahguims✨</p>
        </div>
        <div>
          <nav className="header-nav">
            <li className="header-item">
              <a className="header-link" href="#sobre">
                Sobre
              </a>
            </li>
            <li className="header-item">
              <a className="header-link" href="#experience">
                Experiência
              </a>
            </li>
            <li className="header-item">
              <a className="header-link" href="#contact">
                Contato
              </a>
            </li>
          </nav>
        </div>
      </div>
    </>
  );
}
