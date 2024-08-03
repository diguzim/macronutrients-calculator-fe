export const LOCAL_STORAGE_LANGUAGE_KEY = "i18nextLng";

export const AVAILABLE_LANGUAGES = {
  EN: "en",
  PT: "pt",
} as const;

export type AvailableLanguage =
  (typeof AVAILABLE_LANGUAGES)[keyof typeof AVAILABLE_LANGUAGES];

export const LANGUAGE_NAMES: Record<AvailableLanguage, string> = {
  [AVAILABLE_LANGUAGES.EN]: "English",
  [AVAILABLE_LANGUAGES.PT]: "Português",
};

export const LANGUAGE_FLAGS: Record<AvailableLanguage, string> = {
  [AVAILABLE_LANGUAGES.EN]: "us",
  [AVAILABLE_LANGUAGES.PT]: "br",
};
