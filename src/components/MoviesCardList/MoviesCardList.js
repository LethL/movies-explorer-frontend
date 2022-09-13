import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    return(
        <section className="movies__content">
            <ul className={`movies__list ${props.savedMovies ? "movies__list_save" : ""}`}>
                <MoviesCard savedMovies={props.savedMovies} />
                <MoviesCard savedMovies={props.savedMovies} />
                <MoviesCard savedMovies={props.savedMovies} />
                <MoviesCard savedMovies={props.savedMovies} savedMoviescard={props.savedMovies} />
                <MoviesCard savedMovies={props.savedMovies} savedMoviescard={props.savedMovies} />
                <MoviesCard savedMovies={props.savedMovies} savedMoviescard={props.savedMovies} />
                <MoviesCard savedMovies={props.savedMovies} savedMoviescard={props.savedMovies} />
                <MoviesCard savedMovies={props.savedMovies} savedMoviescard={props.savedMovies} />
                <MoviesCard savedMovies={props.savedMovies} savedMoviescard={props.savedMovies} />
                <MoviesCard savedMovies={props.savedMovies} savedMoviescard={props.savedMovies} />
                <MoviesCard savedMovies={props.savedMovies} savedMoviescard={props.savedMovies} />
                <MoviesCard savedMovies={props.savedMovies} savedMoviescard={props.savedMovies} />
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
