import Typography from "@mui/material/Typography";
import Link from "../../../components/link/link";
import { ROUTES } from "../../../utils/constants/routes";
import LoginForm from "./login-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <LoginForm />
      <Typography>
        {"Don't have an account? "}
        <Link href={ROUTES.REGISTER}>Register now</Link>
      </Typography>
    </div>
  );
}
