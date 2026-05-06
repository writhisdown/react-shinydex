async function fetchPokemon(endpoint: string, id: number) {
  const response = await fetch(`${endpoint}${id}`);
  const json = await response.json();
  
  return json;
}

export { fetchPokemon };