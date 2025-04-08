import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-full h-60 object-cover rounded mb-2"
      />
      <h3 className="font-bold text-lg">{movie.Title}</h3>
      <p className="text-sm text-gray-600">{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="inline-block mt-2 text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
