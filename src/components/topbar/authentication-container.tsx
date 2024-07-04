import Button from "@mui/material/Button";
import Link from "next/link";

export default function AuthenticationContainer() {
  return (
    <div className="flex flex-row items-center justify-between gap-5 mr-5">
      <Link href="/login" passHref>
        <Button variant="outlined" size="large">
          Login
        </Button>
      </Link>
      <Link href="/register" passHref>
        <Button variant="contained" size="large">
          Register
        </Button>
      </Link>
    </div>
  );
}
