import React from "react";

interface IButton {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ className, children }: IButton) => {
  return (
    <button className={`primary-btn ${className ? className : ""}`}>
      {children}
    </button>
  );
};
