import { useTranslation } from "react-i18next";
import Link from "../link/link";
import MenuPositioner from "./menu-positioner";

type AboutMenuProps = {
  closeBar: () => void;
  visible: boolean;
};

export default function AboutMenu(props: AboutMenuProps) {
  const { t } = useTranslation();

  return (
    <MenuPositioner visible={props.visible}>
      <div className="flex flex-col items-center max-w-96 mx-auto gap-4">
        <p className="text-black text-3xl font-bold mb-4 ml-1">
          {t("appBar.aboutMenu.objective")}
        </p>
        <p>{t("appBar.aboutMenu.objectiveParagraph")}</p>
        <p>
          {t("appBar.aboutMenu.developedBy")}{" "}
          <Link href="https://www.linkedin.com/in/rodrigo-marcondes-7b038b136/">
            Rodrigo Marcondes
          </Link>
        </p>
      </div>
    </MenuPositioner>
  );
}
