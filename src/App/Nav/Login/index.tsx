import React from 'react';
import styles from './index.module.scss';
import createOnClickHandler from './createOnClickHandler';

function Login () {
  return (
    // <div className={styles.root} onClick={() => { location.replace(`${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/oauth2/authorization/google?redirect_uri=${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}`); }}>
    <div className={styles.root} onClick={createOnClickHandler()}>
      로그인
    </div>
  );
}

export default Login;
