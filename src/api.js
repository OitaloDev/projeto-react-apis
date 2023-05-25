import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: url,
});

export const searchPokemon = async (pokemon) => {
  const res = await api
    .get(`${pokemon}`)
    .then((res) => res.data)
    .catch(function (err) {
      return {
        statusCode: 422,
        body: `${err}`,
      };
    });

  if (res.statusCode !== 422) return res;
};

export const getPokemons = async (limit = 20, offset = 0) => {
  const res = await api
    .get(`?limit=${limit}&offset=${offset}`)
    .then((res) => res.data)
    .catch(function (err) {
      return {
        statusCode: 422,
        body: `${err}`,
      };
    });

  if (res.statusCode !== 422) return res;
};

export const getPokemonData = async (url) => {
  const res = await axios
    .get(url)
    .then((res) => res.data)
    .catch(function (err) {
      return {
        statusCode: 422,
        body: `${err}`,
      };
    });

  if (res.statusCode !== 422) return res;
};
