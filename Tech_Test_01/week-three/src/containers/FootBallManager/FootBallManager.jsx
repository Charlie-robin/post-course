import React, { useState } from "react";
import styles from "./FootBallManager.module.scss";

import TeamBuilder from "../../components/TeamBuilder/TeamBuilder";
import TeamViewer from "../../components/TeamViewer/TeamViewer";

const FootBallManager = (props) => {
  const { players } = props;
  const [playerSelection, updatePlayers] = useState(players);
  const [currentTeam, updateTeam] = useState([]);

  const addToTeam = (playerId) => {
    const player = playerSelection.filter((element) => element.id === playerId);
    const playerRemoved = playerSelection.filter((element) => element.id !== playerId);
    const curTeamState = [...currentTeam, ...player];
    updatePlayers(playerRemoved);
    updateTeam(curTeamState);
  };

  const removeFromTeam = (playerId) => {
    const player = players.filter((element) => element.id === playerId);
    const playerRemoved = currentTeam.filter((element) => element.id !== playerId);
    const curTeamState = [...playerSelection, ...player];
    updatePlayers(curTeamState);
    updateTeam(playerRemoved);
  }

  const filterPlayers = (position) =>
    playerSelection.filter((element) => element.position === position);

  const filterTeam = (position) => currentTeam.filter((element) => element.position === position);

  const checkPostions = (position, limit) =>
    currentTeam.filter((element) => element.position === position).length < limit;

  const buildGoalKeepers = checkPostions("Goalkeeper", 1) ? filterPlayers("Goalkeeper") : null;
  const buildAttackers = checkPostions("Attacker", 3) ? filterPlayers("Attacker") : null;
  const buildMidfielders = checkPostions("Midfielder", 4) ? filterPlayers("Midfielder") : null;
  const buildDefenders = checkPostions("Defender", 3) ? filterPlayers("Defender") : null;

  // const chosenTeam = currentTeam.map((element) => (
  //   <p key={element.id}>
  //     {element.name}
  //     {element.position}
  //   </p>
  // ));

  const viewGoalKeepers = filterTeam("Goalkeeper");
  const viewAttackers = filterTeam("Attacker");
  const viewMidfielders = filterTeam("Midfielder");
  const viewDefenders = filterTeam("Defender");

  return (
    <>
      <section className={styles.footBallContainer}>
        <div>
          <TeamViewer
            goalKeepers={viewGoalKeepers}
            attacker={viewAttackers}
            midfielder={viewMidfielders}
            defender={viewDefenders}
            clicked={removeFromTeam}
          />
        </div>

        <div>
          <TeamBuilder
            goalKeepers={buildGoalKeepers}
            attacker={buildAttackers}
            midfielder={buildMidfielders}
            defender={buildDefenders}
            clicked={addToTeam}
          />
        </div>
      </section>
    </>
  );
};

export default FootBallManager;
