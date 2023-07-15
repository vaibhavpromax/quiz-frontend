import React, { useState } from "react";
import styles from "./leaderboard.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import SwipeableEdgeDrawer from "../../components/SwipeableedgeDrawer/Swipeableedgedrawer";
import Container from "../../components/Container/Container";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { assets } from "../../assets";
import Image from "next/image";

const ranks = [
  {
    rank: 1,
    name: "Spiderman",
    badge: "golden",
    points: 2389,
  },
  {
    rank: 2,
    name: "Spiderman",
    badge: "golden",
    points: 2389,
  },
  {
    rank: 3,
    name: "Spiderman",
    badge: "golden",
    points: 2389,
  },
  {
    rank: 4,
    name: "Spiderman",
    badge: "golden",
    points: 2389,
  },
  {
    rank: 5,
    name: "Spiderman",
    badge: "golden",
    points: 2389,
  },
  {
    rank: 6,
    name: "Spiderman",
    badge: "golden",
    points: 2389,
  },
  {
    rank: 7,
    name: "Spiderman",
    badge: "golden",
    points: 2389,
  },
  {
    rank: 8,
    name: "Spiderman",
    badge: "golden",
    points: 2389,
  },
  {
    rank: 9,
    name: "Spiderman",
    badge: "golden",
    points: 2389,
  },
  {
    rank: 10,
    name: "Spiderman",
    badge: "golden",
    points: 2389,
  },
  {
    rank: 11,
    name: "Spiderman",
    badge: "golden",
    points: 2389,
  },
];
const Leaderboard: React.FunctionComponent = () => {
  return (
    <div className={styles.leaderboard}>
      <div className={styles.header}>
        <Link href="/user">
          <ArrowBackIcon />
        </Link>
        <div className={styles.pageheading}>Leaderboard</div>
        <h3></h3>
      </div>

      <div className={styles.navbar}></div>
      <div className={styles.ranks}>
        <Image src={assets.stage} alt="stage" height={250} width={150} />
      </div>
      <SwipeableEdgeDrawer>
        <div className={styles.ranklist}>
          {ranks.map((rank, index) => {
            return (
              <Container className={styles.rankcontainer} key={index}>
                <div className={styles.rank}>{rank.rank}</div>
                <div className={styles.pic}>
                  <AccountCircleIcon className={styles.accicon} />
                </div>
                <div className={styles.detail}>
                  <div className={styles.name}>{rank.name}</div>
                  <div className={styles.points}>{rank.points}</div>
                </div>
                <div className={styles.badge}>
                  <LocalPoliceIcon className={styles.bad} />
                </div>
              </Container>
            );
          })}
        </div>
      </SwipeableEdgeDrawer>
    </div>
  );
};
export default Leaderboard;
