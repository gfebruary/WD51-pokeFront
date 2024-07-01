import { BrowserRouter, Routes, Route } from "react-router-dom";

//------------other

//------------components

import Header from "./components/Header";
import Footer from "./components/Footer";

//------------pages

import BattleScreen from "./pages/BattleScreen";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import PlayerInformation from "./pages/PlayerInformation";
import Pokedex from "./pages/Pokedex";
import SignIn from "./pages/SignIn";

const appName = "Pokemon game";

function App() {
  const srvUrl = "https://wd51-pokeserver.onrender.com/api/v1";

  return (
    <>
      <BrowserRouter>
        <Header logoText={appName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="create-account" element={<CreateAccount srvUrl={srvUrl} />} />
          <Route path="player-information" element={<PlayerInformation />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="battle-screen" element={<BattleScreen />} />
          <Route path="leaderboard" element={<LeaderBoard srvUrl={srvUrl} />} />
        </Routes>
        <Footer appName={appName} />
      </BrowserRouter>
    </>
  );
}

export default App;
