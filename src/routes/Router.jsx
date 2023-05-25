import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Details, Error, Home, PokedexPage } from "../pages";

import CapturedOrRemoved from "../components/CapturedOrRemoved";

const AppRoutes = () => {
  return (
    <>
      <CapturedOrRemoved />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<PokedexPage />} />
          <Route path="pokemon/:id" element={<Details />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
