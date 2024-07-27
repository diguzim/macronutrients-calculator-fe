"use client";

import Link from "next/link";
import Button from "../button/button";

export default function UnauthenticatedUserMenu() {
  return (
    <div className="flex flex-row gap-4">
      <Link href="/register" passHref>
        <Button variant="outlined">Register</Button>
      </Link>
      <Link href="/login" passHref>
        <Button>Login</Button>
      </Link>
    </div>
  );
}
