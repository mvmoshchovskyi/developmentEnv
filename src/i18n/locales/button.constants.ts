import { ILocaleConfig } from '@/i18n/locales/locale.constants.ts';
import { PreferredLanguage } from '@/i18n/locales/locale.constants.ts';

export enum ButtonLocaleSchema {
  Exit = 'button.exit',
  Open = 'button.open',
  Submit = 'button.submit',
  Close = 'button.close',
  Remove = 'button.remove',
}

export const BUTTONS_LOCALE: ILocaleConfig<{
  button: { [key: string]: string };
}> = {
  [PreferredLanguage.English]: {
    button: {
      exit: 'Exit',
      open: 'Open',
      submit: 'Submit',
      close: 'Close',
      remove: 'Remove',
    },
  },
  [PreferredLanguage.Ukraine]: {
    button: {
      exit: 'Вихід',
      open: 'Відкрити',
      submit: 'Підтвердити',
      close: 'Закрити',
      remove: 'Видалити',
    },
  },
};
