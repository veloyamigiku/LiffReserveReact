import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation_ja from './ja.json';

const resources = {
  ja: {
    translation: translation_ja
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ja',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
