import "./Portfolio.css";
import linkLogo from "../../images/link-logo.svg";

function Portfolio() {
    return(
        <section className="portfolio">
            <p className="portfolio__text">Портфолио</p>
            <ul className="portfolio__items">
                <li className="portfolio__item">
                    <a className="portfolio__item-link" target="_blank" href="https://github.com/LethL/russian-travel" rel="noreferrer"><p className="portfolio__item-name">Адаптивный сайт</p><img src={linkLogo} alt="ссылка"></img></a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__item-link" target="_blank" href="https://github.com/LethL/Online-zoo" rel="noreferrer"><p className="portfolio__item-name">Многостраничный сайт</p><img src={linkLogo} alt="ссылка"></img></a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__item-link" target="_blank" href="https://github.com/LethL/react-mesto-api-full" rel="noreferrer"><p className="portfolio__item-name">Одностраничное приложение</p><img src={linkLogo} alt="ссылка"></img></a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
