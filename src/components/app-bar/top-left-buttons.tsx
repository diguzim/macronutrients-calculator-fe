"use client";

import BarButton from "./bar-button";

type TopLeftButtonsProps = {
  displayedBar: string;
  handleBarItemClick: (item: string) => void;
};

export default function TopLeftButtons(props: TopLeftButtonsProps) {
  return (
    <>
      <BarButton
        onClick={() => props.handleBarItemClick("tools")}
        active={props.displayedBar === "tools"}
      >
        Tools
      </BarButton>
      <BarButton
        onClick={() => props.handleBarItemClick("about")}
        active={props.displayedBar === "about"}
      >
        About
      </BarButton>
    </>
  );
}
