import React from "react";
import { Link } from "react-router-dom";

export default function SignUpForm (): JSX.Element {
  return <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Имя пользователя
    </label>
    <input type="text" className="form-control" id="exampleInputEmail1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Пароль
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div id="signUpHelp" className="form-text">
    Уже зарегистрированы? <Link to="/login"> Войти </Link>
  </div>
  <button type="submit" className="btn btn-primary">
    Отправить
  </button>
</form>
}
