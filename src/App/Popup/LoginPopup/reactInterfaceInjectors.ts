import NotifierSingleton from '@/src/App/Nav/Login/NotifierSingleton';
import Observer from '../../Nav/Login/Observer';

export type Interfaces = {
  getIsShow: () => boolean;
  show: (state: boolean) => void;
};

const registerClickObserver = (interfaces: Interfaces) => {
  NotifierSingleton.getInstance().attachObserver(new Observer({
    getLoginPopupState: interfaces.getIsShow,
    setLoginPopupState: interfaces.show,
  }))
}

export default [
  registerClickObserver,
];
