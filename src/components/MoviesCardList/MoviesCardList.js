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
            setCards({ total: 12, more: 3});
        } else if (width < 1200 && width >= 610) {
            setCards({total: 8, more: 2});
        } else if (width < 610) {
            setCards({total: 5, more: 2});
        }
      }, [width]);

      React.useEffect(() => {
        if (props.movies.length) {
          const res = props.movies.filter((item, index) => {
            return index < cards.total;
          })
          setCardsList(res);
        }
      }, [props.movies, cards.total]);

      function handlerClickMoreMovies () {
        const remaindCards = props.movies.length - cardsList.length;
        const start = cardsList.length;
        const end = cardsList.length + cards.more;
        if (remaindCards > 0) {
          const newCards = props.movies.slice(start, end);
          setCardsList([...cardsList, ...newCards]);
        }
      }

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
            {cardsList.map((item) => (
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
                props.savedMovies || cardsList.length === props.movies.length ? "movies__list-btn_off" : ""
              }`}
              type="button"
              onClick={handlerClickMoreMovies}
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
