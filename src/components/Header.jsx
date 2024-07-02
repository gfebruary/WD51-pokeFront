import { Link } from "react-router-dom";
const mainNav = [
  { name: "Player Info", path: "/player-information" },
  { name: "Pokedex", path: "/pokedex" },
  { name: "Battle Screen", path: "/battle-screen" },
  { name: "Leaderboard", path: "/leaderboard" }
];

const userNav = [
  { name: "Sign up", path: "/create-account" },
  { name: "Login", path: "/signin" },
]

const Header = ({ logoText }) => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex flex-wrap justify-between items-baseline gap-4">
        <Link className="text-xl font-bold py-4 text-white hover:text-blue-300 transition-colors" to="/">
          {logoText}
        </Link>

        <nav className="">
          <ul className="flex justify-center flex-wrap gap-4">
            {mainNav.map((navItem) => (
              <li key={navItem.path}>
                <Link className="font-semibold py-4 text-white hover:text-blue-300 transition-colors" to={navItem.path}>
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex justify-center flex-wrap gap-2">
          {userNav.map((navItem) => (
            <li key={navItem.path}>
              <Link className="py-4 text-white hover:text-blue-300 transition-colors" to={navItem.path}>
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
