"use client";

import { usePathname } from "next/navigation";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SoupKitchenOutlinedIcon from "@mui/icons-material/SoupKitchenOutlined";

import NavigationLink from "./navigation-link";
import styles from "./navigation-links.module.css";

type Link = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const links: Link[] = [
  {
    name: "Home",
    href: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    name: "Raw Ingredients",
    href: "/raw-ingredients",
    icon: <ShoppingCartOutlinedIcon />,
  },
  {
    name: "Cooked Dishes",
    href: "/cooked-dishes",
    icon: <SoupKitchenOutlinedIcon />,
  },
];

export default function NavigationLinks() {
  const pathname = usePathname();

  return (
    <nav className={styles.container}>
      {links.map(({ name, href, icon }) => (
        <NavigationLink key={href} href={href} active={pathname === href}>
          {icon}
          {name}
        </NavigationLink>
      ))}
    </nav>
  );
}
