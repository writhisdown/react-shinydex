import usePokemon from "@/hooks/usePokemon"

import PokeCard from "@/components/PokeCard/PokeCard";

import styles from "./PokemonList.module.scss";

export default function PokemonList() {
  const [data, isLoading, isError] = usePokemon();

  if (isLoading) { 
    return <span>Loading...</span>;
  }

  if (isError) { 
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