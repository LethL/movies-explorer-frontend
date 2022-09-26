import { Link, useHistory } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
    const history = useHistory();

    function goBack() {
        history.goBack()
    }

    return(
        <section className="not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__text">Страница не найдена</p>
            <Link to="/#" className="not-found__link" onClick={goBack}>Назад</Link>
        </section>
    );
}

export default PageNotFound;
