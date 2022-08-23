import Notifier from '@/src/data-bindings/Notifier';

export default class NotifierSingleton {
  private static instance: Notifier;

  public static getInstance () {
    return this.instance || (this.instance = new Notifier({}));
  }
}
