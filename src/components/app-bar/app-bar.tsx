"use client";

import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { useCallback, useState } from "react";
import useAuth from "../../contexts/auth/use-auth";
import Header from "../header/header";
import AboutBar from "./about-bar";
import AuthenticatedUserMenu from "./authenticated-user-menu";

import SearchInput from "./search-input";
import ToolsBar from "./tools-bar";
import TopLeftButtons from "./top-left-buttons";
import UnauthenticatedUserMenu from "./unauthenticated-user-menu";

export default function AppBar() {
  const { isAuthenticated } = useAuth();
  const [displayedBar, setDisplayedBar] = useState("none");

  const handleBarItemClick = useCallback(
    (item: string) => {
      if (displayedBar === item) {
        setDisplayedBar("none");
      } else {
        setDisplayedBar(item);
      }
    },
    [displayedBar]
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" sx={{ backgroundColor: "transparent" }}>
        <Toolbar>
          <Link href="/home" passHref className="mr-4">
            <Header size={1}>MaCal</Header>
          </Link>
          <TopLeftButtons
            displayedBar={displayedBar}
            handleBarItemClick={handleBarItemClick}
          />
          <div className="grow" />
          {!isAuthenticated ? (
            <UnauthenticatedUserMenu />
          ) : (
            <AuthenticatedUserMenu />
          )}
          <SearchInput />
        </Toolbar>
      </MuiAppBar>
      {displayedBar === "tools" && <ToolsBar />}
      {displayedBar === "about" && <AboutBar />}
    </Box>
  );
}
