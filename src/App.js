import React from "react";
import Showcase from "./components/showcase/showcase";
import About from "./components/about/about";
import Navbar from "./components/navbar/navbar";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";

const App = () => {
  const location = useLocation();
  return (
    <div className="container relative mx-auto border-box font-ibm">
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Showcase}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
