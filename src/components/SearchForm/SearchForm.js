import "./SearchForm.css";
import searchLogo from "../../images/search-logo.svg";
import React from "react";


function SearchForm({Search}) {
    const [value, setValue] = React.useState('');

    function handleChangeValue(e) {
        setValue(e.target.value);
      }

    function handleSubmit(e) {
        e.preventDefault();
        Search(value)
      }

    return(
        <form className="search" onSubmit={handleSubmit}>
            <div className="search__content">
                <input className="search__input"
                required type="text"
                placeholder="Фильм"
                onChange={handleChangeValue}
                value={value}>
                </input>
                <button className="search__btn" type="submit"><img src={searchLogo} alt="Поиск"></img></button>
            </div>
            <div className="search__filter-content">
                <label className="search__filter-input">
                <input className="search__filter-checkbox" type="checkbox"></input>
                <span className="search__filter-switcher"></span>
                </label>
                <p className='search__filter-name'>Короткометражки</p>
            </div>
        </form>
    );
}

export default SearchForm;
