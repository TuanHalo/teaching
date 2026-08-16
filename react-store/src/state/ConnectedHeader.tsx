import type React from "react";
import { Header } from "../components/Header";
import { useUserTheme } from "./UserThemeContext";

interface ConnectedHeaderProps {
  cartCount: number;
}

export const ConnectedHeader = ({
  cartCount,
}: ConnectedHeaderProps): React.JSX.Element => {
  const { user, theme, login, logout, toggleTheme } = useUserTheme();

  return (
    <Header
      cartCount={cartCount}
      user={user}
      theme={theme}
      onToggleTheme={toggleTheme}
      onLogin={login}
      onLogout={logout}
    />
  );
};
