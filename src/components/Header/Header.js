import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { React, Route, useLocation } from "react-router-dom";

function Header(props) {
    let location = useLocation();
    const paths = ['/', '/movies', '/saved-movies', '/profile'];

    return(
        <Route exact path={paths}>
        <header className={`header ${location.pathname === '/' ? "header_main" : ""}`}>
            <Link to="/"><img className="header__logo" src={logo} alt="лого" /></Link>
            <Navigation />
        </header>
        </Route>
    );
};

export default Header;
