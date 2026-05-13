import type { Pokemon } from "@/types/PokemonTypes";

import PokeCard from "@/components/PokeCard/PokeCard";

import styles from "./PokemonList.module.scss";

type PokemonListTypes = {
  data: Pokemon[],
  loading: boolean,
  error: boolean
}

export default function PokemonList({data, loading, error}: PokemonListTypes) {
  if (loading) { 
    return <span>Loading...</span>;
  }

  if (error) { 
    return <span>Something went wrong</span>;
  }

  return (
    <ul className={styles.pokemon}>
      {data.map((item) => (
        <li key={item.id}>
          <PokeCard data={item}/>
        </li>
      ))}
    </ul>
  );
}