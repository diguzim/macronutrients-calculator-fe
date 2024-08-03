"use client";

import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { useCallback, useState } from "react";

import useAuth from "../../contexts/auth/use-auth";
import { ROUTES } from "../../utils/constants/routes";
import Header from "../header/header";
import AboutMenu from "./about-menu";
import AuthenticatedUserMenu from "./authenticated-user-menu";
import LanguageMenu from "./language-menu";
import MyFoodsMenu from "./my-foods-menu";
import SearchInput from "./search-input";
import ToolsMenu from "./tools-menu";
import TopLeftButtons from "./top-left-buttons";
import UnauthenticatedUserMenu from "./unauthenticated-user-menu";

export default function AppBar() {
  const { isAuthenticated } = useAuth();
  const [displayedBar, setDisplayedBar] = useState("none");

  const closeBar = useCallback(() => {
    setDisplayedBar("none");
  }, []);

  const handleBarItemClick = useCallback(
    (item: string) => {
      if (displayedBar === item) {
        closeBar();
      } else {
        setDisplayedBar(item);
      }
    },
    [closeBar, displayedBar]
  );

  return (
    <Box>
      <MuiAppBar
        position="static"
        sx={{ backgroundColor: "transparent", padding: "0.5rem 0" }}
        elevation={0}
      >
        <Toolbar>
          <Link href={ROUTES.HOME} passHref className="mr-4">
            <Header size={1} className="text-primary-darker">
              MaCal
            </Header>
          </Link>
          <TopLeftButtons
            displayedBar={displayedBar}
            handleBarItemClick={handleBarItemClick}
          />
          <div className="grow" />
          <LanguageMenu
            active={displayedBar === "language"}
            openMenu={() => handleBarItemClick("language")}
            closeMenu={closeBar}
          />
          {!isAuthenticated ? (
            <UnauthenticatedUserMenu />
          ) : (
            <AuthenticatedUserMenu
              active={displayedBar === "my-foods"}
              handleBarItemClick={handleBarItemClick}
            />
          )}
          <SearchInput />
        </Toolbar>
      </MuiAppBar>
      <ToolsMenu closeBar={closeBar} visible={displayedBar === "tools"} />
      <AboutMenu closeBar={closeBar} visible={displayedBar === "about"} />
      <MyFoodsMenu closeBar={closeBar} visible={displayedBar === "my-foods"} />
    </Box>
  );
}
