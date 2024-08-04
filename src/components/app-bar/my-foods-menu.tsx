import Link from "next/link";

import AccountCircle from "@mui/icons-material/AccountCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";

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

type MyFoodsMenuProps = {
  closeBar: () => void;
  visible: boolean;
};

export default function MyFoodsMenu(props: MyFoodsMenuProps) {
  const { t } = useTranslation();

  const GroupedPages = useMemo(() => {
    return [
      {
        title: t("appBar.myFoodsMenu.myFoods"),
        pages: [
          {
            title: t("appBar.myFoodsMenu.favoriteFoods"),
            link: ROUTES.FAVORITE_FOODS,
            icon: FavoriteIcon,
          },
          {
            title: t("appBar.myFoodsMenu.recipes"),
            link: ROUTES.RECIPES,
            icon: SoupKitchenIcon,
          },
        ],
      },
      {
        title: t("appBar.myFoodsMenu.foodLog"),
        pages: [
          {
            title: t("appBar.myFoodsMenu.dailyFoodLog"),
            link: ROUTES.MEALS,
            icon: CalendarTodayIcon,
          },
        ],
      },
      {
        title: t("appBar.myFoodsMenu.account"),
        pages: [
          {
            title: t("appBar.myFoodsMenu.profile"),
            link: ROUTES.PROFILE,
            icon: AccountCircle,
          },
          {
            title: t("appBar.myFoodsMenu.logout"),
            link: ROUTES.LOGOUT,
            icon: LogoutIcon,
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
