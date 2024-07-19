"use client";

import { SxProps } from "@mui/system";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import LocalDiningIcon from "@mui/icons-material/LocalDining";
import SoupKitchenOutlinedIcon from "@mui/icons-material/SoupKitchenOutlined";

import useAuth from "../../contexts/auth/use-auth";
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
    href: "/foods",
    icon: withSx(SoupKitchenOutlinedIcon, sx),
  },
];

const authenticatedLinks: Link[] = [
  {
    name: "Meals",
    href: "/meals",
    icon: withSx(LocalDiningIcon, sx),
  },
];

export default function NavigationLinks() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  const links = useMemo(() => {
    return [...generalLinks, ...(isAuthenticated ? authenticatedLinks : [])];
  }, [isAuthenticated]);

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
