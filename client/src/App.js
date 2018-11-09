import React, { Component } from "react";
import ProjectList from "./components/projectList";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <h1>Projects:</h1>
                <ProjectList />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
