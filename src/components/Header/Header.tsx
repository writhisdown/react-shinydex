import { GitHub } from "react-feather";

import Logo from "@/components/Icons/Logo";
import Badge from "@/components/Badge/Badge";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles["header-container"]}>
      <div className={styles.header}>
        <div className={styles["header__start"]}>
          <a href="/">
            <Logo  aria-hidden="true" />
          </a>
          <Badge className={styles["header__badge"]}>v 2.0</Badge>
        </div>
        <a href="#"
          className={
          `${styles["header__link"]} ${styles["header__link--desktop"]}`
          }
        >
          <GitHub aria-hidden="true" />
          <span>GitHub</span>
        </a>
        <a href="#" 
          className={
          `${styles["header__link"]} ${styles["header__link--mobile"]}`
          }
        >
          <GitHub aria-hidden="true" />
          <VisuallyHidden>GitHub</VisuallyHidden>
        </a>
      </div>
    </header>
  )
}