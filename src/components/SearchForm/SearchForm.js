import "./SearchForm.css";
import searchLogo from "../../images/search-logo.svg";
import React from "react";
import useFormWithValidation from "../../hooks/useFormWithValidation";

function SearchForm(props) {
  const { values, setValues, isValid, handleChange, setIsValid } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (values.movie) {
      props.Search(values.movie);
    } else {
      setIsValid(false);
    }
  }

  React.useEffect(() => {
    if (!props.savedMoviesPage) {
      const input = localStorage.getItem("searchQuery");
      if (input) {
        setValues({movie : input});
        setIsValid(true);
      }
    }
  }, [props.savedMoviesPage, setValues, setIsValid]);

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__content">
        <input
          className="search__input"
          // required
          type="text"
          placeholder="Фильм"
          onChange={handleChange}
          name="movie"
          id="movie"
          value={values.movie || ""}
        ></input>
        <span className="search__error">
          {!isValid && !props.savedMoviesPage ? "Нужно ввести ключевое слово" : ""}
        </span>
        <button
          className={`search__btn ${isValid ? "" : "search__btn_disabled"}`}
          type="submit"
          // disabled={!isValid}
        >
          <img src={searchLogo} alt="Поиск"></img>
        </button>
      </div>
      <div className="search__filter-content">
        <label
          className={`search__filter-label ${
            props.shortMovies === "on" ? "search__filter-label_on" : ""
          }`}
        >
          <input
            className="search__filter-input"
            type="radio"
            value="off"
            name="shortMovies"
            checked={props.shortMovies === "off" ? true : false}
            onChange={props.onCheckbox}
          ></input>
          <input
            className="search__filter-input"
            type="radio"
            value="on"
            name="shortMovies"
            checked={props.shortMovies === "on" ? true : false}
            onChange={props.onCheckbox}
          ></input>
          <span className="search__filter-switcher"></span>
        </label>
        <p className="search__filter-name">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
