const LeaderCard = ({ leader }) => {
  return (
    <li className="flex flex-wrap justify-between items-baseline gap-4 bg-gray-700 px-4">
      <h2 className="font-semibold text-xl">{leader.name}</h2>
      <p>W: {leader.fights.wins} L: {leader.fights.losses} T:{leader.fights.total} </p>
    </li>
  );
}

export default LeaderCard;