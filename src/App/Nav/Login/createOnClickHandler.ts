import NotifierSingleton from './NotifierSingleton';

const createOnClickHandler = () => (
  async () => {
    await NotifierSingleton.getInstance().notify(undefined);
  }
);

export default createOnClickHandler;
