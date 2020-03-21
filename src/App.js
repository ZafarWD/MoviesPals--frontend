import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Actors from "./components/Actors";
import Movies from "./components/Movies";
import Directors from "./components/Directors";
import Reviews from "./components/Reviews";
import Visitors from "./components/Visitors";
import Login from "./components/Login";
import MovieForm from "./components/MovieForm";
import DirectorForm from "./components/DirectorForm";
import ActorForm from "./components/ActorForm";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="fluid-container">
        <Switch>
          <Route path="/actors" component={Actors} />
          <Route path="/directors" component={Directors} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/visitors" component={Visitors} />
          <Route path="/movies" component={Movies} />
          <Route path="/movieform/:id" component={MovieForm} />
          <Route path="/dirform/:id" component={DirectorForm} />
          <Route path="/actform/:id" component={ActorForm} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
