type PokemonTypes = "ground" | "rock" | "grass" | "fire" | "water" | "electric" |"flying" | "dragon" | "psychic" | "ghost" | "poison" | "steel" | "normal" | "ice" | "fighting" | "fairy" | "bug" | "dark";

type Pokemon = {
  id: number,
  name: string,
  artwork: string,
  artwork_alt: string,
  type: string[]
}

export {type PokemonTypes, type Pokemon};