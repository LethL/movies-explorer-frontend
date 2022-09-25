import React from "react";
import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, setValues, errors, isValid, handleChange } =
    useFormWithValidation();

  React.useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [setValues, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateProfile(values.name, values.email);
  }

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <label className="profile__label profile__label_first">
          Имя
          <input
            type="text"
            className="profile__input"
            name="name"
            minLength="2"
            maxLength="30"
            required
            id="name"
            value={values.name || ""}
            onChange={handleChange}
          />
          <span className="profile__form-error">{errors.name || ""}</span>
        </label>
        <label className="profile__label">
          E-mail
          <input
            type="email"
            className="profile__input"
            name="email"
            minLength="2"
            maxLength="30"
            required
            id="email"
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className="profile__form-error">{errors.email || ""}</span>
        </label>
        <button
          className={`profile__btn profile__btn_edit ${
            isValid ? "" : "profile__btn profile__btn_edit_disabled"
          }`}
          type="submit"
          disabled={!isValid}
        >
          Редактировать
        </button>
        <button
          className="profile__btn profile__btn_exit"
          type="button"
          onClick={props.onLogOut}
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
