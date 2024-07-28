import Header from "../header/header";
import Link from "../link/link";
import MenuPositioner from "./menu-positioner";

type AboutMenuProps = {
  closeBar: () => void;
  visible: boolean;
};

export default function AboutMenu(props: AboutMenuProps) {
  return (
    <MenuPositioner visible={props.visible}>
      <div className="flex flex-col items-center max-w-96 mx-auto gap-4">
        <Header size={2}>Objective</Header>
        <p>
          MaCal is a web application that helps users track their daily
          nutritional intake. It provides tools to calculate the nutritional
          value of recipes and track meals.
        </p>
        <p>
          Developed by&nbsp;
          <Link href="https://www.linkedin.com/in/rodrigo-marcondes-7b038b136/">
            Rodrigo Marcondes
          </Link>
        </p>
      </div>
    </MenuPositioner>
  );
}
