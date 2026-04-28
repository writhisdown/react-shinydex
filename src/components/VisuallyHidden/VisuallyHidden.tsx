import React from "react";

import styles from "./VisuallyHidden.module.scss";

type VisuallyHiddenProps = {
  children: React.ReactNode
};

export default function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return (
    <span className={styles["visually-hidden"]}>
      {children}
    </span>
  );
}