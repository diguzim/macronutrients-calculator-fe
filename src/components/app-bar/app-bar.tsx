"use client";

import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import useAuth from "../../contexts/auth/use-auth";
import Button from "../button/button";
import UserMenu from "./user-menu";

export default function AppBar() {
  const { isAuthenticated } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" sx={{ backgroundColor: "transparent" }}>
        <Toolbar>
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
            <Link href="/login" passHref>
              <Button>Login</Button>
            </Link>
          ) : (
            <UserMenu />
          )}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
