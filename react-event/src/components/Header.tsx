import type React from "react";

interface HeaderProps {
  count: number;
  onPing: () => void;
}

export const Header = ({ count, onPing }: HeaderProps): React.JSX.Element => {
  const handlePing = (): void => {
    onPing();
  };

  return (
    <header className="region region--header">
      <p className="caption">Header — child of App</p>
      <div className="header-row">
        <p className="region__title">Header</p>
        <div className="actions">
          <span className="slot">Count {count}</span>
          <button type="button" className="btn" onClick={handlePing}>
            Ping
          </button>
        </div>
      </div>
    </header>
  );
};
