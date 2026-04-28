import React from "react";

import styles from "./Badge.module.scss";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string,
  children: React.ReactNode
};

export default function Badge({ className = '', children, ...rest }: BadgeProps) {
  return (
    <span {...rest} className={`${className} ${styles.badge}`}>
      {children}
    </span>
  );
}