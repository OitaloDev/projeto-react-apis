export const goToHome = (navigate) => {
  navigate("/");
};

export const goToPokedex = (navigate) => {
  navigate("/pokedex");
};

export const goToPokemon = (navigate, id) => {
  navigate(`/pokemon/${id}`);
};