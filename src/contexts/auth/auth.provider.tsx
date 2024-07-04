"use client";

import { useState } from "react";
import { User } from "../../common/interfaces/user.interface";
import AuthContext from "./auth.context";

type AuthStateType = {
  isAuthenticated: boolean;
  user: User | null;
  jwtToken: string | null;
};

const defaultAuthState: AuthStateType = {
  isAuthenticated: false,
  user: null,
  jwtToken: null,
};

const AuthProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [authState, setAuthState] = useState(defaultAuthState);

  const login = (user: User, jwtToken: string) => {
    setAuthState({ isAuthenticated: true, user, jwtToken });
  };

  const logout = () => {
    setAuthState(defaultAuthState);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
