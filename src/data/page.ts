const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
const PAGELIMIT = 20;
const TOTALITEMS = 151;
const pokeIds = Array.from({length: TOTALITEMS}, (_, index) => index + 1);

export { ENDPOINT, PAGELIMIT, TOTALITEMS, pokeIds };