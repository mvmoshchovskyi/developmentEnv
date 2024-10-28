import { ILocaleConfig } from '@/i18n/locales/locale.constants';
import { PreferredLanguage } from '@/i18n/locales/locale.constants.ts';

export enum CommonMessagesLocaleSchema {
  Welcome = 'common.welcome',
  Info = 'common.info',
  Name = 'common.name',
  Description = 'common.description',
}

export const COMMON_MESSAGES_LOCALE: ILocaleConfig<{ common: { [key: string]: string } }> = {
  [PreferredLanguage.English]: {
    common: {
      welcome: 'Welcome',
      info:'info',
      name: 'Name',
      description: 'Description',
    },
  },
  [PreferredLanguage.Ukraine]: {
    common: {
      welcome: 'Привіт',
      info:'інформація',
      name: 'Назва',
      description: 'Опис',
    },
  },
};
