import Link from "next/link";
import PageTitle from "../../../components/page-title/page-title";
import { ROUTES } from "../../../utils/constants/routes";
import LoginForm from "./login-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <PageTitle title="Login" />
      <LoginForm />
      <div className="flex flex-row gap-2 justify-center">
        <p>
          {"Don't have an account? "}
          <Link href={ROUTES.REGISTER} className="text-primary-dark font-bold">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}
