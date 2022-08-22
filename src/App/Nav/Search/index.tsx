import React from 'react';
import styles from './index.module.scss';
import Input from './Input';
import TuneEnter from './TuneEnter';

function Search () {
  return (
    <div className={styles.root}>
      <div className={styles.tuneEnter}>
        <TuneEnter />
      </div>
      <div className={styles.input}>
        <Input />
      </div>
    </div>
  );
}

export default Search;
