import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import styles from './index.module.scss';
import Popup from './Popup';

function App () {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.nav}>
          <Nav />
        </div>
      </div>
      <div className={styles.popup}>
        <Popup />
      </div>
    </div>
  );
}

export default App;
