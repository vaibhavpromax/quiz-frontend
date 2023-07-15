import React, { CSSProperties } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, style }) => {
    
    const ButtonStyles = {
    ...style,
}


  return (
    <button className={`${styles.button} ${className}`} style={ButtonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
