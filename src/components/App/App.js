import  "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
// import api from "../../utils/MoviesApi";

function App() {
  // function handleGetInitialMovies () {
  //   api.getMovies()
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
              <Main />
          </Route>
          <Route path="/movies">
              <Movies />
          </Route>
          <Route path="/saved-movies">
              <SavedMovies />
          </Route>
          <Route path="/profile">
              <Profile />
          </Route>
          <Route path="/signup">
            <Register />
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
