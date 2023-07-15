import React, { useState } from "react";
import styles from "./result.module.css";
import Image from "next/image";
import { assets } from "../../assets";
import Button from "../../components/Button/Button";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import Link from "next/link";

const Result = () => {
  return (
    <div className={styles.result}>
      <div className={styles.header}>
        <h2></h2>
        <h3 className={styles.pageheader}>Good Job</h3>
        <Link href="/user">
          <ClearIcon className={styles.cross} />
        </Link>
      </div>

      <div className={styles.trophycard}>
        <Image src={assets.trophy} alt="trophy" />
        <Button className={styles.btn}>Check Correct Answer</Button>
      </div>
      <div className={styles.summary}>
        <h4 className={styles.sumhead}>MATCH SUMMARY</h4>
        <div className={styles.sumstatus}>
          <DoneIcon className={styles.gr} />
          <ClearIcon className={styles.red} />
          <DoneIcon className={styles.gr} />
          <ClearIcon className={styles.red} />
          <DoneIcon className={styles.gr} />
          <ClearIcon className={styles.red} />
          <DoneIcon className={styles.gr} />
          <ClearIcon className={styles.red} />
        </div>
      </div>
      <div className={styles.detailedinfo}>
        <div className={styles.in}>
          <h6 className={styles.head}>CORRECT ANSWER</h6>
          <h4 className={styles.det}>7 Questions</h4>
        </div>
        <div className={styles.in}>
          <h6 className={styles.head}>COMPLETION</h6>
          <h4 className={styles.det}>7 Questions</h4>
        </div>
        <div className={styles.in}>
          <h6 className={styles.head}>SKIPPED</h6>
          <h4 className={styles.det}>7 Questions</h4>
        </div>
        <div className={styles.in}>
          <h6 className={styles.head}>INCORRECT ANSWER</h6>
          <h4 className={styles.det}>7 Questions</h4>
        </div>
      </div>

      <div className={styles.btnrow}>
        <Button className={styles.donebtn}>Done</Button>
      </div>
    </div>
  );
};
export default Result;
