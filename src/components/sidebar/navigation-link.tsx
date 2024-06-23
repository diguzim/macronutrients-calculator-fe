import Link from "next/link";
import styles from "./navigation-link.module.css";

export default function NavigationLink({
  href,
  active,
  children,
}: Readonly<{
  href: string;
  active: boolean;
  children: React.ReactNode;
}>) {
  return (
    <Link
      href={href}
      className={`${styles.link} ${active ? styles.active : ""}`}
    >
      {children}
    </Link>
  );
}
