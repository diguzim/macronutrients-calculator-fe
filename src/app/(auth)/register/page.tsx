import Typography from "@mui/material/Typography";
import Link from "../../../components/link/link";
import { ROUTES } from "../../../utils/constants/routes";
import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <RegisterForm />
      <Typography>
        {"Already registered? "}
        <Link href={ROUTES.LOGIN}>Go to Login</Link>
      </Typography>
    </div>
  );
}
