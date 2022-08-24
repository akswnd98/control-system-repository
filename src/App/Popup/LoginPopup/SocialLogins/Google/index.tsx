import React from 'react';
import styles from './index.module.scss';
import socialLoginGoogle from '@/assets/images/social-login-google.svg';

function Google () {
  const handleClick = () => {
    location.replace(`${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/oauth2/authorization/google?redirect_uri=${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/login/oauth2/code/google`);
  };

  return (
    <div className={styles.root}>
      <img className={styles.button} src={socialLoginGoogle} onClick={handleClick} />
    </div>
  );
}

export default Google;
