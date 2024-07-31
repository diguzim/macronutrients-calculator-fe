import Typography from "@mui/material/Typography";
import Link from "../../../components/link/link";
import PageTitle from "../../../components/page-title/page-title";
import { ROUTES } from "../../../utils/constants/routes";
import LoginForm from "./login-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <PageTitle title="Login" />
      <LoginForm />
      <Typography>
        {"Don't have an account? "}
        <Link href={ROUTES.REGISTER}>Register now</Link>
      </Typography>
    </div>
  );
}
