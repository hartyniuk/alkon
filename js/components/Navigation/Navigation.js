import React from "react";

import "./Navigation.scss";

const navigation = props => (
  <header className="navigation__header">
    <nav>
    <div className="navigation__elements">
        <ul>
          <li>
            <a href="#">Strona główna</a>
          </li>
          <li>
            <a href="#">Kolekcja</a>
          </li>
          <li>
            <a href="#">O nas</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navigation;
