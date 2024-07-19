import Link from "next/link";
import Header from "../../components/header/header";
import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Header size={1}>Register to MaCal</Header>
      <RegisterForm />
      <div className="flex flex-row gap-2 justify-center">
        {"Already registered?"}
        <Link href="/login" className="text-primary-dark font-bold">
          Login now
        </Link>
      </div>
    </div>
  );
}
