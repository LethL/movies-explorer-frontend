import "./Register.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import React from "react";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Register(props) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(values.email, values.password, values.name);
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
            value={values.name || ""}
            onChange={handleChange}
          />
          <span className="register__form-error">{errors.name || ""}</span>
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
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className="register__form-error">{errors.email || ""}</span>
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
            value={values.password || ""}
            onChange={handleChange}
            autoComplete="off"
          />
          <span className="register__form-error">{errors.password || ""}</span>
        </label>
        <button
          className={`register__form-btn ${
            isValid ? "" : "register__form-btn_disabled"
          }`}
          type="submit"
          disabled={!isValid}
        >
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
