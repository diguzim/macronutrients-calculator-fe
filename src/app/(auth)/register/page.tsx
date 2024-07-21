import Link from "next/link";
import PageTitle from "../../../components/page-title/page-title";
import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <PageTitle title="Register" />
      <RegisterForm />
      <div className="flex flex-row gap-2 justify-center">
        {"Already registered?"}
        <Link href="/login" className="text-primary-dark font-bold">
          Go to Login
        </Link>
      </div>
    </div>
  );
}
