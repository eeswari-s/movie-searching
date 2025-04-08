export default function SearchBar({ query, onQueryChange, type, onTypeChange }) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search for movies..."
          className="border p-2 w-full md:w-1/2 rounded-md"
        />
        <select
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
          className="border p-2 rounded-md text-blue-500"
        >
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </div>
    );
  }
  