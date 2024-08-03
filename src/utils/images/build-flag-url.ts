import { AvailableLanguage, LANGUAGE_FLAGS } from "../constants/i18n";

export const buildFlagUrl = (language: AvailableLanguage) =>
  `https://flagcdn.com/${LANGUAGE_FLAGS[language]}.svg`;
