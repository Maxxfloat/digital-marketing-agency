import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../MainComponents/Header";
import Footer from "../MainComponents/Footer";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Index from "../Pages/";
import Signup from "../Pages/Signup";
import NotFindPage from "../Pages/NotFindPage";

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFindPage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
