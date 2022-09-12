import React from "react";
import "./Profile.css";

function Profile() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    return(
        <section className="profile">
            <form className="profile__form">
                <h2 className="profile__title">{`Привет, ${name}!`}</h2>
                <label className='profile__label profile__label_first'>Имя
                    <input
                        type='text'
                        className='profile__input'
                        name='name'
                        minLength='2'
                        maxLength='30'
                        required
                        id='name'
                        value={name || ""}
                        onChange={handleChangeName}
                    />
                </label>
                <label className='profile__label'>E-mail
                    <input
                        type='email'
                        className='profile__input'
                        name='email'
                        minLength='2'
                        maxLength='30'
                        required
                        id='email'
                        value={email || ""}
                        onChange={handleChangeEmail}
                    />
                </label>
                <button className="profile__btn profile__btn_edit" type="submit">Редактировать</button>
                <button className="profile__btn profile__btn_exit" type="submit">Выйти из аккаунта</button>
            </form>
        </section>
    );
}

export default Profile;