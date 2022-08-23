import INotifier from '@/src/data-bindings/INotifier';
import IObserver from '@/src/data-bindings/IObserver';
import React from 'react';

export type ConstructorParam = {
  getLoginPopupState: () => boolean;
  setLoginPopupState: (state: boolean) => void;
};

export default class Observer implements IObserver {
  getLoginPopupState: () => boolean;
  setLoginPopupState: (state: boolean) => void;

  constructor (payload: ConstructorParam) {
    this.getLoginPopupState = payload.getLoginPopupState;
    this.setLoginPopupState = payload.setLoginPopupState;
  }

  async update (subject: INotifier) {
    const state = this.getLoginPopupState();
    this.setLoginPopupState(!state);
  }
}
