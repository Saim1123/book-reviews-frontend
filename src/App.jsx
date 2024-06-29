import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BookDetails from "./components/BookDetails";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const isSignupOrLogin = () => {
    return location.pathname === "/signup" || location.pathname === "/login";
  };
  return (
    <div className="flex flex-col min-h-screen">
      {!isSignupOrLogin() && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </main>
      {!isSignupOrLogin() && <Footer />}
    </div>
  );
}

export default App;
