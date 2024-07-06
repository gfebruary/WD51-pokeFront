//lastBattle
const LastBattleCard = ({ battle }) => (
  <li className="flex flex-wrap justify-between items-baseline gap-2 bg-gray-700 px-4">
    <div>
      <span className="font-semibold text-xl">{battle.fighterID?.name || "Deleted"} (#{battle.fighterPokemonId})</span>
      <span> vs </span>
      <span className="font-semibold text-xl">CPU (#{battle.computerPokemonId})</span>
    </div>
    <div>Result: <span className="font-semibold text-xl">{battle.result.toUpperCase()}</span></div>
  </li>
);

export default LastBattleCard;