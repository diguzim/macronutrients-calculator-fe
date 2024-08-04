import CalculateIcon from "@mui/icons-material/Calculate";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
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

type ToolsMenuProps = {
  closeBar: () => void;
  visible: boolean;
};

export default function ToolsMenu(props: ToolsMenuProps) {
  const { t } = useTranslation();

  const GroupedPages = useMemo(() => {
    return [
      {
        title: t("appBar.toolsMenu.nutritionalData"),
        pages: [
          {
            title: t("appBar.toolsMenu.searchFoods"),
            link: ROUTES.FOOD_SEARCH,
            icon: SearchIcon,
          },
        ],
      },
      {
        title: t("appBar.toolsMenu.calculators"),
        pages: [
          {
            title: t("appBar.toolsMenu.recipeCalculator"),
            link: ROUTES.RECIPE_NUTRITION_CALCULATOR,
            icon: CalculateIcon,
          },
        ],
      },
      {
        title: t("appBar.toolsMenu.privateSpace"),
        pages: [
          {
            title: t("appBar.toolsMenu.favoriteFoods"),
            link: ROUTES.FAVORITE_FOODS,
            icon: StarIcon,
          },
          {
            title: t("appBar.toolsMenu.recipes"),
            link: ROUTES.RECIPES,
            icon: SoupKitchenIcon,
          },
          {
            title: t("appBar.toolsMenu.mealsTracker"),
            link: ROUTES.MEALS,
            icon: RestaurantIcon,
          },
        ],
      },
    ];
  }, [t]);

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
