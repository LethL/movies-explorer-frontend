import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import MainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";

function App() {
  const history = useHistory();

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleRegister(email, password, name){
    auth.register(email, password, name)
      .then(data => {
        if (data) {
          console.log(data);
          // history.push("/movies");
        } 
      })
      .catch(err => console.log(err));
  }

  function handleSaveMovie(movie) {
    MainApi.saveMovie(movie)
      .then((newCard) => {
        setSavedMovies([newCard, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute path="/movies" component={Movies} handleLikeMovie={handleSaveMovie} />
        <ProtectedRoute path="/saved-movies" component={SavedMovies} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
