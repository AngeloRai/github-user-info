import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/LoginComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import UserRepos from "./components/UserRepos";

function App() {
  return (
    <div className="container">

      <BrowserRouter>
        <Switch>
          <Login />
          <Route exact path="/user-repos" component={UserRepos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
