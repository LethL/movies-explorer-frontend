import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import MainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import successLogo from "../../images/success-logo.svg";
import errorLogo from "../../images/error-logo.svg";

function App() {
  const history = useHistory();

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [status, setStatus] = React.useState({ image: null, message: "" });

  function tokenCheck() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        auth
          .getContent(jwt)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              history.push("/movies");
            }
          })
          .catch((err) => console.log(err));
      }
    }
  }

  useEffect(() => {
    tokenCheck();
  });

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (loggedIn) {
      MainApi.getUser(jwt)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.getUserMovies(jwt)
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  function handleRegister(email, password, name) {
    auth
      .register(email, password, name)
      .then((data) => {
        if (data) {
          setStatus({
            image: successLogo,
            message: "Вы успешно зарегистрировались!",
          });
          handleLogin(password, data.email)
        }
      })
      .catch((err) => {
        setStatus({
          image: errorLogo,
          message: "Что-то пошло не так! Попробуйте ещё раз.",
        })
        console.log(err);
      })
      .finally(() => setInfoTooltipOpen(true));
  }

  function handleLogin(password, email) {
    auth
      .authorize(password, email)
      .then((res) => {
        setStatus({
          image: successLogo,
          message: "С возвращением!",
        })
        setLoggedIn(true);
        localStorage.setItem("jwt", res.token);
        history.push("/movies");
      })
      .catch((err) => {
        setStatus({
          image: errorLogo,
          message: "Неправильные почта или пароль.",
        })
        console.log(err);
      })
      .finally(() => setInfoTooltipOpen(true));
  }

  function handleLogOut(e) {
    e.preventDefault();
    setLoggedIn(false);
    setSavedMovies([]);
    setCurrentUser({});
    localStorage.clear();
    history.push("/");
  }

  function handleSaveMovie(movie) {
    const jwt = localStorage.getItem("jwt");
    MainApi.saveMovie(movie, jwt)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteMovie(movie) {
    const jwt = localStorage.getItem("jwt");
    MainApi.deleteMovie(movie._id, jwt)
      .then(() => {
        const newMovies = savedMovies.filter((newMovie) => newMovie._id === movie._id ? false : true);
        setSavedMovies(newMovies);
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser(name, email) {
    const jwt = localStorage.getItem("jwt");
    MainApi.updateUser(name, email, jwt)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  };

  function handlecloseTooltip() {
    setInfoTooltipOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            handleLikeMovie={handleSaveMovie}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            handleDeleteMovie={handleDeleteMovie}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            handleDeleteMovie={handleDeleteMovie}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onLogOut={handleLogOut}
            onUpdateProfile={handleUpdateUser}
          />
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <InfoTooltip
          onClose={handlecloseTooltip}
          isOpen={isInfoTooltipOpen}
          image={status.image}
          message={status.message}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
