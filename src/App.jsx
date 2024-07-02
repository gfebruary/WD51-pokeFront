import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//------------other

//------------components

import Header from "./components/Header";
import Footer from "./components/Footer";

//------------pages

import BattleScreen from "./pages/BattleScreen";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import PlayerInformation from "./pages/PlayerInformation";
import Pokedex from "./pages/Pokedex";
import SignIn from "./pages/SignIn";

const appName = "Pokemon game";
// const srvUrl = "https://wd51-pokeserver.onrender.com/api/v1";
const srvUrl = "http://localhost:3001/api/v1";

const App = () => {

  const [user, setUser] = useState(null);
  console.log("User: ", user)

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log('LS token', token)
    if (token) {
      const decodedToken = ''
      console.log('dt', decodedToken)
    }
    setUser(null)

  }, [])

  return (
    <>
      <BrowserRouter>
        <Header logoText={appName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn srvUrl={srvUrl} setUser={setUser} />} />
          <Route path="create-account" element={<CreateAccount srvUrl={srvUrl} />} />
          <Route path="player-information" element={<PlayerInformation />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="battle-screen" element={<BattleScreen />} />
          <Route path="leaderboard" element={<Leaderboard srvUrl={srvUrl} />} />
        </Routes>
        <Footer appName={appName} />
      </BrowserRouter>
    </>
  );
}

export default App;
