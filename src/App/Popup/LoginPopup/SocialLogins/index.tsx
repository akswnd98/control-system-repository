import React from 'react';
import styles from './index.module.scss';
import loginList from './loginList';

function SocialLogins () {
  return (
    <div className={styles.root}>
      <div className={styles.socialLoginTitleWrapper}>
        <div className={styles.socialLoginTitle}>소셜 로그인</div>
      </div>
      <div className={styles.socialLoginButtons}>
        {
          loginList.map((v, i) => (
            <div className={styles.item} key={i}>
              {v()}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default SocialLogins;
