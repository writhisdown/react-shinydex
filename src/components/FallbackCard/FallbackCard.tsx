import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import PokeballIconFlat from "@/components/Icons/PokeballIcon/PokeballIconFlat";

import styles from "./FallbackCard.module.scss";

export default function FallbackCard() {
  return (
    <div className={styles["fallback-card"]}>
      <VisuallyHidden>Loading...</VisuallyHidden>
      <PokeballIconFlat
        animate={true}
        className={styles["fallback-card__placeholder-icon"]}
        aria-hidden="true"
      />
    </div>
  );
}