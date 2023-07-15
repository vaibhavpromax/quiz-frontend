import React from "react";
import styles from "./Loading.module.css";
import { assets } from "../../assets";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";

type LoadingScreenProps = {
  user1: string;
  user2: string;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ user1, user2 }) => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.currentpl}></div>
      <Image className={styles.anim} src={assets.searchmag} alt="searching" />
      <div className={styles.opponentpl}></div>
      <div className={styles.trivia}>
        Did you know the word "SUN" starts with "S"
      </div>

      <Button className={styles.cancel}> Cancel</Button>
    </div>
  );
};

export default LoadingScreen;
