import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

//------------components
import { AppStateProvider } from "./context/AppStateProvider";
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
import Logout from "./components/Logout";

const appName = "Pokémon Play";
const srvUrl = "https://wd51-pokeserver.onrender.com/api/v1";
// const srvUrl = "http://localhost:3001/api/v1";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 > Date.now()) {
        setUser(decodedToken);

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else {
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <AppStateProvider>
      <BrowserRouter>
        <Header logoText={appName} user={user} />
        <Routes>
          <Route path="/" element={<Home user={user} appName={appName} />} />
          <Route
            path="signin"
            element={<SignIn srvUrl={srvUrl} setUser={setUser} />}
          />
          <Route
            path="create-account"
            element={<CreateAccount srvUrl={srvUrl} />}
          />
          <Route
            path="player-information"
            element={<PlayerInformation user={user} srvUrl={srvUrl} />}
          />
          <Route path="pokedex" element={<Pokedex />} />
          <Route
            path="battle-screen"
            element={<BattleScreen user={user} srvUrl={srvUrl} />}
          />
          <Route path="leaderboard" element={<Leaderboard srvUrl={srvUrl} />} />
          <Route path="logout" element={<Logout setUser={setUser} />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer appName={appName} />
      </BrowserRouter>
    </AppStateProvider>
  );
};

export default App;
