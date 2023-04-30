import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import hi from './hi.json';
import HttpApi from 'i18next-http-backend';

i18n.use(initReactI18next)
    .use(HttpApi)
    .init({
        lng: 'hi',
        fallbackLng: 'en',
        resources: {
            en: en,
            hi: hi,
        }
    });

export default i18n;