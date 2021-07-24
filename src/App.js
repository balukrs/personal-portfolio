import React from "react";
import Showcase from "./components/showcase/showcase";
import About from "./components/about/about";
import Navbar from "./components/navbar/navbar";
import Project from "./components/projects/main";
import Contact from "./components/contact/contact";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
import Store from "./context";

const App = () => {
  const location = useLocation();

  return (
    <div className="container relative mx-auto border-box font-ibm">
      <Store>
        <Navbar />
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route path="/" exact component={Showcase}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/projects" component={Project}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </AnimatePresence>
      </Store>
    </div>
  );
};

export default App;
