import { createContext, useContext, useState } from "react";
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
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<ThemeName>("light");
  
  const handleLogin = () => { setUser({name: "Linh Do"});  };
  const handleLogout = () => { setUser(null); };
  const handleToggleTheme = () => { setTheme((prev) => prev === "light" ? "dark" : "light"); };

  const sharedValue = {user, theme, login: handleLogin, logout: handleLogout, toggleTheme: handleToggleTheme};

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
