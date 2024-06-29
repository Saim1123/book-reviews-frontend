import axios from "axios";
import { useEffect, useState } from "react";
import Book from "../components/Book";
import Hero from "../components/Hero";
import Loader from "../components/Loader";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/book");
        setBooks(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen border-t-2 border-white">
      <header>
        <Hero />
      </header>
      <main className="container mx-auto p-6">
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <Book key={book._id} book={book} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
