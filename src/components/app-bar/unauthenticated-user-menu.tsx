"use client";

import Link from "next/link";
import { ROUTES } from "../../utils/constants/routes";
import Button from "../button/button";

export default function UnauthenticatedUserMenu() {
  return (
    <div className="flex flex-row gap-4">
      <Link href={ROUTES.REGISTER} passHref>
        <Button variant="outlined">Register</Button>
      </Link>
      <Link href={ROUTES.LOGIN} passHref>
        <Button>Login</Button>
      </Link>
    </div>
  );
}
