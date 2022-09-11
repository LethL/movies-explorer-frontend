import "./MoviesCard.css";
import cardPhoto from "../../images/card-photo.png";

function MoviesCard() {
    return(
        <li className="card">
            <img className="card__photo" src={cardPhoto} alt="фото"></img>
            <div className="card__info">
                <p className="card__name">33 слова о дизайне</p>
                <p className="card__duration">1ч 47м</p>
            </div>
            <button className="card__like"></button>
        </li>
    );
}

export default MoviesCard;
