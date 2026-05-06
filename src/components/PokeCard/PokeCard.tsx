import { type PokemonTypes, type Pokemon} from "@/types/PokemonTypes"

import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import Badge from "@/components/Badge/Badge";

import styles from "./PokeCard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const altTextBase = "Small front facing pixel artwork of";
const altTextShiny = "Small front facing pixel artwork featuring the shiny variant of";

export default function PokeCard({ data }: {data: Pokemon}) {
  const {id, name, artwork, artwork_alt, type} = data;

  console.log('type:', type);

  const leadingZeroOne = id > 9 && id < 100;
  const leadingZeroTwo = id < 10;

  return (
    <article className={styles["poke-card"]}>
      <img 
        className={styles["poke-card__image"]}
        src={artwork}
        alt={`${altTextBase}$ ${name}`}
      />
      <img 
        className={styles["poke-card__image-alt"]}
        src={artwork_alt}
        alt={`${altTextShiny} ${name}`}
      />
      <div className={styles["poke-card__id"]}>
        <VisuallyHidden>Pokemon number</VisuallyHidden>
        <span aria-hidden="true">#</span>
        <span
          className={cx({
            "leading-zero-one": leadingZeroOne,
            "leading-zero-two": leadingZeroTwo
          })}
        >
          {id}
        </span>
      </div>
      <h2 className={styles["poke-card__name"]}>{name}</h2>
      <div className={styles["poke-card__type"]}>
        <VisuallyHidden>Pokemon type</VisuallyHidden>
        {type.map((types: PokemonTypes) => (
          <Badge key={types} variant={types}>{types}</Badge>
        ))}
      </div>
    </article>
  )
}
