"use client";

import { useEffect, useState } from "react";
import { User } from "../../common/interfaces/user.interface";
import AuthContext, { authContextDefaultValue } from "./auth.context";

type AuthStateType = {
  isAuthenticated: boolean;
  user: User | null;
  jwtToken: string | null;
  loading: boolean;
};

const defaultAuthState: AuthStateType = {
  isAuthenticated: authContextDefaultValue.isAuthenticated,
  user: authContextDefaultValue.user,
  jwtToken: authContextDefaultValue.jwtToken,
  loading: authContextDefaultValue.loading,
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState(defaultAuthState);

  // Load JWT token from local storage if it exists
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const user = localStorage.getItem("user");
    if (token && user) {
      setAuthState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        user: JSON.parse(user),
        jwtToken: token,
        loading: false,
      }));
    } else {
      setAuthState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  }, []);

  const login = (user: User, jwtToken: string) => {
    localStorage.setItem("jwtToken", jwtToken);
    localStorage.setItem("user", JSON.stringify(user));
    setAuthState((prevState) => ({
      ...prevState,
      isAuthenticated: true,
      user,
      jwtToken,
    }));
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
    setAuthState({
      ...defaultAuthState,
      loading: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
