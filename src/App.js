import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import LandingPage from "./Component/LandingPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
