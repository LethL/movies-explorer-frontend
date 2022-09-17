import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {

  return (
    <section className="movies__content">
      {props.loading ? (
        <Preloader />
      ) : props.notFoundMovies || props.isLoadingError ? (
        <p className="movies__list-problem">
          {props.isLoadingError
            ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
            : "Ничего не найдено"}
        </p>
      ) : (
        <>
          <ul className={`movies__list`}>
            {props.movies.map((item) => (
              <MoviesCard
                key={item.id}
                card={item}
                savedPage={props.savedMovies}
              />
            ))}
          </ul>
          <div className="movies__list-btn-area">
            <button
              className={`movies__list-btn ${
                props.savedMovies ? "movies__list-btn_delete" : ""
              }`}
              type="button"
            >
              Ещё
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
