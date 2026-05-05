import type { Pokemon } from "@/types/PokemonTypes";

import PokeCard from "@/components/PokeCard/PokeCard";

import styles from "./PokemonList.module.scss";

export default function PokemonList({ data }: {data: Pokemon[]}) {
  return (
    <ul className={styles.pokemon}>
      {data.map((item) => (
        <li>
          <PokeCard data={item}/>
        </li>
      ))}
    </ul>
  );
}