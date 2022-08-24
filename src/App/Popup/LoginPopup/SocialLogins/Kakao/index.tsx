import React from 'react';
import styles from './index.module.scss';
import socialLoginKakao from '@/assets/images/social-login-kakao.svg';

function Github () {
  const handleClick = () => {
    location.replace(`${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/oauth2/authorization/kakao?redirect_uri=${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/login/oauth2/code/kakao`);
  };

  return (
    <div className={styles.root}>
      <img className={styles.button} src={socialLoginKakao} onClick={handleClick} />
    </div>
  );
}

export default Github;
