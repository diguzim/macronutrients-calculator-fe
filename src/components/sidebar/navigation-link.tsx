import Link from "next/link";
import styles from "./navigation-link.module.css";

export default function NavigationLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <Link className={styles.container} href={href}>
      {children}
    </Link>
  );
}
