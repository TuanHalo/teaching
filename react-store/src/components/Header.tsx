import type React from "react";
import { ThemeName, User } from "../types";
import { LoginBar } from "./LoginBar";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  cartCount: number;
  user: User | null;
  theme: ThemeName;
  onToggleTheme: () => void;
  onLogin: () => void;
  onLogout: () => void;
}

export const Header = ({
  cartCount,
  user,
  theme,
  onToggleTheme,
  onLogin,
  onLogout,
}: HeaderProps): React.JSX.Element => {
  return (
    <header className="store-header">
      <h1 className="store-branch">React Store</h1>
      <div className="store-header-actions">
        <span className="cart-badge">Cart ({cartCount})</span>
        <LoginBar user={user} onLogin={onLogin} onLogout={onLogout} />
        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
      </div>
    </header>
  );
};
