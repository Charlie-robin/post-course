import React from "react";
import styles from "./TeamBuilder.module.scss";

const TeamBuilder = (props) => {
  const { goalKeepers, attacker, midfielder, defender, clicked } = props;

  const positionJsx = (array) =>
    array.map((element) => (
      <p key={element.id} onClick={() => clicked(element.id)}>
        {element.name}
      </p>
    ));

  const selected = <p>&#9745;</p>;

  return (
    <>
      {/* <section className={styles.teamBuilder}> */}
      <div>
        <h3>Goal Keepers</h3>
        {goalKeepers ? positionJsx(goalKeepers) : selected}
      </div>
      <div>
        <h3>Defenders</h3>
        {defender ? positionJsx(defender) : selected}
      </div>
      <div>
        <h3>Mid fielders</h3>
        {midfielder ? positionJsx(midfielder) : selected}
      </div>
      <div>
        <h3>Attackers</h3>
        {attacker ? positionJsx(attacker) : selected}
      </div>
      {/* </section> */}
    </>
  );
};

export default TeamBuilder;
