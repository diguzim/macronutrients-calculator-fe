import CalculateIcon from "@mui/icons-material/Calculate";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

import theme from "../../theme/theme";
import { ROUTES } from "../../utils/constants/routes";
import Button from "../button/button";
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
        title: "Search Foods",
        link: ROUTES.FOOD_SEARCH,
        icon: SearchIcon,
      },
    ],
  },
  {
    title: "Calculators",
    pages: [
      {
        title: "Recipe Calculator",
        link: ROUTES.RECIPE_NUTRITION_CALCULATOR,
        icon: CalculateIcon,
      },
    ],
  },
  {
    title: "Private Space",
    pages: [
      {
        title: "Favorite Foods",
        link: ROUTES.FAVORITE_FOODS,
        icon: StarIcon,
      },
      {
        title: "Recipes",
        link: ROUTES.RECIPES,
        icon: SoupKitchenIcon,
      },
      {
        title: "Meals Tracker",
        link: ROUTES.MEALS,
        icon: RestaurantIcon,
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
            <p className="text-black text-3xl font-bold mb-4 ml-1">
              {group.title}
            </p>
            {group.pages.map((page) => (
              <Link key={page.title} href={page.link} passHref>
                <Button
                  variant="text"
                  startIcon={<page.icon />}
                  onClick={props.closeBar}
                  size="large"
                  sx={{
                    color: theme.colors.primary.main,
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
