import type { Pokemon } from "@/types/PokemonTypes";

import { PAGELIMIT } from "@/data/page";

import PokeCard from "@/components/PokeCard/PokeCard";
import FallbackCard from "@/components/FallbackCard/FallbackCard";

import styles from "./PokemonList.module.scss";

type PokemonListTypes = {
  data: Pokemon[],
  loading: boolean,
  error: boolean
}

const fallbackItems = Array.from({length: PAGELIMIT}, (_, index) => index + 1);

export default function PokemonList({data, loading, error}: PokemonListTypes) {
  if (error) { 
    return <span>Something went wrong</span>;
  }

  if (loading) { 
    return (
      <ul className={styles.pokemon}>
        {fallbackItems.map((item) => (
          <li key={item}>
            <FallbackCard/>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={styles.pokemon}>
      {data.map((item) => (
        <li key={item.id}>
          <PokeCard data={item} />
        </li>
      ))}
    </ul>
  );
}