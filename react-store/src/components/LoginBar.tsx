import React from "react";
import { User } from "../types";

interface LoginBarProps {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

export const LoginBar = ({
  user,
  onLogin,
  onLogout,
}: LoginBarProps): React.JSX.Element => {
  if (user) {
    return (
      <div className="login-bar">
        <span className="user-label">Hi, {user.name}</span>
        <button type="button" className="btn btn-secondary" onClick={onLogout}>
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="login-bar">
      <button className="btn" type="button" onClick={onLogin}>
        Log in as Member
      </button>
    </div>
  );
};
