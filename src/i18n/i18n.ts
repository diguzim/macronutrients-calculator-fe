import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { AVAILABLE_LANGUAGES } from "../utils/constants/i18n";

i18n.use(initReactI18next).init({
  resources: {
    [AVAILABLE_LANGUAGES.EN]: {
      translation: require("./en.json"),
    },
    [AVAILABLE_LANGUAGES.PT]: {
      translation: require("./pt.json"),
    },
  },
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

export default i18n;
