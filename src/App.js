import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import "./App.css";

import Home from "./views/Home/";
import Contribuition from "./views/Contribuition/";

function App() {
  return (
    <div className="App">
      <Router hist={useHistory}>
        <Switch>
          <Route exact path="/" render={props => <Home />} />
          <Route
            exact
            path="/contribuition"
            render={props => <Contribuition />}
          />
          <Route path="*" render={props => <div>Page not found</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
