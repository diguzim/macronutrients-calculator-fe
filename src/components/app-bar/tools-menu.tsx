import CalculateIcon from "@mui/icons-material/Calculate";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import Link from "next/link";

import { ROUTES } from "../../utils/constants/routes";
import Button from "../button/button";
import Header from "../header/header";
import MenuPositioner from "./menu-positioner";

type Page = {
  title: string;
  link: string;
  icon: React.ElementType;
};

type GroupedPage = {
  title: string;
  pages: Page[];
};

const GroupedPages: GroupedPage[] = [
  {
    title: "Nutritional Data",
    pages: [
      {
        title: "Search foods",
        link: ROUTES.SEARCH_FOODS,
        icon: SearchIcon,
      },
    ],
  },
  {
    title: "Calculators",
    pages: [
      {
        title: "Recipe calculator",
        link: ROUTES.RECIPE_NUTRITION_CALCULATOR,
        icon: CalculateIcon,
      },
    ],
  },
  {
    title: "Private Space",
    pages: [
      {
        title: "Meals tracker",
        link: ROUTES.MEALS,
        icon: RestaurantIcon,
      },
      {
        title: "Recipes",
        link: ROUTES.RECIPES,
        icon: SoupKitchenIcon,
      },
    ],
  },
];

type ToolsMenuProps = {
  closeBar: () => void;
  visible: boolean;
};

export default function ToolsMenu(props: ToolsMenuProps) {
  return (
    <MenuPositioner visible={props.visible}>
      <div className="flex flex-row justify-center gap-12">
        {GroupedPages.map((group) => (
          <div key={group.title} className="flex flex-col">
            <Header size={2} className="mb-4">
              {group.title}
            </Header>
            {group.pages.map((page) => (
              <Link key={page.title} href={page.link} passHref>
                <Button
                  variant="text"
                  startIcon={<page.icon />}
                  onClick={props.closeBar}
                  size="large"
                  sx={{
                    color: "inherit",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </MenuPositioner>
  );
}
