import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//------------other

//------------components

import Nav from "./components/Nav";
import Footer from "./components/Footer";

//------------pages

import BattleScreen from "./pages/BattleScreen";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import PlayerInformation from "./pages/PlayerInformation";
import Pokedex from "./pages/Pokedex";
import SignIn from "./pages/SignIn";

function App() {
  const hostLocation = "https://wd51-pokeserver.onrender.com";

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="player-information" element={<PlayerInformation />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="battle-screen" element={<BattleScreen />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
