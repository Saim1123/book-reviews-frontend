import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  console.log(id);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/book/${id}`
        );
        setBook(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.error("Error fetching book:", err.message);
      }
    };

    fetchBook();
  }, [id]);

  console.log(book);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row">
          <img
            src={book.img}
            alt={book.title}
            className="w-full md:w-1/2 md:max-h-96 object-cover rounded-lg"
          />
          <div className="p-4 md:ml-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{book.title}</h2>
              <p className="text-gray-700 mt-2">
                <span className="font-bold">Author:</span> {book.author}
              </p>

              <p className="text-gray-600">
                <span className="font-bold">Description:</span>{" "}
                {book.description}
              </p>
              <p className="text-blue-600 mt-3 font-bold">
                Rating: {book.rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
