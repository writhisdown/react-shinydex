import { type PokemonTypes, type Pokemon} from "@/types/PokemonTypes"

import Badge from "@/components/Badge/Badge";

import styles from "./PokeCard.module.scss";

export default function PokeCard({ data }: {data: Pokemon}) {
  const {id, name, artwork, artwork_alt, type} = data;

  return (
    <article className={styles["poke-card"]}>
      <img className={styles["poke-card__image"]} src={artwork} alt="" />
      <img className={styles["poke-card__image-alt"]} src={artwork_alt} alt="" />
      <span className={styles["poke-card__id"]}>{id}</span>
      <h2 className={styles["poke-card__name"]}>{name}</h2>
      <div className={styles["poke-card__type"]}>
        {type.map((types: PokemonTypes) => (
          <Badge variant={types}>{types}</Badge>
        ))}
      </div>
    </article>
  )
}
