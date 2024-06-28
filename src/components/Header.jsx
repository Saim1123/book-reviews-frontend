import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      setIsLogin(true);
      setUserInfo(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setIsLogin(false);
    setUserInfo(null);
  };

  const getFirstChar = (name) => {
    return name.split("")[0].toUpperCase();
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <ul className="flex items-center">
          <li>
            <Link to="/">
              <img
                src="/icon.png"
                alt="icon"
                className="w-12 h-12 p-2 bg-white rounded-full border-2 border-white"
              />
            </Link>
          </li>
        </ul>
        {!isLogin ? (
          <ul className="flex gap-4 items-center">
            <li>
              <Link
                to="/signup"
                className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200"
              >
                Login
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-4 items-center">
            <li>
              <Link to="/">
                <span className="rounded-full bg-white w-10 h-10 flex items-center justify-center text-black text-lg">
                  {userInfo &&
                    userInfo.data &&
                    getFirstChar(userInfo.data.name)}
                </span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-200"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
