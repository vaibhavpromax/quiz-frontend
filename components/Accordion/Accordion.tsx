import React, { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        {title}
      </div>
      <div
        className={`${styles['accordionContent']} ${isOpen ? styles['accordionContentOpen'] : ''}`}
      >

         {children}
      </div>
    </div>
  );
};

export default Accordion;
