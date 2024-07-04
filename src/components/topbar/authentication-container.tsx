"use client";

import Button from "@mui/material/Button";
import Link from "next/link";
import useAuth from "../../contexts/auth/use-auth";

export default function AuthenticationContainer() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="flex flex-row items-center justify-between gap-5 mr-5">
      {isAuthenticated && (
        <Button variant="outlined" size="large" onClick={logout}>
          Logout
        </Button>
      )}
      {!isAuthenticated && (
        <>
          <Link href="/login" passHref>
            <Button variant="outlined" size="large">
              Login
            </Button>
          </Link>
          <Link href="/register" passHref>
            <Button variant="contained" size="large">
              Register
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}
