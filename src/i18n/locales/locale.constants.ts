export enum UrlLocale {
  Ukraine = 'ua',
  English = 'en',
}

export enum PreferredLanguage {
  English = 'English',
  Ukraine = 'Ukraine'
}

export interface ILocaleConfig<T> {
  [PreferredLanguage.English]: T;
  [PreferredLanguage.Ukraine]: T;
}

export interface IMessagesSchema {
  post: { [key: string]: string };
  button: { [key: string]: string };
  common: { [key: string]: string };
}
