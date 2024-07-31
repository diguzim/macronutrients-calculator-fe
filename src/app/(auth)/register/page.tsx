import Typography from "@mui/material/Typography";
import Link from "../../../components/link/link";
import PageTitle from "../../../components/page-title/page-title";
import { ROUTES } from "../../../utils/constants/routes";
import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <PageTitle title="Register" />
      <RegisterForm />
      <Typography>
        {"Already registered? "}
        <Link href={ROUTES.LOGIN}>Go to Login</Link>
      </Typography>
    </div>
  );
}
