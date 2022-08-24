import React from 'react';
import styles from './index.module.scss';
import rightArrow from '@/assets/images/right-arrow.svg';

function EmailLogin () {
  return (
    <div className={styles.root}>
      <input className={styles.search}></input>
      <div className={styles.enterWrapper}>
        <img className={styles.enter} src={rightArrow} />
      </div>
    </div>
  );
}

export default EmailLogin;
