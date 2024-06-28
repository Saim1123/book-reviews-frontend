import axios from "axios";
import { useEffect, useState } from "react";
import Book from "../components/Book";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/book");
        setBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen border-t-2 border-white">
      <header className="w-full min-h-80 flex flex-col items-center justify-center p-6 bg-white">
        <div className="w-4/5 text-center mx-auto">
          <h1
            className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"
            style={{ fontFamily: "Playwrite AU QLD, sans-serif" }}
          >
            Welcome to Book Review Website
          </h1>
          <p
            className="text-lg mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"
            style={{ fontFamily: "sans-serif" }}
          >
            Dive into a world of literature with our comprehensive book reviews.
            Our platform allows you to explore new books, read detailed reviews,
            and share your own insights with a community of book enthusiasts.
            Whether you&apos;re looking for your next great read or want to see
            what others think of a book you&apos;ve enjoyed, our website offers
            a wealth of information to guide your literary journey.
          </p>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Book key={book._id} book={book} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
