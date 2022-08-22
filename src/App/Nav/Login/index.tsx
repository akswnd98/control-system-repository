import axios from 'axios';
import React from 'react';
import styles from './index.module.scss';
import dotenv from 'dotenv';

function Login () {
  const handleClick = async () => {
    console.log('hello');
  };

  return (
    <div className={styles.root} onClick={() => { location.replace(`${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}/oauth2/authorization/google?redirect_uri=${process.env.API_SERVER_HOST}:${process.env.API_SERVER_PORT}`); }}>
      로그인
    </div>
  );
}

export default Login;
