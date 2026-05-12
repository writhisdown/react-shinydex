import PokemonList from "@/components/PokemonList/PokemonList";
import Pagination from "@/components/Pagination/Pagination";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
    <div className={styles["heading-container"]}>
      <h1 className={styles.heading}>
        Gen 1 <span>Shiny</span> Pokedex
      </h1>
      <PokemonList/>
      <Pagination/>
    </div>
    </>
  );
}