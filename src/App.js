import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="*">
          <ErrorComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
