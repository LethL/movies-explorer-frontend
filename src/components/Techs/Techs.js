import "./Techs.css";

function Techs() {
    return(
        <div className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__content">
                <h3 className="techs__content-title">7 технологий</h3>
                <p className="techs__content-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs__stack">
                    <div className="techs__stack-item">HTML</div>
                    <div className="techs__stack-item">CSS</div>
                    <div className="techs__stack-item">JS</div>
                    <div className="techs__stack-item">React</div>
                    <div className="techs__stack-item">Git</div>
                    <div className="techs__stack-item">Express.js</div>
                    <div className="techs__stack-item">mongoDB</div>
                </div>
            </div>
        </div>
    );
}

export default Techs;
