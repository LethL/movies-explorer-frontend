import "./MoviesCard.css";

function MoviesCard(props) {
    return(
        <li className={`card ${props.savedMoviescard ? "card__for-only-landing" : ""}`}>
            <img className="card__photo" src={`https://api.nomoreparties.co${props.card.image.url}`} alt="фото"></img>
            <div className="card__info">
                <p className="card__name">{props.card.nameRU}</p>
                <p className="card__duration">{props.card.duration}</p>
            </div>
            <button className={`card__like ${props.savedMovies ? "card__like_delete" : ""}`}
            onClick={props.handleLikeMovie}></button>
        </li>
    );
}

export default MoviesCard;
