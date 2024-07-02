const Footer = ({ appName }) => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <p className="text-center">
          Generic footer text For the awesome battle {appName}
        </p>
        <p className="text-center">
          &copy; 2024 Pokémon Play. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
