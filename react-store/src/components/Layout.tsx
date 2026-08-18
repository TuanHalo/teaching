import type React from "react";
import { useUserTheme } from "../state/UserThemeContext";

interface LayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export const Layout = ({
  header,
  children,
}: LayoutProps): React.JSX.Element => {
  const { theme } = useUserTheme();
  return (
    <div className="store-shell" data-theme={theme}>
      {header}
      <main className="store-main">{children}</main>
    </div>
  );
};
