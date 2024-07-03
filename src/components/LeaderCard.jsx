const LeaderCard = ({ leader }) => {
  console.log(leader);
  const draws = leader.fights.total - leader.fights.wins - leader.fights.losses || 0;
  return (
    <li className="flex flex-wrap justify-between items-baseline gap-4 bg-gray-700 px-4">
      <h2 className="font-semibold text-xl">{leader.name}</h2>
      <p>
        <span className="font-semibold"> S: </span>{leader.fights.score || 0} |
        <span className="font-semibold"> W: </span>{leader.fights.wins || 0} |
        <span className="font-semibold"> L: </span>{leader.fights.losses || 0} |       
        <span className="font-semibold"> D: </span>{draws} |
        <span className="font-semibold"> T: </span>{leader.fights.total || 0}
      </p>
    </li>
  );
};

export default LeaderCard;
