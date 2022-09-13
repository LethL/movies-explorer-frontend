import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { React, Route, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";

function Header(props) {
    let location = useLocation();
    const paths = ['/', '/movies', '/saved-movies', '/profile'];

    return(
        <Route exact path={paths}>
        <header className={`header ${location.pathname === '/' ? "header_main" : ""}`}>
            <Logo />
            <Navigation />
        </header>
        </Route>
    );
};

export default Header;
