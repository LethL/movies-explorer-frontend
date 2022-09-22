import "./MoviesCard.css";

function MoviesCard(props) {
    function handleLikeClick() {
        props.handleLikeMovie(props.card);
    }

    function handleDeleteClick() {
        props.handleDeleteMovie(props.card);
    }

    return(
        <li className={`card`}>
            {props.savedPage ? <img className="card__photo" src={`${props.card.image}`} alt="фото"></img> : 
            <img className="card__photo" src={`https://api.nomoreparties.co${props.card.image.url}`} alt="фото"></img>}
            <div className="card__info">
                <p className="card__name">{props.card.nameRU}</p>
                <p className="card__duration">{props.card.duration}</p>
            </div>
            {props.savedPage ? (<button className={`card__like card__like_delete`}
            onClick={handleDeleteClick}></button> ) : (<button className={`card__like ${props.isLiked ? "card__like_active" : ""}`}
            onClick={props.isLiked ? handleDeleteClick : handleLikeClick}></button>)}
        </li>
    );
}

export default MoviesCard;
