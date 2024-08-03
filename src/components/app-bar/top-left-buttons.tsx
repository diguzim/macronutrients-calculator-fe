"use client";

import { useTranslation } from "react-i18next";
import BarButton from "./bar-button";

type TopLeftButtonsProps = {
  displayedBar: string;
  handleBarItemClick: (item: string) => void;
};

export default function TopLeftButtons(props: TopLeftButtonsProps) {
  const { t } = useTranslation();

  return (
    <>
      <BarButton
        onClick={() => props.handleBarItemClick("tools")}
        active={props.displayedBar === "tools"}
      >
        {t("general.tools")}
      </BarButton>
      <BarButton
        onClick={() => props.handleBarItemClick("about")}
        active={props.displayedBar === "about"}
      >
        {t("general.about")}
      </BarButton>
    </>
  );
}
