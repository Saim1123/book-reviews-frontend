const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Book Review Website. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
