import "./AboutProject.css"

function AboutProject() {
    return(
        <section className="about">
            <h2 className="about__title">О проекте</h2>
            <div className="about__content">
                <div className="about__info">
                    <h3 className="about__info-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__info">
                    <h3 className="about__info-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__progress">
                <div className="about__progress-item about__progress-item_short">1 неделя</div>
                <div className="about__progress-item about__progress-item_long">4 недели</div>
                <p className="about__progress-text about__progress-text_back">Back-end</p>
                <p className="about__progress-text about__progress-text_front">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;