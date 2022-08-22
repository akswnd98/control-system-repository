import React from 'react';
import styles from './index.module.scss';
import Search from './Search';
import Login from './Login';
import Community from './Community';
import Logo from './Logo';

function Nav () {
  return (
    <div className={styles.root}>
      <div className={styles.saturation}>
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.community}>
              <Community />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.search}>
              <Search />
            </div>
            <div className={styles.login}>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
