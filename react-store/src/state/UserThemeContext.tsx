import { createContext, useContext } from "react";
import type React from "react";
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
  return (
    <UserThemeContext.Provider value={null}>
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
