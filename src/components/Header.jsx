import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const mainNav = [
  { name: "Player Info", path: "/player-information" },
  { name: "Pokedex", path: "/pokedex" },
  { name: "Battle Screen", path: "/battle-screen" },
  { name: "Leaderboard", path: "/leaderboard" }
];

const userNav = [
  { name: "Sign up", path: "/create-account", access: ["unauthenticated"] },
  { name: "Profile", path: "/player-information", access: ["user"] },
  { name: "Admin", path: "/admin", access: ["admin"] },
  { name: "Login", path: "/signin", access: ["unauthenticated"] },
  { name: "Logout", path: "/logout", access: ["user", "admin"] },
]

const Header = ({ logoText, user }) => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    let filteredNavItems = []
    if (user && user.isAdmin) {
      filteredNavItems = userNav.filter((navItem) => (
        navItem.access.includes("admin")
      ));
    } else if (user) {
      filteredNavItems = userNav.filter((navItem) => (
        navItem.access.includes("user")
      ))
    } else {
      filteredNavItems = userNav.filter((navItem) => (
        navItem.access.includes("unauthenticated")
      ));
    }
    setNavItems(filteredNavItems);
  }, [user]);

  const navLinkStyles = ({ isActive }) => (`font-semibold py-4 text-white hover:text-blue-200 transition-colors ${isActive ? 'text-yellow-300' : ''}`)

  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex flex-wrap justify-between items-baseline gap-4">
        <NavLink className="text-xl font-bold py-4 text-white hover:text-blue-200 transition-colors" to="/">
          {logoText}
        </NavLink>

        <nav className="">
          <ul className="flex justify-center flex-wrap gap-4">
            {mainNav.map((navItem) => (
              <li key={navItem.path}>
                <NavLink className={navLinkStyles} to={navItem.path}>
                  {navItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex justify-center flex-wrap gap-2">
          {navItems.map((navItem) => (
            <li key={navItem.path}>
              <Link className="py-4 text-white hover:text-blue-200 transition-colors" to={navItem.path}>
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
