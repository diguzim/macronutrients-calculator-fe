"use client";

import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import useAuth from "../../contexts/auth/use-auth";
import Header from "../header/header";
import AuthenticatedUserMenu from "./authenticated-user-menu";
import UnauthenticatedUserMenu from "./unauthenticated-user-menu";

export default function AppBar() {
  const { isAuthenticated } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" sx={{ backgroundColor: "transparent" }}>
        <Toolbar>
          <Link href="/home" passHref>
            <Header size={1}>MaCal</Header>
          </Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div className="grow" />
          {!isAuthenticated ? (
            <UnauthenticatedUserMenu />
          ) : (
            <AuthenticatedUserMenu />
          )}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
