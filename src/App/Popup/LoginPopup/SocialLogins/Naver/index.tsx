import React from 'react';
import styles from './index.module.scss';
import socialLoginNaver from '@/assets/images/social-login-naver.svg';

function Naver () {
  const handleClick = () => {
    location.replace(`${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/oauth2/authorization/naver?redirect_uri=${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/login/oauth2/code/naver`);
  };

  return (
    <div className={styles.root}>
      <img className={styles.button} src={socialLoginNaver} onClick={handleClick} />
    </div>
  );
}

export default Naver;
