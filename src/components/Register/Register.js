import "./Register.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import React from "react";

function Register(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
    console.log(name);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(email, password, name);
  }

  return (
    <section className="register">
      <div className="register__header">
        <Logo />
        <h2 className="register__header-title">Добро пожаловать!</h2>
      </div>
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__form-label">
          Имя
          <input
            type="text"
            className="register__form-nput"
            name="name"
            minLength="2"
            maxLength="30"
            required
            id="name"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label className="register__form-label">
          E-mail
          <input
            type="email"
            className="register__form-nput"
            name="email"
            minLength="2"
            maxLength="30"
            required
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label className="register__form-label">
          Пароль
          <input
            type="password"
            className="register__form-nput"
            name="password"
            minLength="2"
            maxLength="30"
            required
            id="password"
            value={password}
            onChange={handleChangePassword}
            autoComplete="off"
          />
        </label>
        <button className="register__form-btn" type="submit">
          Зарегистрироваться
        </button>
        <p className="register__form-text">
          Уже зарегистрированы?{" "}
          <Link className="register__form-link" to="/signin">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
