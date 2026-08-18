import { createContext, useContext } from "react";
import React from "react";
import type { ThemeName, User } from "../types";

export interface UserThemeContextValue {
  user: User | null;
  theme: ThemeName;
  login: () => void;
  logout: () => void;
  toggleTheme: () => void;
}

const UserThemeContext = createContext<UserThemeContextValue | null>(null);

interface UserThemeProviderProps {
  children: React.ReactNode;
}

// Assignment 3 — own user and theme with useState, then pass them in value.
export const UserThemeProvider = ({
  children,
}: UserThemeProviderProps): React.JSX.Element => {
  const [user, setUser] = React.useState<User | null>(null);
  const [theme, setTheme] = React.useState<ThemeName>("light");

  const login = (): void => {
    setUser({ name: "John Doe" });
  }

  const logout = (): void => {
    setUser(null);
  }

  const toggleTheme = (): void => {
    setTheme((prev) => prev === "light" ? "dark" : "light");
  }

  const sharedValue: UserThemeContextValue = {
    user,
    theme,
    login,
    logout,
    toggleTheme
  }
  return (
    <UserThemeContext.Provider value={sharedValue}>
      {children}
    </UserThemeContext.Provider>
  );
};  

export const useUserTheme = (): UserThemeContextValue => {
  const context = useContext(UserThemeContext);
  if (!context) {
    throw new Error("useUserTheme must be used within UserThemeProvider");
  }
  return context;
};
