import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return(
        <section className="movies__content">
            <ul className="movies__list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <button className="movies__list-btn" type="button">Ещё</button>
        </section>
    );
}

export default MoviesCardList;
