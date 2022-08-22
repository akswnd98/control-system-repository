import React from 'react';
import styles from './index.module.scss';
import searchSvg from '@/assets/images/search.svg';

function Input () {
  return (
    <div className={styles.root}>
      <input className={styles.input} />
      <img className={styles.icon} src={searchSvg} />
    </div>
  );
}

export default Input;
