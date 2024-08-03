import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  AVAILABLE_LANGUAGES,
  AvailableLanguage,
  LANGUAGE_NAMES,
  LOCAL_STORAGE_LANGUAGE_KEY,
} from "../../utils/constants/i18n";
import { buildFlagUrl } from "../../utils/images/build-flag-url";
import Button from "../button/button";
import BarButton from "./bar-button";
import MenuPositioner from "./menu-positioner";

type LanguageMenuProps = {
  active: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

const LanguageMenu = (props: LanguageMenuProps) => {
  const { active, openMenu, closeMenu } = props;
  const { i18n } = useTranslation();
  const { language } = i18n;

  const changeLanguage = (language: AvailableLanguage) => {
    i18n.changeLanguage(language);
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
    closeMenu();
  };

  return (
    <div className="mr-4">
      <BarButton
        leftIcon={
          <Image
            src={buildFlagUrl(language as AvailableLanguage)}
            alt={language}
            width={24}
            height={18}
          />
        }
        onClick={openMenu}
        active={active}
      >
        {LANGUAGE_NAMES[language as AvailableLanguage]}
      </BarButton>
      <MenuPositioner visible={active}>
        <div className="flex flex-col gap-1">
          {Object.values(AVAILABLE_LANGUAGES).map((language) => (
            <Button
              key={language}
              variant="text"
              onClick={() => changeLanguage(language)}
              className="flex flex-row gap-2"
              sx={{
                justifyContent: "flex-start",
              }}
              fullWidth
            >
              <Image
                src={buildFlagUrl(language as AvailableLanguage)}
                alt={language}
                width={24}
                height={18}
              />
              {LANGUAGE_NAMES[language as AvailableLanguage]}
            </Button>
          ))}
        </div>
      </MenuPositioner>
    </div>
  );
};

export default LanguageMenu;
