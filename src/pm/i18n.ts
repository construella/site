import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from '../utils/cookie';
import en from './locales/en.json';
import es from './locales/es.json';
import pl from './locales/pl.json';
import ru from './locales/ru.json';

const resources = {
 en: { translation: en },
 es: { translation: es },
 pl: { translation: pl },
 ru: { translation: ru }
};

const getUiSettings = () => {
  const cookie = Cookies.get('ui_settings');
  if (cookie) {
    try {
      return JSON.parse(cookie);
    } catch (e) {
      return {};
    }
  }
  return {};
};

const getBrowserLanguage = () => {
  if (typeof navigator === 'undefined') return 'en';
  const lang = navigator.language.split('-')[0];
  return ['en', 'es', 'pl', 'ru'].includes(lang) ? lang : 'en';
};

const lng = getUiSettings().lang || getBrowserLanguage();

i18n
 .use(initReactI18next)
 .init({
 resources,
 lng,
 fallbackLng: 'en',
 interpolation: { escapeValue: false }
 });

export default i18n;
