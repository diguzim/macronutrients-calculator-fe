"use client";

import { useEffect, useState } from "react";
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

  // Load JWT token from local storage if it exists
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const user = localStorage.getItem("user");
    if (token && user) {
      setAuthState({
        isAuthenticated: true,
        user: JSON.parse(user),
        jwtToken: token,
      });
    }
  }, []);

  const login = (user: User, jwtToken: string) => {
    localStorage.setItem("jwtToken", jwtToken);
    localStorage.setItem("user", JSON.stringify(user));
    setAuthState({ isAuthenticated: true, user, jwtToken });
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
    setAuthState(defaultAuthState);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
