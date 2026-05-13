import { useQueries } from "@tanstack/react-query";

import { type Pokemon, type PokemonTypePayload } from "@/types/PokemonTypes";

import { ENDPOINT, PAGELIMIT, pokeIds } from "@/data/page";
import { fetchPokemon } from "@/utils/fetcher";

function usePokemon(currentPage: number, pageLimit: number = PAGELIMIT) {

  const lastPage = currentPage * pageLimit;
  const firstPage = lastPage - pageLimit;

  console.log("current page index:", currentPage);
  console.log("last page index:", lastPage);
  console.log("first page index:", firstPage);

  const results = useQueries({
    queries: pokeIds.slice(firstPage, lastPage).map((id) => ({
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

  return [data, isLoading, isError] as const;
}

export default usePokemon;