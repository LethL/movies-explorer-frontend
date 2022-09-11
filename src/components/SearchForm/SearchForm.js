import "./SearchForm.css";
import searchLogo from "../../images/search-logo.svg";

function SearchForm() {
    return(
        <form className="search">
            <div className="search__content">
                <input className="search__input" placeholder="Фильм"></input>
                <button className="search__btn" type="button"><img src={searchLogo} alt="Поиск"></img></button>
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
