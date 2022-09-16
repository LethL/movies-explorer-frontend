import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import api from "../../utils/MoviesApi";
import React from "react";

function Movies() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [Movies, setMovies] = React.useState([]);

    function handlerSearch(value) {
        setSearchQuery(value);
        localStorage.setItem('searchQuery', value);
        // console.log(value);
        // console.log(localStorage.searchQuery);
        api.getMovies()
            .then(data => {
                // console.log(data);
                setMovies(data);
            })
            .catch(err => {
                console.log(err);
              })
    }

    React.useEffect(() => {
      }, [searchQuery, Movies])

    return(
        <section className="movies">
            <SearchForm Search={handlerSearch} />
            <MoviesCardList movies={Movies} />
        </section>
    );
}

export default Movies;
