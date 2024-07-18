"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import LocalDiningIcon from "@mui/icons-material/LocalDining";
import SoupKitchenOutlinedIcon from "@mui/icons-material/SoupKitchenOutlined";

import useAuth from "../../contexts/auth/use-auth";
import NavigationLink from "./navigation-link";

type Link = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const generalLinks: Link[] = [
  {
    name: "Food Search",
    href: "/foods",
    icon: <SoupKitchenOutlinedIcon />,
  },
];

const authenticatedLinks: Link[] = [
  {
    name: "Meals",
    href: "/meals",
    icon: <LocalDiningIcon />,
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
