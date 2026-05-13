import { useState } from "react";
import usePokemon from "@/hooks/usePokemon";

import { PAGELIMIT, TOTALITEMS } from "@/data/page";

import PokemonList from "@/components/PokemonList/PokemonList";
import Pagination from "@/components/Pagination/Pagination";

import styles from "./Home.module.scss";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, isLoading, isError] = usePokemon(currentPage);

  const totalPages = Math.ceil(TOTALITEMS / PAGELIMIT);

  return (
    <>
      <div className={styles["heading-container"]}>
        <h1 className={styles.heading}>
          Gen 1 <span>Shiny</span> Pokedex
        </h1>
        <PokemonList
          data={data}
          loading={isLoading}
          error={isError}
        />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}