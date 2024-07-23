// src/storybook/authDecorators.tsx
import { Decorator } from "@storybook/react";
import AuthContext, {
  authContextDefaultValue,
} from "../../contexts/auth/auth.context";
import { mockedUsers } from "../mocks";

export const AuthenticatedDecorator: Decorator = (Story) => (
  <AuthContext.Provider
    value={{
      ...authContextDefaultValue,
      isAuthenticated: true,
      user: mockedUsers[0],
      jwtToken: "jwtToken",
    }}
  >
    <Story />
  </AuthContext.Provider>
);

export const UnauthenticatedDecorator: Decorator = (Story) => (
  <AuthContext.Provider value={authContextDefaultValue}>
    <Story />
  </AuthContext.Provider>
);
