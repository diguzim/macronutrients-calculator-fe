import Link from "next/link";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <h1>Navigation</h1>
        <Link href="/">Home</Link>
        <Link href="/raw-ingredients">Raw Ingredients</Link>
        <Link href="/cooked-dishes">Cooked Dishes</Link>
      </div>
    </div>
  );
}
