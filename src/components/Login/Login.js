import "./Login.css";
import "../Register/Register.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Login() {
    return(
        <section className="register">
            <div className="register__header">
                <Logo />
                <h2 className="register__header-title">Рады видеть!</h2>
            </div>
            <form className="register__form">
                <label className='register__form-label'>E-mail
                    <input
                        type='email'
                        className='register__form-nput'
                        name='email'
                        minLength='2'
                        maxLength='30'
                        required
                        id='email'
                    />
                </label>
                <label className='register__form-label'>Пароль
                    <input
                        type='password'
                        className='register__form-nput'
                        name='password'
                        minLength='2'
                        maxLength='30'
                        required
                        id='password'
                    />
                </label>
                <button className="register__form-btn register__form-btn_login" type="submit">Войти</button>
                <p className="register__form-text">Ещё не зарегистрированы? <Link className="register__form-link" to="/signup">Регистрация</Link></p>
            </form>
        </section>
    );
}

export default Login;
