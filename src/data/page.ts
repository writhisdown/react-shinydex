const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
const PAGELIMIT = 20;
const pokeIds = Array.from({length: 151}, (_, index) => index + 1);

export { ENDPOINT, PAGELIMIT, pokeIds };