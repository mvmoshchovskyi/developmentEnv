import { ILocaleConfig } from '@/i18n/locales/locale.constants';
import { PreferredLanguage } from '@/i18n/locales/locale.constants.ts';

export enum PostMessagesLocaleSchema {
  PostName = 'post.name',
  PostDescription = 'post.description',
}

export const POST_MESSAGES_LOCALE: ILocaleConfig<{ post: { [key: string]: string } }> = {
  [PreferredLanguage.English]: {
    post: {
      post: 'Post',
      createPost: 'Create Post',
    },
  },
  [PreferredLanguage.Ukraine]: {
    post: {
      name: 'Назва',
      description: 'Опис',
    },
  },
};
