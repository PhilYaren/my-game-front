import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../../redux/user/user.action";

export default function SignUpForm (): JSX.Element {

  const [ form, setForm ] = useState({
    userName: '', email: '', password: '',
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
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
      return null;
    }
  }

  return <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Имя пользователя
    </label>
    <input type="text" className="form-control" name="userName" value={form.userName} id="exampleInputEmail1" onChange={handleInput} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
    <input type="email" className="form-control" name="email" value={form.email}  id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInput} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Пароль
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      name="password"
      value={form.password}
      onChange={handleInput}
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
