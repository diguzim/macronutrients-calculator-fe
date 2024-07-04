import Button from "@mui/material/Button";
import styles from "./authentication-container.module.css";

export default function AuthenticationContainer() {
  return (
    <div className={styles.container}>
      <Button variant="outlined" size="large">
        Login
      </Button>
      <Button variant="contained" size="large">
        Register
      </Button>
    </div>
  );
}
