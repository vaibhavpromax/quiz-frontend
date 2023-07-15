4import React, { useState } from "react";
import styles from "./quiz.module.css";
import Container from "../../components/Container/Container";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import LoadingScreen from "../../components/LoadingScreen/Loading";

const answers: boolean[] = [true, false, true, false, true];

const options: {
  id: string;
  option: string;
}[] = [
  { id: "a", option: "A" },
  { id: "b", option: "B" },
  { id: "c", option: "C" },
  { id: "d", option: "D" },
];

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  return loading ? (
    <LoadingScreen user1="player1" user2="player2" />
  ) : (
    <div className={styles.quiz}>
      <div className={styles.header}>
        <div className={styles.profilepic}></div>
        <div className={styles.profilepic}></div>
      </div>
      <div className={styles.checkboxes}>
        <div className={styles.tickbox}>
          {answers?.map((ans, index) => {
            return (
              <div key={index} className={styles.box}>
                {ans ? "✅" : "❌"}
              </div>
            );
          })}
        </div>
        <div className={styles.tickbox}>
          {answers?.map((ans, index) => {
            return (
              <div key={index} className={styles.box}>
                {ans ? "✅" : "❌"}
              </div>
            );
          })}
        </div>
      </div>
      <Container className={styles.questions}>
        <div className={styles.timer}>
          <CountdownCircleTimer
            isPlaying
            duration={10}
            size={80}
            colors={[
              "#00FF00",
              "#66FF00",
              "#CCFF00",
              "#FFFF00",
              "#FFCC00",
              "#FF9900",
              "#FF6600",
              "#FF3300",
              "#FF0000",
            ]}
            colorsTime={[9, 8, 7, 6, 5, 4, 3, 2, 1]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
        <div className={styles.numberofq}>Questions 3 of 10</div>
        <div className={styles.question}>What is the correct option ?</div>
        <div className={styles.options}>
          {options.map((opt, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedOption(opt.id);
                }}
              >
                <Container
                  className={`${selectedOption === opt.id && styles.selected} ${
                    styles.option
                  }`}
                >
                  {opt.option}
                </Container>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Quiz;
