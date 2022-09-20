import i18next from 'i18next';

export const KEY_LANG = 'lang';

class LangServices {
  changeLanguage(lang = '') {
    localStorage.setItem(KEY_LANG, lang);
    i18next.changeLanguage(lang);
    window.location.reload();
  }

  getCurrentLang() {
    return localStorage.getItem(KEY_LANG) || 'en';
  }
}

export default new LangServices();
