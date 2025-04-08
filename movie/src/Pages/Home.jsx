import { useEffect, useState } from "react";
import { searchMovies } from "../Services/omdbApi";
import SearchBar from "../Components/SearchBar";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";

export default function Home() {
  const [query, setQuery] = useState("avengers");
  const [type, setType] = useState("");
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const data = await searchMovies(query, type, currentPage);
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(Number(data.totalResults));
        setError("");
      } else {
        setMovies([]);
        setTotalResults(0);
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, type, currentPage]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="p-4 bg-gradient-to-br from-violet-800 to-purple-900 min-h-screen text-white">
      <h1 className="text-3xl text-center font-bold mb-6">🎬 Movie Search App</h1>
      <SearchBar
        query={query}
        onQueryChange={(val) => {
          setQuery(val);
          setCurrentPage(1);
        }}
        type={type}
        onTypeChange={(val) => {
          setType(val);
          setCurrentPage(1);
        }}
      />
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
