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
    <article
      onClick={() => handleClick(book._id)}
      className="overflow-hidden rounded-lg shadow cursor-pointer transition hover:shadow-lg"
    >
      <img
        alt={book.name}
        src={book.img}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <span className="block text-sm font-bold text-blue-500">
          {book.rating}
        </span>

        <h3 className="mt-0.5 text-lg text-gray-900">
          {" "}
          {truncate(book.title, 20)}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {truncate(book.description, 100)}
        </p>
      </div>
    </article>
  );
};

export default Book;
