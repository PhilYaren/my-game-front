/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, logoutUser } from '../../redux/user/user.action';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

export default function NavBar(): JSX.Element {
  const user = useSelector((state) => state.UserReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/auth/logout', {
        credentials: 'include',
      });
      if (res.ok) {
        dispatch(logoutUser(null));
        navigate('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const isAuth = (): JSX.Element => (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home">
          Главная
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/statistics">
          Статистика
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/leaderboard">
          Таблица лидеров
        </Link>
      </li>
      <li className="nav-item">
        <a type="button" className="nav-link" onClick={handleLogout}>
          Выйти
        </a>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://elbrusboot.camp/"
          target="_blank"
        >
          <img src="/img/svoay_igra-PhotoRoom.png-PhotoRoom.png" alt="" />
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
