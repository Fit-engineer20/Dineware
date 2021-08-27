import React from "react";
import { Route,Switch } from "react-router-dom";
import './App.css';
import Home from "./landing/Home.jsx";
import About from "./landing/About.jsx";
import Featured from "./landing/Featured.jsx";
import Cart from "./cart/Cart.jsx";
import Error from "./Error.jsx";

function App() {
  return (
    <div className="App">

    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/featured' component={Featured} />
      <Route exact path='/cart' component={Cart} />
      <Route component={Error} />
    </Switch>

    </div>
  );
}

export default App;
