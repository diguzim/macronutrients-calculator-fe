import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  AVAILABLE_LANGUAGES,
  AvailableLanguage,
  LANGUAGE_FLAGS,
  LANGUAGE_NAMES,
  LOCAL_STORAGE_LANGUAGE_KEY,
} from "../../utils/constants/i18n";
import Button from "../button/button";
import MenuPositioner from "./menu-positioner";

type LanguageMenuProps = {
  closeBar: () => void;
  visible: boolean;
};

const LanguageMenu = (props: LanguageMenuProps) => {
  const { closeBar, visible } = props;
  const { i18n } = useTranslation();

  const buildFlagUrl = (language: AvailableLanguage) =>
    `https://flagcdn.com/${LANGUAGE_FLAGS[language]}.svg`;

  const changeLanguage = (language: AvailableLanguage) => {
    i18n.changeLanguage(language);
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language);
    closeBar();
  };
  //   <div className="relative">
  //     <BarButton
  //       onClick={toggleOptions}
  //       active={showOptions}
  //       leftIcon={
  //         <Image
  //           src={buildFlagUrl(i18n.language as AvailableLanguage)}
  //           alt={i18n.language}
  //           width={24}
  //           height={18}
  //         />
  //       }
  //     >
  //       {LANGUAGE_NAMES[i18n.language as AvailableLanguage]}
  //     </BarButton>
  //     {showOptions && (
  //       <div className="absolute">
  //         {Object.values(AVAILABLE_LANGUAGES).map((language) => (
  //           <Button
  //             key={language}
  //             variant="text"
  //             onClick={() => changeLanguage(language)}
  //           >
  //             <Image
  //               src={buildFlagUrl(language as AvailableLanguage)}
  //               alt={language}
  //               width={24}
  //               height={18}
  //             />
  //             {LANGUAGE_NAMES[language as AvailableLanguage]}
  //           </Button>
  //         ))}
  //       </div>
  //     )}
  //   </div>
  // );
  return (
    <MenuPositioner visible={props.visible}>
      <div className="flex flex-col gap-4">
        {Object.values(AVAILABLE_LANGUAGES).map((language) => (
          <Button
            key={language}
            variant="text"
            onClick={() => changeLanguage(language)}
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
  );
};

export default LanguageMenu;
