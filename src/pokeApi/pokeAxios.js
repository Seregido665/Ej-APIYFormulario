import axios from "axios";

export const getPokemons = () => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=493`)
    .then((response) => response.data.results); 
};

