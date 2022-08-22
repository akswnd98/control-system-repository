import React from 'react';
import styles from './index.module.scss';
import LoginPopup from './LoginPopup';
import popupList from './popupList';

function Popup () {
  return (
    <div className={styles.root}>
      {
        popupList.map((popup, key) => (
          <div key={key}>
            {popup()}
          </div>
        ))
      }
    </div>
  );
}

export default Popup;
