import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Header() {
    return(
        <main className="main">
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
    );
}

export default Header;