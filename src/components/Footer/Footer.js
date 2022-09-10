import "./Footer.css";

function Footer() {
    return(
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__info">
                <p className="footer__info-year">© 2022</p>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a className="footer__link-item" target="_blank" href="https://practicum.yandex.ru" rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__link">
                        <a className="footer__link-item" target="_blank" href="https://github.com/LethL" rel="noreferrer">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
