"use client";

import { SxProps } from "@mui/system";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import CalculateIcon from "@mui/icons-material/Calculate";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SearchIcon from "@mui/icons-material/Search";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";

import theme from "../../theme/theme";
import { withSx } from "../../utils/hocs/with-sx.hoc";
import NavigationLink from "./navigation-link";

type Link = {
  name: string;
  href: string;
  icon: any; // ToDo: Fix any
};

const sx: SxProps = { color: theme.colors.primary.contrast };

const generalLinks: Link[] = [
  {
    name: "Food Search",
    href: "/search-foods",
    icon: withSx(SearchIcon, sx),
  },
  {
    name: "Recipe Nutrition Calculator",
    href: "/recipe-nutrition-calculator",
    icon: withSx(CalculateIcon, sx),
  },
  {
    name: "Meals Tracker",
    href: "/meals",
    icon: withSx(RestaurantIcon, sx),
  },
  {
    name: "Recipes",
    href: "/recipes",
    icon: withSx(SoupKitchenIcon, sx),
  },
];

export default function NavigationLinks() {
  const pathname = usePathname();

  const links = useMemo(() => {
    return generalLinks;
  }, []);

  return (
    <nav className="flex flex-col">
      {links.map(({ name, href, icon }) => (
        <NavigationLink key={href} href={href} active={pathname === href}>
          {icon}
          {name}
        </NavigationLink>
      ))}
    </nav>
  );
}
