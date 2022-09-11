import  "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Movies from "../Movies/Movies";

function App() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/">
            <Main />
        </Route>
        <Route path="/movies">
            <Movies />
        </Route>
        <Footer />
      </div>
    );
  }
  
export default App;
