import Alert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const AUTO_HIDE_DURATION = 6000;

export interface AlertSnackbarProps {
  message: string;
  severity: AlertProps["severity"];
  open: boolean;
}

export default function AlertSnackbar(props: AlertSnackbarProps) {
  const { message, severity, open } = props;

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      autoHideDuration={AUTO_HIDE_DURATION}
      open={open}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
}
