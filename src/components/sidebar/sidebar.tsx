import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SoupKitchenOutlinedIcon from "@mui/icons-material/SoupKitchenOutlined";

import NavigationLink from "./navigation-link";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logoTitle}>
          <PercentOutlinedIcon />
          <h1>MaCal</h1>
          <PercentOutlinedIcon />
        </div>
        <p>Macronutrients Calculator</p>
      </div>
      <nav className={styles.navigation}>
        <NavigationLink href="/">
          <HomeOutlinedIcon />
          Home
        </NavigationLink>
        <NavigationLink href="/raw-ingredients">
          <ShoppingCartOutlinedIcon />
          Raw Ingredients
        </NavigationLink>
        <NavigationLink href="/cooked-dishes">
          <SoupKitchenOutlinedIcon />
          Cooked Dishes
        </NavigationLink>
      </nav>
    </div>
  );
}
