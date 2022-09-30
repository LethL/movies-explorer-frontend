import { Link, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navigation.css";

function Navigation(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClickMenu() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="navigation">
      {props.loggedIn ? (
        <Route>
          <ul className="navigation__films">
            <li>
              <NavLink
                to="/movies"
                className="navigation__films-item"
                activeClassName="navigation__films-item_active"
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className="navigation__films-item"
                activeClassName="navigation__films-item_active"
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <div className="navigation__account-wrapper">
            <Link to="/profile" className="navigation__account">
              Аккаунт
            </Link>
            <Link to="/profile" className="navigation-item">
              <button
                className="navigation-item navigation_account-btn"
                type="button"
              ></button>
            </Link>
          </div>
          <div className="navigation__burger" onClick={handleClickMenu}>
            <span className="navigation__burger-item"></span>
          </div>
          <div
            className={`navigation__menu ${
              isClicked ? "navigation__menu_active" : ""
            }`}
          >
            <div
              className={`navigation__menu-content ${
                isClicked ? "navigation__menu-content_active" : ""
              }`}
            >
              <span
                className="navigation__menu-burger"
                onClick={handleClickMenu}
              ></span>
              <div className="navigation__menu-links">
                <NavLink
                  exact
                  to="/"
                  className="navigation__menu-link"
                  activeClassName="navigation__menu-link_active"
                >
                  Главная
                </NavLink>
                <NavLink
                  to="/movies"
                  className="navigation__menu-link"
                  activeClassName="navigation__menu-link_active"
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to="saved-movies"
                  className="navigation__menu-link"
                  activeClassName="navigation__menu-link_active"
                >
                  Сохранённые фильмы
                </NavLink>
              </div>
              <div className="navigation__menu-content-account">
                <Link to="/profile" className="navigation__account">
                  Аккаунт
                </Link>
                <Link to="/profile" className="navigation-item">
                  <button
                    className="navigation-item navigation_account-btn"
                    type="button"
                  ></button>
                </Link>
              </div>
            </div>
          </div>
        </Route>
      ) : (
        <Route>
          <div className="navigation__registration-wrapper">
            <Link to="/signup" className="navigation__registration">
              Регистрация
            </Link>
            <Link to="/signin" className="navigation__registration">
              <button
                className="navigation__registration navigation__registration-btn"
                type="button"
              >
                Войти
              </button>
            </Link>
          </div>
        </Route>
      )}
    </div>
  );
}

export default Navigation;
