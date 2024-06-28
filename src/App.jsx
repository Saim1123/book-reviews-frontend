import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BookDetails from "./components/BookDetails";

function App() {
  const location = useLocation();

  const isSignupOrLogin = () => {
    return location.pathname === "/signup" || location.pathname === "/login";
  };
  return (
    <div>
      {!isSignupOrLogin() && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
