"use client";

import { SnackbarProvider } from "notistack";
import React from "react";

const NotificationProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>;
};

export default NotificationProvider;
