import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import api from "../../utils/MoviesApi";
import React from "react";
import { filterMovies, filterShortMovies } from "../../utils/utils.js";

function Movies(props) {
  // console.log(props.handleLikeMovie);
  const handlerCheckbox =
    localStorage.getItem("shortMovies") === "on" ? "on" : "off";

  const [searchQuery, setSearchQuery] = React.useState("");
  const [Movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [shortMovies, setShortMovies] = React.useState(handlerCheckbox);
  const [loading, setLoading] = React.useState(false);
  const [notFoundMovies, setnotFoundMovies] = React.useState(false);
  const [isLoadingError, setisLoadingError] = React.useState(false);

  function handlerFilteredMovies(movies, query, checkbox) {
    const moviesList = filterMovies(movies, query);
    setFilteredMovies(
      checkbox === "on" ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem("movies", JSON.stringify(moviesList));
  }

  function handlerSearch(value) {
    setLoading(true);
    setSearchQuery(value);
    localStorage.setItem("searchQuery", value);
    localStorage.setItem("shortMovies", shortMovies);
    api
      .getMovies()
      .then((data) => {
        setMovies(data);
        handlerFilteredMovies(data, value);
      })
      .catch((err) => {
        setisLoadingError(true);
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  function handlerSetCheckbox(e) {
    setShortMovies(e.target.value);
    localStorage.setItem("shortMovies", e.target.value);
  }

  function handlerNotFoundMovies(moviesArr) {
    if (moviesArr) {
      moviesArr.length === 0
        ? setnotFoundMovies(true)
        : setnotFoundMovies(false);
    }
  }

  React.useEffect(() => {
    const moviesArr = JSON.parse(localStorage.getItem("movies"));
    if (moviesArr) {
      setShortMovies(localStorage.getItem("shortMovies"));
      setFilteredMovies(
        shortMovies === "on" ? filterShortMovies(moviesArr) : moviesArr
      );
      handlerNotFoundMovies(moviesArr);
    }
  }, [shortMovies, searchQuery]);

  React.useEffect(() => {
    if (searchQuery) {
      const moviesArr = filterMovies(Movies, searchQuery, shortMovies);
      setFilteredMovies(moviesArr);
      handlerNotFoundMovies(moviesArr);
    }
  }, [searchQuery, Movies, shortMovies]);

  return (
    <section className="movies">
      <SearchForm
        Search={handlerSearch}
        onCheckbox={handlerSetCheckbox}
        shortMovies={shortMovies}
      />
      <MoviesCardList
        movies={filteredMovies}
        loading={loading}
        notFoundMovies={notFoundMovies}
        isLoadingError={isLoadingError}
        savedMoviesPage={props.savedMoviesPage}
        handleLikeMovie={props.handleLikeMovie}
      />
    </section>
  );
}

export default Movies;
