"use client";

import { useTranslation } from "react-i18next";

import Image from "next/image";
import { AvailableLanguage, LANGUAGE_NAMES } from "../../utils/constants/i18n";
import { buildFlagUrl } from "../../utils/images/build-flag-url";
import BarButton from "./bar-button";

type LanguageButtonProps = {
  active: boolean;
  onCLick: () => void;
};

export default function LanguageButton(props: LanguageButtonProps) {
  const { i18n } = useTranslation();
  const { language } = i18n;

  return (
    <BarButton
      leftIcon={
        <Image
          src={buildFlagUrl(language as AvailableLanguage)}
          alt={language}
          width={24}
          height={18}
        />
      }
      onClick={props.onCLick}
      active={props.active}
    >
      {LANGUAGE_NAMES[language as AvailableLanguage]}
    </BarButton>
  );
}
