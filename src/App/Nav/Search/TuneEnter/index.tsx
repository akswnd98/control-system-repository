import React from 'react';
import styles from './index.module.scss';
import tuneSvg from '@/assets/images/tune.svg';

function TuneEnter () {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src={tuneSvg} />
      <div className={styles.typo}>필터</div>
      <div className={styles.filterNum}>0개</div>
    </div>
  );
}

export default TuneEnter;
