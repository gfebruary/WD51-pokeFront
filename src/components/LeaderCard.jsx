const LeaderCard = ({ leader }) => {
  return (
    <li className="border p-2">
      <h2 className="font-semibold text-xl">{leader.name}</h2>
      <p>Fights: T{leader.fights.total} W{leader.fights.wins} L{leader.fights.losses}</p>
    </li>
  );
}

export default LeaderCard;