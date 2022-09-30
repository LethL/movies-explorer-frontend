import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { React, Route } from "react-router-dom";
import Logo from "../Logo/Logo";

function Header(props) {
    const paths = ['/', '/movies', '/saved-movies', '/profile'];

    return(
        <Route exact path={paths}>
        <header className={`header ${props.loggedIn ? "" : "header_main"}`}>
            <Logo />
            <Navigation loggedIn={props.loggedIn} />
        </header>
        </Route>
    );
};

export default Header;
