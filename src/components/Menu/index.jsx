import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

import { GlobalContext } from "../../contexts/GlobalContext";

import {
  Back,
  BackText,
  Capture,
  Container,
  LinkStyled,
  LinkStyledBack,
  Logo,
  LogoFigure,
  Right,
} from "./styled";

import logo from "../../assets/logo.png";

const Menu = () => {
  const context = useContext(GlobalContext);
  const { goToHome, goToPokedex, pokedex, handlePokedex, pokemons } =
    context;
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [pokemonInList, setPokemonInList] = useState([]);
  const [pokemonInPokedex, setPokemonInPokedex] = useState(undefined);

  useEffect(() => {
    if (location.pathname === `/pokemon/${params.id}`) {
      setPokemonInList(pokemons.find((item) => item.id === Number(params.id)));
      setPokemonInPokedex(
        pokedex.find((item) => item.id === Number(params.id))
      );
    }
  }, [pokedex]);

  return (
    <>
      {location.pathname === "/" && (
        <Container>
          <LogoFigure>
            <Logo src={logo} alt="PokeApi" />
          </LogoFigure>

          <Right>
            <LinkStyled onClick={() => goToPokedex(navigate)}>
              <p>Pokédex</p>
            </LinkStyled>
          </Right>
        </Container>
      )}

      {(location.pathname === "/pokedex" ||
        location.pathname === "/signup" ||
        location.pathname === "/login") && (
        <Container menu={location.pathname === "/" ? false : true}>
          <LinkStyledBack onClick={() => goToHome(navigate)}>
            <Back>
              <AiOutlineLeft />
              <BackText>Todos Pokémons</BackText>
            </Back>
          </LinkStyledBack>

          <LogoFigure>
            <Logo src={logo} alt="PokeApi" />
          </LogoFigure>
        </Container>
      )}

      {location.pathname === `/pokemon/${params.id}` && (
        <Container>
          <LinkStyledBack onClick={() => goToHome(navigate)}>
            <Back>
              <AiOutlineLeft />
              <BackText>Todos Pokémons</BackText>
            </Back>
          </LinkStyledBack>

          <LogoFigure>
            <Logo src={logo} alt="PokeApi" />
          </LogoFigure>

          <Right>
            {!pokemonInPokedex && (
              <Capture
                onClick={() =>
                  handlePokedex(
                    pokemonInList,
                    !pokemonInPokedex ? "add" : "remove"
                  )
                }
                getButtonCardBg={"#33a4f5"}
              >
                Adicionar na Pokedex
              </Capture>
            )}

            {pokemonInPokedex && (
              <Capture
                onClick={() =>
                  handlePokedex(
                    pokemonInList,
                    !pokemonInPokedex ? "add" : "remove"
                  )
                }
                getButtonCardBg={"#FF6262"}
              >
                Excluir da Pokedex
              </Capture>
            )}
          </Right>
        </Container>
      )}
    </>
  );
};

export default Menu;
