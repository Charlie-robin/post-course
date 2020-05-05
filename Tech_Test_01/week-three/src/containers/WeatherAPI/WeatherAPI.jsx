import React, { useState, useEffect } from "react";
import styles from "./WeatherAPI.module.scss";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

const WeatherAPI = (props) => {
  const [weatherData, updateWeatherData] = useState([]);

  const fetchWeatherData = () => {
    const cityIds = [2643744, 4749005, 4219762];
    const apiKey = "0f33f5c78acf44e7d38b5f6706f6f59d";
    fetch(`http://api.openweathermap.org/data/2.5/group?id=${cityIds}&units=metric&appid=${apiKey}`)
      .then((result) => result.json())
      .then((result) => updateWeatherData(result.list))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const weatherCardJsx = weatherData.map((element) => (
    <div><WeatherCard
      key={element.id}
      title={element.name}
      temp={element.main.temp}
      minTemp={element.main.temp_min}
      maxTemp={element.main.temp_max}
      humidity={element.main.humidity}
    /></div>
  ));

  return (
    <>
      <section className={styles.weatherContainer}>{weatherCardJsx}</section>
    </>
  );
};

export default WeatherAPI;
