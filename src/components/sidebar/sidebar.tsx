import NavigationLink from "./navigation-link";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1>MaCal</h1>
        <p>Macronutrients Calculator</p>
      </div>
      <nav className={styles.navigation}>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/raw-ingredients">Raw Ingredients</NavigationLink>
        <NavigationLink href="/cooked-dishes">Cooked Dishes</NavigationLink>
      </nav>
    </div>
  );
}
