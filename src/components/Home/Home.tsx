import { useQueries } from "@tanstack/react-query";
import { useState } from "react";

import type { Pokemon } from "@/types/PokemonTypes";

import PokemonList from "@/components/PokemonList/PokemonList";

import styles from "./Home.module.scss";

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
const pokeIds = Array.from({length: 151}, (_, index) => index + 1);

async function fetchPokemon(id: number) {
  const response = await fetch(`${ENDPOINT}${id}`);
  const json = await response.json();
  
  return json;
}

console.log(pokeIds);

export default function Home() {
  const [pageIndex, setPageIndex] = useState(0);

  const results = useQueries({
    queries: pokeIds.slice(pageIndex, pageIndex + 20).map((id) => ({
      queryKey: ["pokemon", id],
      queryFn: () => fetchPokemon(id),
      keepPreviousData: true,
      staleTime: Infinity,
    })),
    combine: (results) => ({
      data: results.map((result) => {
        const { data } = result;

        const pokemon: Pokemon = {  
          id: data?.id,
          name: data?.name,
          artwork: data?.sprites["front_default"],
          artwork_alt: data?.sprites["front_shiny"],
          type: data?.types.map((type) => type.type.name)
        }

        return pokemon;
      }),
      isLoading: results.some((result) => result.isPending),
      isError: results.filter((result) => result.isError)
    }),
  });

  const { data, isLoading, isError } = results;

  console.log(data, isLoading, isError);

  return (
    <>
    <div className={styles["heading-container"]}>
      <h1 className={styles.heading}>
        Gen 1 <span>Shiny</span> Pokedex
      </h1>
      <PokemonList data={data}/>
    </div>
    </>
  );
}