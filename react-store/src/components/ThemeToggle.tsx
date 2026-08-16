import React from "react";
import { ThemeName } from "../types";

interface ThemeToggleProps {
  theme: ThemeName;
  onToggleTheme: () => void;
}

export const ThemeToggle = ({
  theme,
  onToggleTheme,
}: ThemeToggleProps): React.JSX.Element => {
  const label = theme === "light" ? "Dark mode" : "Light mode";

  return (
    <div className="theme-toggle">
      <button
        className="btn btn-secondary"
        type="button"
        onClick={onToggleTheme}
      >
        {label}
      </button>
    </div>
  );
};
