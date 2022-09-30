import "./AboutMe.css";
import photo from "../../images/my-photo.jpg";

function AboutMe() {
    return(
        <section className="me">
            <h2 className="me__title">Студент</h2>
            <div className="me__content">
                <div className="me__bio">
                    <h3 className="me__bio-title">Дмитрий</h3>
                    <h4 className="me__bio-subtitle">Фронтенд-разработчик, 30 лет</h4>
                    <p className="me__bio-text">Живу в Нижнем Новгороде. Активно изучаю веб-разработку. В данный момент прохожу курс веб-разработчик в яндекс.практикуме.</p>
                    <a target="_blank" href="https://github.com/LethL" className="me__bio-link" rel="noreferrer">Github</a>
                </div>
                <img className="me__photo" src={photo} alt="мое-фото"></img>
            </div>
        </section>
    );
}

export default AboutMe;
