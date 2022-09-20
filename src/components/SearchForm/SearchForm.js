import "./SearchForm.css";
import searchLogo from "../../images/search-logo.svg";
import React from "react";


function SearchForm(props) {
    const [value, setValue] = React.useState("");

    function handleChangeValue(e) {
        setValue(e.target.value);
      }

    function handleSubmit(e) {
        e.preventDefault();
        props.Search(value)
    }

    React.useEffect(() => {
        if (!props.savedMoviesPage) {
            const input = localStorage.getItem("searchQuery");
            if (input) {
              setValue(input);
            }
        }
      }, [props.savedMoviesPage, setValue])

    return(
        <form className="search" onSubmit={handleSubmit}>
            <div className="search__content">
                <input className="search__input"
                required
                type="text"
                placeholder="Фильм"
                onChange={handleChangeValue}
                value={value}>
                </input>
                <button className="search__btn" type="submit"><img src={searchLogo} alt="Поиск"></img></button>
            </div>
            <div className="search__filter-content">
                <label className={`search__filter-label ${props.shortMovies === "on" ? "search__filter-label_on" : ""}`}>
                <input className="search__filter-input"
                type="radio"
                value="off"
                name="shortMovies"
                checked={props.shortMovies === "off" ? true : false}
                onChange={props.onCheckbox}
                >
                </input>
                <input className="search__filter-input"
                type="radio"
                value="on"
                name="shortMovies"
                checked={props.shortMovies === "on" ? true : false}
                onChange={props.onCheckbox}
                >
                </input>
                <span className="search__filter-switcher"></span>
                </label>
                <p className='search__filter-name'>Короткометражки</p>
            </div>
        </form>
    );
}

export default SearchForm;
