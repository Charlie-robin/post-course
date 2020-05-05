import React from "react";
import styles from "./Routing.module.scss";
import { Router, Redirect } from "@reach/router";
import WeatherAPI from "../WeatherAPI/WeatherAPI";
import FootBallManager from "../FootBallManager/FootBallManager";
import OneQuizQuestion from "../OneQuizQuestion/OneQuizQuestion";

const Routing = (props) => {
  const { players, mockData } = props;
  return (
    <>
      <Router>
        <WeatherAPI data={mockData} path="weather-api" />
        <FootBallManager players={players} path="football-manager" />
        <OneQuizQuestion path="one-quiz-question" />
      </Router>
    </>
  );
};

export default Routing;
