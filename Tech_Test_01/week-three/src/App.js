import React from "react";

import "./App.css";

import Routing from "./containers/Routing";
import Navigation from "./containers/Navigation";

import players from "./data/football-data";
import weather from "./data/mock-weather-data";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routing players={players}/>
    </div>
  );
};

export default App;
