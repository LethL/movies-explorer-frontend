import { React, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Logo.css";

function Logo() {
    return(
        <Link to="/"><img className="header__logo" src={logo} alt="лого" /></Link>
    );
};

export default Logo;
