import { GitHub } from "react-feather";

import Logo from "@/components/Icons/Logo";
import Badge from "@/components/Badge/Badge";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";

import styles from "./Header.module.scss";

const githubLink = "https://github.com/writhisdown/react-shinydex";

export default function Header() {
  return (
    <header data-testid="header" className={styles["header"]}>
      <div className={styles["header__nav"]}>
        <div className={styles["header__nav-start"]}>
          <a href="/">
            <Logo  aria-hidden="true" />
            <VisuallyHidden>Pokedex home</VisuallyHidden>
          </a>
          <Badge className={styles["header__nav-badge"]}>v 2.0</Badge>
        </div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="github-desktop"
          className={
          `${styles["header__nav-link"]} ${styles["header__nav-link--desktop"]}`
          }
        >
          <GitHub aria-hidden="true" />
          <span>GitHub</span>
        </a>
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="github-mobile"
          className={
          `${styles["header__nav-link"]} ${styles["header__nav-link--mobile"]}`
          }
        >
          <GitHub aria-hidden="true" />
          <VisuallyHidden>GitHub</VisuallyHidden>
        </a>
      </div>
    </header>
  )
}