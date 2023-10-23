import i18next from 'i18next';
import backend from 'i18next-http-backend';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
  .use(backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
