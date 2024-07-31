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
        <p className="text-black text-3xl font-bold mb-4 ml-1">Objective</p>
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
