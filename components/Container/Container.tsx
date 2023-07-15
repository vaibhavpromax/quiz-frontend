import React, { CSSProperties } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, className, style }) => {
  const containerStyles = {
    ...style,
  };

  return (
    <div className={`${styles.container} ${className}`} style={containerStyles}>
      {children}
    </div>
  );
};

export default Container;
