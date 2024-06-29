const Footer = ({ appName }) => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center">
        <p className="text-center">
          Generic footer text For the awesome battle {appName}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
