import React from "react";
import Homepage from "./components/homepage/homepage";
import About from "./components/about/about";

const App = () => {
  return (
    <div className="container relative mx-auto border-box font-cinzel">
      <Homepage />
      <About />
    </div>
  );
};

export default App;
