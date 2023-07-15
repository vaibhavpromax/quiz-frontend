import { useState } from "react";
import Container from "../../components/Container/Container";
import styles from "./category.module.css";
import Button from "../../components/Button/Button";
import Accordion from "../../components/Accordion/Accordion";
import Link from "next/link";

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
];

const classes: {
  id: number;
  name: number;
}[] = [
  { id: 1, name: 1 },
  { id: 2, name: 2 },
  { id: 3, name: 3 },
  { id: 4, name: 4 },
  { id: 5, name: 5 },
  { id: 6, name: 6 },
  { id: 7, name: 7 },
  { id: 8, name: 8 },
  { id: 9, name: 9 },
  { id: 10, name: 10 },
  { id: 11, name: 11 },
  { id: 12, name: 12 },
];

const SelectOptions = () => {
  const [selectedOption, setSelectedOption] = useState<{
    subject: number;
    class: number;
  }>({
    subject: subjects[0].id,
    class: classes[0].id,
  });

  return (
    <div className={styles.chooseOptions}>
      <div className={styles.header}>
        <Link href="/user">
          <div className={styles.back}>←</div>
        </Link>
        Choose Category
      </div>
      <Container className={styles.cont}>
        <Accordion title="Select Subject">
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
                  <div className={styles.iconbox}></div>
                  <h5 className={styles.cardtext}>{sub.name}</h5>
                </div>
              );
            })}
          </div>
        </Accordion>
        <Accordion title="Select Class">
          <div className={styles.cardcontainer}>
            {classes.map((cl, index) => {
              return (
                <div
                  onClick={() =>
                    setSelectedOption((prev) => {
                      return { ...prev, class: cl.id };
                    })
                  }
                  key={index}
                  className={`${
                    selectedOption.class === cl.id && styles.active
                  } ${styles.card}`}
                >
                  <div className={styles.iconbox}></div>
                  <h5 className={styles.cardtext}>{cl.name}</h5>
                </div>
              );
            })}
          </div>
        </Accordion>
        <Link href="/quiz">
          <Button className={styles.nextbtn}>Next</Button>
        </Link>
      </Container>
    </div>
  );
};

export default SelectOptions;
