import React from "react";
import { Link } from "react-router-dom";

export default function LogInForm (): JSX.Element {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Имя пользователя
        </label>
        <input type="text" className="form-control" id="exampleInputEmail1" />
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
        Еще не зарегистрированы? <Link to="/signup">Зарегистрироваться</Link>
      </div>
      <button type="submit" className="btn btn-primary">
        Отправить
      </button>
    </form>
  )
}
