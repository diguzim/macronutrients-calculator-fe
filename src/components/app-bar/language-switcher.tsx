// src/components/LanguageSwitcher.tsx
import { useTranslation } from "react-i18next";
import { LOCAL_STORAGE_LANGUAGE_KEY } from "../../utils/constants/i18n";
import Button from "../button/button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
  };

  return (
    <div>
      <Button onClick={() => changeLanguage("en")}>English</Button>
      <Button onClick={() => changeLanguage("pt")}>Português</Button>
    </div>
  );
};

export default LanguageSwitcher;
