import { createContext } from "react";
import { User } from "../../common/interfaces/user.interface";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  jwtToken: string | null;
  loading: boolean;
  login: (user: User, jwtToken: string) => void;
  logout: () => void;
};

export const authContextDefaultValue: AuthContextType = {
  isAuthenticated: false,
  user: null,
  jwtToken: null,
  loading: true,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext(authContextDefaultValue);

export default AuthContext;
