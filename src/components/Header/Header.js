import { Link } from "react-router-dom";
import { Route} from "react-router-dom";
import './Header.css';
import logo from "../../images/logo.svg";

function Header() {
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="лого" />
            <div className='header__login'>
                <Route exact path='/'>
                    <Link to='/signup' className='header__login-item'>Регистрация</Link>
                    <Link to='/signin' className='header__login-item'><button className="header__login-item header__login-item_button" type="button">Войти</button></Link>
                </Route>
            </div>
        </header>
    );
};

export default Header;
