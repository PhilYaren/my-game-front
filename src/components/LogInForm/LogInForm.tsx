import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../../redux/user/user.action";
import {loadConfigFromFile} from "vite";

export default function LogInForm (): JSX.Element {

  const [ form, setForm ] = useState({
    userName: '', password: '',
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      dispatch(authUser(data))
      navigate('/home');
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(event)} >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Имя пользователя
        </label>
        <input type="text" className="form-control" id="exampleInputEmail1" value={form.userName} name="userName" onChange={handleInput} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Пароль
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={form.password}
          name="password"
          onChange={handleInput}
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
