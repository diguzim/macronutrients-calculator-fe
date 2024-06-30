"use client";

import { usePathname } from "next/navigation";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
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
    name: "Items",
    href: "/items",
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
