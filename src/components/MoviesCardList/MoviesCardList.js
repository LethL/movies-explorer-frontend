import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    // console.log(props.movies);

    return(
        <section className="movies__content">
            <ul className={`movies__list`}>
                {props.movies.map((item) => (
                <MoviesCard
                key={item.id}
                card={item}
                savedPage={props.savedMovies}
                />)
                )}
            </ul>
            <div className="movies__list-btn-area">
            <button
            className={`movies__list-btn ${props.savedMovies ? "movies__list-btn_delete" : ""}`}
            type="button"
            >Ещё</button>
            </div>
        </section>
    );
}

export default MoviesCardList;
