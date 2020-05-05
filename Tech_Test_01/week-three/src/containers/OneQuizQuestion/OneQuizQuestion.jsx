import React, { useState } from "react";
import styles from "./OneQuizQuestion.module.scss";

const OneQuizQuestion = () => {
  const [input, updateInput] = useState("");
  const [answerCheck, toggleCheck] = useState(false);
  const validateAnswer = () => (input === "hello" ? alert("correct") : alert("incorrect"));

  return (
    <>
      <section className={styles.quizContainer}>
        <form>
          <p>Hey up lad?</p>
          <input onInput={(event) => updateInput(event.target.value)} type="text" />
          <button type="button" onClick={() => validateAnswer()}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default OneQuizQuestion;
