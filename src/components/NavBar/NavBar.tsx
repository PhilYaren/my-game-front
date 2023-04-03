/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";

export default function NavBar (): JSX.Element {
  const user = null;
  const isAuth = (): JSX.Element => (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Главная
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Статистика
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Таблица лидеров
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Выйти
        </a>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Переключатель навигации"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {user && isAuth()}
        </div>
      </div>
    </nav>
  );
}
