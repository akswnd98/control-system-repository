import React from 'react';
import styles from './index.module.scss';
import createOnClickHandler from './createOnClickHandler';

function Login () {
  return (
    <div className={styles.root} onClick={createOnClickHandler()}>
      로그인
    </div>
  );
}

export default Login;
