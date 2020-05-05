import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";

import "../styles/styles.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
