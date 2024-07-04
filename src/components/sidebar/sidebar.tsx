import NavigationLinks from "./navigation-links";
import styles from "./sidebar.module.css";
import VerticalPlaceholder from "./vertical-placeholder";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <NavigationLinks />
      <VerticalPlaceholder />
    </div>
  );
}
