import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";
import { filterMovies } from "../../utils/utils.js";

function SavedMovies(props) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [shortMovies, setShortMovies] = React.useState("off");
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  function handlerSearch(value) {
    setSearchQuery(value);
    const savedMoviesList = filterMovies(
      props.movies,
      searchQuery,
      shortMovies
    );
    setFilteredMovies(savedMoviesList);
  }

  function handlerSetCheckbox(e) {
    setShortMovies(e.target.value);
  }

  return (
    <section className="saved-movies">
      <SearchForm
        Search={handlerSearch}
        savedMoviesPage={true}
        onCheckbox={handlerSetCheckbox}
        shortMovies={shortMovies}
      />
      <MoviesCardList savedMoviesPage={true} movies={filteredMovies} />
    </section>
  );
}

export default SavedMovies;
