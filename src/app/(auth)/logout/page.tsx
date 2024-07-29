"use client";

import CircularProgress from "@mui/material/CircularProgress";

import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import useAuth from "../../../contexts/auth/use-auth";
import { ROUTES } from "../../../utils/constants/routes";

export default function LogoutPage() {
  const { logout } = useAuth();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    logout();

    enqueueSnackbar("You have been logged out", {
      variant: "info",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      preventDuplicate: true,
    });
    router.push(ROUTES.HOME);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <CircularProgress />
    </div>
  );
}
