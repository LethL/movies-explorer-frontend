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
import MainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const history = useHistory();

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

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
          handleLogin(password, data.email)
        }
      })
      .catch((err) => console.log(err));
  }

  function handleLogin(password, email) {
    auth
      .authorize(password, email)
      .then((res) => {
        setLoggedIn(true);
        localStorage.setItem("jwt", res.token);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header />
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
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
