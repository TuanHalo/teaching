import type React from "react";
import type { ThemeName } from "../types";

interface LayoutProps {
  theme: ThemeName;
  header: React.ReactNode;
  children: React.ReactNode;
}

export const Layout = ({
  theme,
  header,
  children,
}: LayoutProps): React.JSX.Element => {
  return (
    <div className="store-shell" data-theme={theme}>
      {header}
      <main className="store-main">{children}</main>
    </div>
  );
};
