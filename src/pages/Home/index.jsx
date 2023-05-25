import { useContext } from "react";
import SyncLoader from "react-spinners/SyncLoader";

import { GlobalContext } from "../../contexts/GlobalContext";
import { Menu, Pokemon } from "../../components";

import { Cards, Container, Load, Title } from "./styled";

const Home = () => {
  const context = useContext(GlobalContext);
  const { loading, pokemons } = context;

  return (
    <>
      <Menu />
      <Container>
        <Title>Todos Pokémons</Title>

        {loading ? (
          <Load>
            <SyncLoader color={"white"} size={20} />
          </Load>
        ) : (
          <Cards>
            {pokemons &&
              pokemons.map((pokemon, id) => (
                <Pokemon key={id} pokemon={pokemon} />
              ))}
          </Cards>
        )}
      </Container>
    </>
  );
};

export default Home;
