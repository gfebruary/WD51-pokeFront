import { useState, useEffect } from "react";
import useImportData from "../hooks/useImportData";
import ChooseRandomPokemon from "../components/ChooseRandomPokemon";
import DamageCalculation from "../components/DamageCalculation";
//import BattleBackground from "../assets/BattleBackground.jpg"; // maybe keep background...
import BattleBackground from "../assets/BattleBackground2.jpg"; // maybe keep background...

const BattleScreen = () => {
  const pokemonURL = "https://wd51-pokeserver.onrender.com/api/v1/pokes/";

  const { data, error, loading } = useImportData(pokemonURL);

  //animated pokemon
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

  useEffect(() => {
    if (playerPokemon && playerPokemon.currentHP <= 0) {
      setGameOver(true);
      setGameOverMessage("YOU LOSE");
      setScore(
        (prevScore) => prevScore + bestCombo * 1000 + Math.max(0, roundBonus)
      );
    } else if (cpuPokemon && cpuPokemon.currentHP <= 0) {
      setGameOver(true);
      setGameOverMessage("YOU WIN");
      setScore(
        (prevScore) => prevScore + bestCombo * 1000 + Math.max(0, roundBonus)
      );
    }
  }, [playerPokemon, cpuPokemon, bestCombo, roundBonus]);

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
      setDamageMessage("");
      setResult("It's a tie!");
      setScore((prevScore) => prevScore + 50);
      // setCurrentCombo(0); reset combo or not if tie?
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
    } else {
      setResult(`CPU's ${randomCpuChoice} beats Player's ${playerChoice}!`);
      const cpuDamage = DamageCalculation(cpuPokemon, playerPokemon);
      setPlayerPokemon((prev) => ({
        ...prev,
        currentHP: prev.currentHP - cpuDamage,
      }));
      setDamageMessage(`CPU does ${cpuDamage} damage!`);

      setCurrentCombo(0);
    }

    setRoundBonus((prevBonus) => Math.max(0, prevBonus - 500));
    setRoundCount((prevCount) => prevCount + 1);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        Error: {error.message}
      </div>
    );
  }

  if (!data || !Array.isArray(data.pokeBase)) {
    return (
      <div className="flex items-center justify-center h-full">
        Unexpected data format
      </div>
    );
  }

  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${BattleBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      }}>
      <h1 className="text-5xl font-bold mb-4">BATTLE SCREEN</h1>
      <div className="bg-blue-200 bg-opacity-40 rounded-lg p-4 mb-8 text-center">
        <p className="text-2xl mb-2">
          Round Bonus: {roundCount} = {Math.max(0, roundBonus)} pts
        </p>

        <p className="text-2xl mb-2">Current Combo: {currentCombo}</p>
        <p className="text-2xl mb-2">
          Best Combo: {bestCombo} = {bestCombo * 1000} pts
        </p>
        <p className="  text-3xl mb-2">Score: {score} pts</p>
        {gameOver && <p className="text-3xl font-bold">{gameOverMessage}</p>}
      </div>
      <ChooseRandomPokemon
        data={data}
        onPlayerPokemonSelected={handlePlayerPokemonSelected}
        onCpuPokemonSelected={handleCpuPokemonSelected}
      />
      <div className="flex justify-around w-full mb-8">
        {playerPokemon && (
          <div className="flex flex-col items-center">
            <img
              src={`${imageURL}/${playerPokemon.id}.gif`}
              alt={playerPokemon.name.english}
              className="mb-2 h-36"
              // style={{ transform: "scaleX(-1)", height: "125px" }}
              style={{ transform: "scaleX(-1)" }}
            />
            <h2 className="text-2xl font-bold mb-2">
              {playerPokemon.name.english} (Level: 50)
            </h2>
            <p>HP: {playerPokemon.currentHP}</p>
            <p>ATT: {playerPokemon.base.Attack}</p>
            <p>DEF: {playerPokemon.base.Defense}</p>
            <div className="mb-4">
              {choices.map((choice) => (
                <label key={choice} className="block mb-2">
                  <input
                    type="radio"
                    name="playerChoice"
                    value={choice}
                    onChange={(e) => setPlayerChoice(e.target.value)}
                    checked={playerChoice === choice}
                  />
                  {choice}
                </label>
              ))}
            </div>
            <button
              className={`px-4 py-2 rounded ${
                gameOver
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              }`}
              onClick={handleSubmit}
              disabled={gameOver}>
              Submit
            </button>
          </div>
        )}

        {cpuPokemon && (
          <div className="flex flex-col items-center">
            <img
              src={`${imageURL}/${cpuPokemon.id}.gif`}
              alt={cpuPokemon.name.english}
              className="mb-2 h-36"
              // style={{ height: "125px" }}
            />
            <h2 className="text-2xl font-bold mb-2">
              {cpuPokemon.name.english} (Level: 50)
            </h2>
            <p>HP: {cpuPokemon.currentHP}</p>
            <p>ATT: {cpuPokemon.base.Attack}</p>
            <p>DEF: {cpuPokemon.base.Defense}</p>
            {cpuChoice && (
              <p className="text-lg font-semibold">CPU chose: {cpuChoice}</p>
            )}
          </div>
        )}
      </div>
      {result && <h2 className="text-2xl">{result}</h2>}
      {damageMessage && <p className="text-xl">{damageMessage}</p>}
    </div>
  );
};

export default BattleScreen;
