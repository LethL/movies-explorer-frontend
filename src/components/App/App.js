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
    if (loggedIn) {
      MainApi.getUser()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    tokenCheck();
  });

  function handleRegister(email, password, name) {
    auth
      .register(email, password, name)
      .then((data) => {
        if (data) {
          console.log(data);
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
    setCurrentUser({});
    localStorage.clear();
    history.push("/");
  };

  function handleSaveMovie(movie) {
    MainApi.saveMovie(movie)
      .then((newCard) => {
        setSavedMovies([newCard, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

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
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onLogOut={handleLogOut}
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
