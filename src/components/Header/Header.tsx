import Logo from "@/components/Icons/Logo";
import { GitHub } from "react-feather";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles["header-container"]}>
      <div className={styles.header}>
        <a href="/" className={styles["header__start"]}>
          <Logo  aria-hidden="true" />
        </a>
        <div className={styles["header_search"]}></div>
        <a href="#" className={styles["header__end"]}>
          <GitHub aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}