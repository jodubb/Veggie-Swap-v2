import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loginscreen from './Loginscreen'
import Grid from "./components/Grid";
import Register from "./Register";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  
  render() {
    return (
      
      <React.Fragment>
        <NavBar />
        <Switch>
          <Redirect exact path = "/" to = "/Grid" />
          <Route path = "/Grid" component = { Grid } />
          <Route path = "/Login" component = { Loginscreen } />
          <Route path = "/Register" component = { Register } />
          <Loginscreen />
          <Register />
        </Switch>
        <Footer />
      </React.Fragment>
      
    );
    
  }
}

export default App;
