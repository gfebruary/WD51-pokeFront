import React, { useState, useEffect } from "react";
import useImportData from "../hooks/useImportData";
import ChooseRandomPokemon from "../components/ChooseRandomPokemon";
import DamageCalculation from "../components/DamageCalculation";
import BattleBackground from "../assets/BattleBackground2.jpg";
import PokemonSection from "../components/PokemonSection";
import GameControls from "../components/GameControls";
import UpdateFightInfo from "../components/UpdateFightInfo";
import Scoreboard from "../components/Scoreboard";
//import ParticleEffect from "../components/ParticleEffect";
import NotLogged from "../components/NotLogged";

const BattleScreen = ({ user }) => {
  const pokemonURL = "https://wd51-pokeserver.onrender.com/api/v1/pokes/";

  const { data, error, loading } = useImportData(pokemonURL);

  const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown";

  const choices = ["Rock", "Paper", "Scissors"];

  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [cpuPokemon, setCpuPokemon] = useState(null);
  const [playerChoice, setPlayerChoice] = useState("Rock");
  const [cpuChoice, setCpuChoice] = useState("");
  const [result, setResult] = useState("");
  const [damageMessage, setDamageMessage] = useState("");
  const [score, setScore] = useState(0);
  const [currentCombo, setCurrentCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [roundBonus, setRoundBonus] = useState(20000);
  const [roundCount, setRoundCount] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState("");
  const [battleOutcome, setBattleOutcome] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  // const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (playerPokemon && playerPokemon.currentHP <= 0) {
      setGameOver(true);
      setGameOverMessage("YOU LOSE... LOSER!");
      setScore((prevScore) => prevScore + bestCombo * 1000);
      setBattleOutcome("loss");
    } else if (cpuPokemon && cpuPokemon.currentHP <= 0) {
      setGameOver(true);
      setGameOverMessage("YOU WIN... LIKE A BOSS!");
      setScore(
        (prevScore) => prevScore + bestCombo * 1000 + Math.max(0, roundBonus)
      );
      setBattleOutcome("win");

      // setShowParticles(true);
      // setTimeout(() => {
      //   setShowParticles(false);
      // }, 3000);
    }
  }, [playerPokemon, cpuPokemon, bestCombo, roundBonus]);

  useEffect(() => {
    if (gameOver && !user) {
      setModalOpen(true);
    }
  }, [gameOver, user]);

  const handlePlayerPokemonSelected = (pokemon) => {
    setPlayerPokemon({ ...pokemon, currentHP: pokemon.base.HP });
  };

  const handleCpuPokemonSelected = (pokemon) => {
    setCpuPokemon({ ...pokemon, currentHP: pokemon.base.HP });
  };

  const handleSubmit = () => {
    if (gameOver) return;

    const randomCpuChoice = choices[Math.floor(Math.random() * choices.length)];
    setCpuChoice(randomCpuChoice);

    if (playerChoice === randomCpuChoice) {
      setDamageMessage("No damage dealt!");
      setResult("It's a tie!");
      setScore((prevScore) => prevScore + 50);
    } else if (
      (playerChoice === "Rock" && randomCpuChoice === "Scissors") ||
      (playerChoice === "Paper" && randomCpuChoice === "Rock") ||
      (playerChoice === "Scissors" && randomCpuChoice === "Paper")
    ) {
      setResult(`Player's ${playerChoice} beats CPU's ${randomCpuChoice}!`);
      const playerDamage = DamageCalculation(playerPokemon, cpuPokemon);
      setCpuPokemon((prev) => ({
        ...prev,
        currentHP: prev.currentHP - playerDamage,
      }));
      setDamageMessage(`Player does ${playerDamage} damage!`);

      setScore((prevScore) => prevScore + 100);
      setCurrentCombo((prevCombo) => prevCombo + 1);
      setBestCombo((prevBestCombo) =>
        Math.max(prevBestCombo, currentCombo + 1)
      );
      setBattleOutcome("win");
    } else {
      setResult(`CPU's ${randomCpuChoice} beats Player's ${playerChoice}!`);
      const cpuDamage = DamageCalculation(cpuPokemon, playerPokemon);
      setPlayerPokemon((prev) => ({
        ...prev,
        currentHP: prev.currentHP - cpuDamage,
      }));
      setDamageMessage(`CPU does ${cpuDamage} damage!`);

      setCurrentCombo(0);
      setBattleOutcome("loss");
    }

    setRoundBonus((prevBonus) => Math.max(0, prevBonus - 500));
    setRoundCount((prevCount) => prevCount + 1);
  };

  const handleRematch = () => {
    setPlayerPokemon({ ...playerPokemon, currentHP: playerPokemon.base.HP });
    setCpuPokemon({ ...cpuPokemon, currentHP: cpuPokemon.base.HP });
    setPlayerChoice("Rock");
    setCpuChoice("");
    setResult("");
    setDamageMessage("");
    setRoundBonus(20000);
    setBestCombo(0);
    setScore(0);
    setRoundCount(1);
    setGameOver(false);
    setGameOverMessage("");
    setBattleOutcome("");
  };

  const handleNewGame = () => {
    setPlayerPokemon(null);
    setCpuPokemon(null);
    setPlayerChoice("Rock");
    setCpuChoice("");
    setResult("");
    setDamageMessage("");
    setScore(0);
    setCurrentCombo(0);
    setBestCombo(0);
    setRoundBonus(20000);
    setRoundCount(1);
    setGameOver(false);
    setGameOverMessage("");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#fbf5f7" }}>
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${BattleBackground})` }}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Scoreboard
            roundCount={roundCount}
            roundBonus={roundBonus}
            currentCombo={currentCombo}
            bestCombo={bestCombo}
            score={score}
            gameOver={gameOver}
            gameOverMessage={gameOverMessage}
          />
          {loading && <p>Loading...</p>}
          {error && <p>Error loading data: {error.message}</p>}
          {!loading && !error && (
            <>
              {!playerPokemon && (
                <ChooseRandomPokemon
                  data={data}
                  onPlayerPokemonSelected={handlePlayerPokemonSelected}
                  onCpuPokemonSelected={handleCpuPokemonSelected}
                />
              )}
              {playerPokemon && cpuPokemon && (
                <>
                  <PokemonSection
                    playerPokemon={playerPokemon}
                    cpuPokemon={cpuPokemon}
                    imageURL={imageURL}
                    cpuChoice={cpuChoice}
                  />
                  <GameControls
                    choices={choices}
                    playerChoice={playerChoice}
                    setPlayerChoice={setPlayerChoice}
                    handleSubmit={handleSubmit}
                    result={result}
                    damageMessage={damageMessage}
                    gameOver={gameOver}
                    gameOverMessage={gameOverMessage}
                    handleRematch={handleRematch}
                    handleNewGame={handleNewGame}
                  />
                </>
              )}
              {gameOver && user && (
                <UpdateFightInfo
                  user={user}
                  score={score}
                  battleOutcome={battleOutcome}
                  playerPokemon={playerPokemon}
                  cpuPokemon={cpuPokemon}
                />
              )}
            </>
          )}
        </div>
      </div>
      {/* {showParticles && <ParticleEffect showParticles={showParticles} />} */}
      <NotLogged
        isOpen={modalOpen}
        message="Log in or sign up to keep track of your stats!"
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default BattleScreen;
