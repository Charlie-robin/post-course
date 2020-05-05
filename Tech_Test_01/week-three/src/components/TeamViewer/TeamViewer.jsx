import React from "react";
import styles from "./TeamViewer.module.scss";

const TeamViewer = (props) => {
  const { goalKeepers, attacker, midfielder, defender, clicked } = props;

  const positionJsx = (array) =>
    array.map((element) => (
      <p key={element.id} onClick={() => clicked(element.id)}>
        {element.name}
      </p>
    ));

  return (
    <>
      <div>{positionJsx(goalKeepers)}</div>
      <div>{positionJsx(defender)}</div>
      <div>{positionJsx(midfielder)}</div>
      <div>{positionJsx(attacker)}</div>
    </>
  );
};

export default TeamViewer;
