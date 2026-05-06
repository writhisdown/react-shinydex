import { useQueries } from "@tanstack/react-query";
import { useState } from "react";

import { type Pokemon, type PokemonTypePayload } from "@/types/PokemonTypes";

import { ENDPOINT, PAGELIMIT, pokeIds } from "@/data/page";
import { fetchPokemon } from "@/utils/fetcher";

function usePokemon(pageLimit: number = PAGELIMIT) {
  const [pageIndex, setPageIndex] = useState(0);

  const results = useQueries({
    queries: pokeIds.slice(pageIndex, pageIndex + pageLimit).map((id) => ({
      queryKey: ["pokemon", id],
      queryFn: () => fetchPokemon(ENDPOINT, id),
      keepPreviousData: true,
      staleTime: Infinity,
    })),
    combine: (results) => ({
      data: results.map((result) => {
        const { data } = result;

        console.log("fetched:", data);

        if (!data) return;

        const pokemon: Pokemon = {  
          id: data.id,
          name: data.name,
          artwork: data.sprites["front_default"],
          artwork_alt: data.sprites["front_shiny"],
          type: data.types.map((type: PokemonTypePayload) => type.type.name)
        }

        return pokemon;
      }),
      isLoading: results.some((result) => result.isPending),
      isError: results.some((result) => result.isError),
    }),
  });

  console.log("results:", results)

  const { data, isLoading, isError } = results;

  console.log("data:", data);
  console.log("isError:", isError);

  return [data, isLoading, isError, setPageIndex] as const;
}

export default usePokemon;