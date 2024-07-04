import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";

import AuthenticationContainer from "./authentication-container";
import styles from "./topbar.module.css";

export default function Topbar() {
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
      <AuthenticationContainer />
    </div>
  );
}
