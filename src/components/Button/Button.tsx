import React from "react";

import styles from "./Button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string,
  handleClick: React.MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode
}

export default function Button({className = '', handleClick, children, ...rest}: ButtonProps) {
  return (
    <button
      {...rest}
      type="button"
      className={`${className} ${styles.button}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}