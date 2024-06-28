import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  const navigate = useNavigate();
  const truncate = (str, length) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  const handleClick = () => {
    navigate(`/book/${book._id}`);
  };

  return (
    <div
      onClick={() => handleClick(book._id)}
      className="bg-white p-3 rounded-lg shadow-md cursor-pointer transform transition duration-200 hover:scale-105"
    >
      <img
        src={book.img}
        alt={book.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold truncate">
          {truncate(book.title, 20)}
        </h2>
        <p className="text-gray-700">{book.author}</p>
        <p className="text-gray-600 mt-2">{truncate(book.description, 100)}</p>
        <p className="text-blue-600 mt-2">Rating: {book.rating}</p>
      </div>
    </div>
  );
};

export default Book;
