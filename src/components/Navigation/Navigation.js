import { Link } from "react-router-dom";
import { Route} from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    const routes = ['/movies', '/saved-movies', '/profile'];

    return(
        <div className="navigation">
            <Route exact path="/">
                <div className="navigation__registration-wrapper">
                <Link to="/signup" className="navigation__registration">Регистрация</Link>
                <Link to="/signin" className="navigation__registration"><button className="navigation__registration navigation__registration-btn" type="button">Войти</button></Link>
                </div>
            </Route>
            <Route path={routes}>
                <ul className="navigation__films">
                    <li>
                        <Link to="/movies" className="navigation__films-item navigation__films-item_active">Фильмы</Link>
                        <Link to="/saved-movies" className="navigation__films-item">Сохранённые фильмы</Link>
                    </li>
                </ul>
                <div className="navigation__account-wrapper">
                    <Link to="/profile" className="navigation__account">Аккаунт</Link>
                    <Link to="/profile" className="navigation-item"><button className="navigation-item navigation_account-btn" type="button"></button></Link>
                </div>
                <div className="navigation__burger">
                    <span className="navigation__burger-item"></span>
                </div>
            </Route>
        </div>
    );
}

export default Navigation;
