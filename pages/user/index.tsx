import React, { useEffect, useState } from "react";
import styles from "./user.module.css";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import Link from "next/link";
import { assets } from "../../assets";
import Image from "next/image";
import SwipeableEdgeDrawer from "../../components/SwipeableedgeDrawer/Swipeableedgedrawer";
import BasicSelect from "../../components/Select/Select";
import { NextApiRequest, NextApiResponse } from "next";

const subjects: {
  id: number;
  name: string;
}[] = [
  { id: 1, name: "Math" },
  { id: 2, name: "English" },
  { id: 3, name: "Hindi" },
  { id: 4, name: "Physics" },
  { id: 5, name: "Geography" },
  { id: 6, name: "History" },
  { id: 7, name: "Chemistry" },
  { id: 8, name: "Biology" },
  { id: 9, name: "GK" },
];

const User = () => {
  const [selectedOption, setSelectedOption] = useState<{
    subject: number;
  }>({
    subject: subjects[0].id,
  });

  const [user, setUser] = useState("");

  return (
    <div className={styles.user}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.userPic}></div>
          <div className={styles.name}>
            <h5 className={styles.greet}>GOOD MORNING</h5>
            <h4 className={styles.username}>Vaibhav</h4>
          </div>
        </div>
        <BasicSelect />
      </div>
      <div className={styles.recentCard}>
        <div className={styles.recentleft}>
          <h6 className={styles.rec}>RECENT QUIZ</h6>
          <div className={styles.lastquizname}>A Basic Music Quiz</div>
        </div>
        <div className={styles.recentright}></div>
      </div>
      <Image className={styles.img} src={assets.homeimg} alt="" />
      <Link href="/leaderboard">
        <Button className={styles.lead}>Leaderboard</Button>
      </Link>
      <SwipeableEdgeDrawer>
        <div className={styles.drawer}>
          <div className={styles.cardcontainer}>
            {subjects.map((sub, index) => {
              return (
                <div
                  onClick={() =>
                    setSelectedOption((prev) => {
                      return { ...prev, subject: sub.id };
                    })
                  }
                  key={index}
                  className={`${
                    selectedOption.subject === sub.id && styles.active
                  } ${styles.card}`}
                >
                  <div className={styles.iconbox}>$</div>
                  <h5 className={styles.cardtext}>{sub.name}</h5>
                </div>
              );
            })}
          </div>
          <Link href="/quiz">
            <Button className={styles.playbtn}>Play</Button>
          </Link>
        </div>
      </SwipeableEdgeDrawer>
      {/* <Container className={styles.middle}>
        <Link href="/select-options">
          <Button className={styles.playbtn}>Play Quiz</Button>
        </Link>
        <Button className={styles.viewldr}>Leaderboard</Button>
      </Container> */}
    </div>
  );
};

export default User;
