import React from 'react';
import styles from './index.module.scss';
import socialLoginGithub from '@/assets/images/social-login-github.svg';

function Github () {
  const handleClick = () => {
    location.replace(`${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/oauth2/authorization/github?redirect_uri=${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/login/oauth2/code/github`);
  };

  return (
    <div className={styles.root}>
      <img className={styles.button} src={socialLoginGithub} onClick={handleClick} />
    </div>
  );
}

export default Github;
