import { useContext, useState } from "react";

import { GlobalContext } from "../../contexts/GlobalContext";
import { Menu, Pokemon } from "../../components";

import { Cards, Container, Message, Order, Title, Top } from "./styled";

const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { pokedex } = context;

  return (
    <>
      <Menu />
      <Container>
        <Title>Meus Pokémons</Title>

        <Cards>
          {pokedex && pokedex.length === 0 && (
            <Message>Não há nenhum pokemon registrado na pokedex...</Message>
          )}
          {pokedex &&
            pokedex.length > 0 &&
            pokedex.map((pokemon, id) => (
              <Pokemon key={id} pokemon={pokemon} />
            ))}
        </Cards>
      </Container>
    </>
  );
};

export default PokedexPage;
