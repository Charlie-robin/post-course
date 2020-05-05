import React from "react";
import styles from "./Navigation.module.scss";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
        <Link className={styles.link} to="/weather-api"><li>Weather Api</li></Link>
        <Link className={styles.link} to="/one-quiz-question"><li>One Quiz Question</li></Link>
        <Link className={styles.link} to="/football-manager"><li>Football Manager</li></Link>
          
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
