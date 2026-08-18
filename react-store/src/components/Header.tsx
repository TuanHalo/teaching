import type React from "react";
import { ThemeName, User } from "../types";
import { LoginBar } from "./LoginBar";
import { ThemeToggle } from "./ThemeToggle";
import { useUserTheme } from "../state/UserThemeContext";
import { useUserTheme } from "../state/UserThemeContext";

interface HeaderProps {
  cartCount: number;
}

export const Header = ({
  cartCount,
}: HeaderProps): React.JSX.Element => {
  const { user, theme, login : onLogin, logout : onLogout, toggleTheme : onToggleTheme } = useUserTheme();
  return (
    <header className="store-header">
      <h1 className="store-branch">React Store</h1>
      <div className="store-header-actions">
        <span className="cart-badge">Cart ({cartCount})</span>
        <LoginBar user={user} onLogin={login} onLogout={logout} />
        <ThemeToggle theme={theme} onToggleTheme={toggleTheme} />
      </div>
    </header>
  );
};
