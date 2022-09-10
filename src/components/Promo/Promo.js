import "./Promo.css"
import promoLogo from "../../images/promo-logo.svg";

function Promo() {
    return(
        <div className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={promoLogo} alt="промо-лого" className="promo__logo"></img>
        </div>
    );
}

export default Promo;