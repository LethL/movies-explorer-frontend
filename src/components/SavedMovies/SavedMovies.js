import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";
import { filterMovies } from "../../utils/utils.js";

function SavedMovies(props) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [shortMovies, setShortMovies] = React.useState("off");
  const [filteredMovies, setFilteredMovies] = React.useState(props.savedMovies);
  const [notFoundMovies, setnotFoundMovies] = React.useState(false);

  function handlerSearch(value) {
    setSearchQuery(value);
    const savedMoviesList = filterMovies(
      props.savedMovies,
      searchQuery,
      shortMovies
    );
    setFilteredMovies(savedMoviesList);
  }

  function handlerSetCheckbox(e) {
    setShortMovies(e.target.value);
  }

  React.useEffect(() => {
    const moviesArr = filterMovies(props.savedMovies, searchQuery, shortMovies);
    setFilteredMovies(moviesArr);
    if (searchQuery) {
      moviesArr.length === 0
        ? setnotFoundMovies(true)
        : setnotFoundMovies(false);
    }
  }, [searchQuery, props.savedMovies, shortMovies]);

  return (
    <section className="saved-movies">
      <SearchForm
        Search={handlerSearch}
        savedMoviesPage={true}
        onCheckbox={handlerSetCheckbox}
        shortMovies={shortMovies}
      />
      <MoviesCardList
        savedMoviesPage={true}
        movies={filteredMovies}
        notFoundMovies={notFoundMovies}
        handleDeleteMovie={props.handleDeleteMovie}
      />
    </section>
  );
}

export default SavedMovies;
