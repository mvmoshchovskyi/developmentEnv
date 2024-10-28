import { LocaleMessages } from 'vue-i18n';
import { IMessagesSchema, PreferredLanguage } from '@/i18n/locales/locale.constants.ts';
import { POST_MESSAGES_LOCALE } from '@/i18n/locales/post.constants.ts';
import { BUTTONS_LOCALE } from '@/i18n/locales/button.constants.ts';
import { COMMON_MESSAGES_LOCALE } from '@/i18n/locales/common.constants.ts';

export const MESSAGES_LOCALE: LocaleMessages<IMessagesSchema, PreferredLanguage> = {
  [PreferredLanguage.English]: {
    ...BUTTONS_LOCALE[PreferredLanguage.English],
    ...COMMON_MESSAGES_LOCALE[PreferredLanguage.English],
    ...POST_MESSAGES_LOCALE[PreferredLanguage.English],
  },
  [PreferredLanguage.Ukraine]: {
    ...BUTTONS_LOCALE[PreferredLanguage.Ukraine],
    ...COMMON_MESSAGES_LOCALE[PreferredLanguage.Ukraine],
    ...POST_MESSAGES_LOCALE[PreferredLanguage.Ukraine],
  },
};
