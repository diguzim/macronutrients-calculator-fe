import Button from "@mui/material/Button";

export default function AuthenticationContainer() {
  return (
    <div className="flex flex-row items-center justify-between gap-5 mr-5">
      <Button variant="outlined" size="large">
        Login
      </Button>
      <Button variant="contained" size="large">
        Register
      </Button>
    </div>
  );
}
