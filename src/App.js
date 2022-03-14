import React from "react";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

function App() {
  const HatsPage = () => {
    return (
      <div>
        <h1>HATS PAGE</h1>
      </div>
    );
  };

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
