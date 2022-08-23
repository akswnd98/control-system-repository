import injectReactInterfaces from '@/src/react-interface-injection';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import reactInterfaceInjectors, { Interfaces } from './reactInterfaceInjectors';
import socialLoginGoogle from '@/assets/images/social-login-google.svg';
import socialLoginNaver from '@/assets/images/social-login-naver.svg';
import rightArrow from '@/assets/images/right-arrow.svg';

function LoginPopup () {
  const [isShow, setIsShow] = useState(false);
  const [isEverShowed, setIsEverShowed] = useState(false);

  const interfaces: Interfaces = {
    getIsShow: () => isShow,
    show: (state: boolean) => { setIsShow(state); setIsEverShowed(true); },
  };
  injectReactInterfaces(interfaces, reactInterfaceInjectors);

  return (
    <div className={[styles.root, isEverShowed ? (isShow ? styles.show : styles.hide) : ''].join(' ')}>
      <div className={styles.marginSpace}>
        <div className={styles.title}>로그인</div>
        <div className={styles.searchWrapper}>
          <input className={styles.search}></input>
          <div className={styles.enterWrapper}>
            <img className={styles.enter} src={rightArrow} />
          </div>
        </div>
        <div className={styles.socialLoginTitleWrapper}>
          <div className={styles.socialLoginTitle}>소셜 로그인</div>
        </div>
        <div className={styles.socialLoginButtons}>
          <img className={[styles.socialLoginButton, styles.googleLoginButton].join(' ')} src={socialLoginGoogle} />
          <img className={styles.socialLoginButton} src={socialLoginNaver} />
        </div>
        <div className={styles.signUpWrapper}>
          <div className={styles.signUp}>회원가입</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
