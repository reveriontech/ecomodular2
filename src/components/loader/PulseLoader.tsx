import React from 'react';
import styles from './_pulseleader.module.scss';

interface PulseLoaderProps {
  color?: string;
  size?: number;
}

const PulseLoader: React.FC<PulseLoaderProps> = ({ color, size = 12 }) => {
  const pulseStyle: React.CSSProperties = {
    ...(color && { '--pulse-color': color } as React.CSSProperties),
    '--pulse-size': `${size}px`,
  } as React.CSSProperties;

  return (
    <div className={styles.pulseLoader} style={pulseStyle}>
      <div className={styles.pulseDot}></div>
      <div className={styles.pulseDot}></div>
      <div className={styles.pulseDot}></div>
    </div>
  );
};

export default PulseLoader;

