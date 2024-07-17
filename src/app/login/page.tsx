import Link from "next/link";
import Header from "../../components/header/header";
import LoginForm from "./login-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Header size={1}>Login to MaCal</Header>
      <LoginForm />
      <div className="flex flex-row gap-2 justify-center">
        {"Don't have an account?"}
        <Link href="/register" className="text-primary">
          Register now
        </Link>
      </div>
    </div>
  );
}
