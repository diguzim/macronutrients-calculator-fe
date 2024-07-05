import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// I have 2 files: en.json and pt.json

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("./en.json"),
    },
    pt: {
      translation: require("./pt.json"),
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
