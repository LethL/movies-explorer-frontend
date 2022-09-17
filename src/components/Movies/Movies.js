import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import api from "../../utils/MoviesApi";
import React from "react";
import { filterMovies, filterShortMovies } from "../../utils/utils.js";

function Movies() {
  const handlerCheckbox =
    localStorage.getItem("shortMovies") === "on" ? "on" : "off";

  const [searchQuery, setSearchQuery] = React.useState("");
  const [Movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [shortMovies, setShortMovies] = React.useState(handlerCheckbox);

  function handlerFilteredMovies(movies, query, checkbox) {
    const moviesList = filterMovies(movies, query);
    setFilteredMovies(
      checkbox === "on" ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem("movies", JSON.stringify(moviesList));
  }

  function handlerSearch(value) {
    setSearchQuery(value);
    localStorage.setItem("searchQuery", value);
    localStorage.setItem("shortMovies", shortMovies);
    // console.log(value);
    console.log(localStorage);
    api
      .getMovies()
      .then((data) => {
        // console.log(data);
        setMovies(data);
        handlerFilteredMovies(data, value);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handlerSetCheckbox(e) {
    setShortMovies(e.target.value);
    localStorage.setItem("shortMovies", e.target.value);
  }

  React.useEffect(() => {
    const moviesArr = JSON.parse(localStorage.getItem("movies"));
    setShortMovies(localStorage.getItem("shortMovies"));
    setFilteredMovies(
      shortMovies === "on" ? filterShortMovies(moviesArr) : moviesArr
    );
  }, [shortMovies, searchQuery]);

  React.useEffect(() => {
    if (searchQuery) {
      const moviesArr = filterMovies(Movies, searchQuery, shortMovies);
      setFilteredMovies(moviesArr);
    }
  }, [searchQuery, Movies, shortMovies]);

  return (
    <section className="movies">
      <SearchForm
        Search={handlerSearch}
        onCheckbox={handlerSetCheckbox}
        shortMovies={shortMovies}
      />
      <MoviesCardList movies={filteredMovies} />
    </section>
  );
}

export default Movies;
