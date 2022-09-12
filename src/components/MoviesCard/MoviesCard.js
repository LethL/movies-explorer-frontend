import "./MoviesCard.css";
import cardPhoto from "../../images/card-photo.png";

function MoviesCard(props) {
    return(
        <li className={`card ${props.savedMoviescard ? "card__for-only-landing" : ""}`}>
            <img className="card__photo" src={cardPhoto} alt="фото"></img>
            <div className="card__info">
                <p className="card__name">33 слова о дизайне</p>
                <p className="card__duration">1ч 47м</p>
            </div>
            <button className={`card__like ${props.savedMovies ? "card__like_delete" : ""}`}></button>
        </li>
    );
}

export default MoviesCard;
