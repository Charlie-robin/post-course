import React from "react";
import styles from "./WeatherCard.module.scss";

const WeatherCard = (props) => {
  const { title, temp, minTemp, maxTemp, humidity } = props;
  return (
    <>
      <div className={styles.weatherCard}>
        <h3>{title}</h3>
        <ul>
          <li>Current Temp : {temp} &deg;</li>
          <li>Humidity : {humidity}%</li>
          <li>Min Temp : {minTemp} &deg;</li>
          <li>Max Temp : {maxTemp} &deg;</li>
        </ul>
      </div>
    </>
  );
};

export default WeatherCard;
