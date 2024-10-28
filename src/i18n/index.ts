import { createI18n } from 'vue-i18n';
import { PreferredLanguage } from '@/i18n/locales/locale.constants';
import { MESSAGES_LOCALE } from '@/i18n/locales';

type MessageSchema = typeof MESSAGES_LOCALE[PreferredLanguage.English];

// Initialize i18n instance with languages and settings
const i18n = createI18n<[MessageSchema], PreferredLanguage>({
  legacy: false, // Use Composition API
  locale: PreferredLanguage.English, // Default language
  fallbackLocale: PreferredLanguage.English, // Fallback language if translation is missing
  messages: MESSAGES_LOCALE,
});

export default i18n;
