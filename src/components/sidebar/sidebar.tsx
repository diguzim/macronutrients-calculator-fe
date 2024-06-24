import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import styles from "./sidebar.module.css";
import NavigationLinks from "./navigation-links";
import VerticalPlaceholder from "./vertical-placeholder";

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
      <NavigationLinks />
      <VerticalPlaceholder />
    </div>
  );
}
