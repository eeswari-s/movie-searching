import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../Services/omdbApi";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const data = await getMovieDetails(id);
      setMovie(data);
    }
    fetchDetails();
  }, [id]);

  if (!movie) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
        alt={movie.Title}
        className="w-full md:w-1/3 rounded shadow"
      />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">{movie.Title}</h2>
        <p className="text-gray-600 mb-1">🎞 Year: {movie.Year}</p>
        <p className="text-gray-600 mb-1">🎭 Genre: {movie.Genre}</p>
        <p className="text-gray-600 mb-1">📅 Released: {movie.Released}</p>
        <p className="text-gray-600 mb-1">⭐ Rating: {movie.imdbRating}</p>
        <p className="text-gray-600 mb-4">👥 Cast: {movie.Actors}</p>
        <p className="text-gray-800">{movie.Plot}</p>
      </div>
    </div>
  );
}
