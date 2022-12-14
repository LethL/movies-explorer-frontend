import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import React from "react";
import { useWindowWidth } from "../../utils/utils.js";

function MoviesCardList(props) {
  const width = useWindowWidth();
  const [cards, setCards] = React.useState({ total: 0, more: 0 });
  const [cardsList, setCardsList] = React.useState([]);

  React.useEffect(() => {
    if (width >= 1200) {
      setCards({ total: 12, more: 3 });
    } else if (width < 1200 && width >= 610) {
      setCards({ total: 8, more: 2 });
    } else if (width < 610) {
      setCards({ total: 5, more: 2 });
    }
  }, [width]);

  React.useEffect(() => {
    if (props.movies.length && !props.savedMoviesPage) {
      const res = props.movies.filter((item, index) => {
        return index < cards.total;
      });
      setCardsList(res);
    }
  }, [props.movies, cards.total, props.savedMoviesPage]);

  function handlerClickMoreMovies() {
    const remaindCards = props.movies.length - cardsList.length;
    const start = cardsList.length;
    const end = cardsList.length + cards.more;
    if (remaindCards > 0) {
      const newCards = props.movies.slice(start, end);
      setCardsList([...cardsList, ...newCards]);
    }
  }

  function getSavedMoviesPage() {
    return props.movies.map((item) => (
      <MoviesCard
        key={item._id}
        card={item}
        savedPage={props.savedMoviesPage}
        handleDeleteMovie={props.handleDeleteMovie}
      />
    ));
  }

  function getterSavedMovieCard(movies, id) {
    return movies.find((item) => {
      return item.movieId === id;
    });
  }

  function getMainMoviesPage() {
    return cardsList.map((item) => {
      const likedMovie = getterSavedMovieCard(props.savedMovies, item.id);
      const likedMovieId = likedMovie ? likedMovie._id : null;
      return (
        <MoviesCard
          key={item.id}
          card={{ ...item, _id: likedMovieId }}
          handleLikeMovie={props.handleLikeMovie}
          savedPage={props.savedMoviesPage}
          handleDeleteMovie={props.handleDeleteMovie}
          isLiked={likedMovie ? true : false}
        />
      );
    });
  }

  return (
    <section className="movies__content">
      {props.loading ? (
        <Preloader />
      ) : props.notFoundMovies || props.isLoadingError ? (
        <p className="movies__list-problem">
          {props.isLoadingError
            ? "???? ?????????? ?????????????? ?????????????????? ????????????. ????????????????, ???????????????? ?? ?????????????????????? ?????? ???????????? ????????????????????. ?????????????????? ?????????????? ?? ???????????????????? ?????? ??????"
            : "???????????? ???? ??????????????"}
        </p>
      ) : (
        <>
          <ul className={`movies__list`}>
            {props.savedMoviesPage ? getSavedMoviesPage() : getMainMoviesPage()}
          </ul>
          <div className="movies__list-btn-area">
            <button
              className={`movies__list-btn ${
                props.savedMoviesPage ||
                cardsList.length === props.movies.length
                  ? "movies__list-btn_off"
                  : ""
              }`}
              type="button"
              onClick={handlerClickMoreMovies}
            >
              ??????
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
