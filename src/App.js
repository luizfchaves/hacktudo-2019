import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./views/Home/";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teste">
            <div>coe2</div>
          </Route>
          <Route path="/" render={props => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
