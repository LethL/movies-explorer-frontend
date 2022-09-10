import "./Portfolio.css";
import linkLogo from "../../images/link-logo.svg";

function Portfolio() {
    return(
        <div className="portfolio">
            <p className="portfolio__text">Портфолио</p>
            <ul className="portfolio__items">
                <li className="portfolio__item">
                    <p className="portfolio__item-name">Адаптивный сайт</p>
                    <a className="portfolio__item-link" target="_blank" href="https://github.com/LethL/russian-travel" rel="noreferrer"><img src={linkLogo} alt="ссылка"></img></a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__item-name">Многостраничный сайт</p>
                    <a className="portfolio__item-link" target="_blank" href="https://github.com/LethL/Online-zoo" rel="noreferrer"><img src={linkLogo} alt="ссылка"></img></a>
                </li>
                <li className="portfolio__item">
                    <p className="portfolio__item-name">Одностраничное приложение</p>
                    <a className="portfolio__item-link" target="_blank" href="https://github.com/LethL/react-mesto-api-full" rel="noreferrer"><img src={linkLogo} alt="ссылка"></img></a>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;
