import { useState } from "react";
import { useNews } from "../../context/NewsContext";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { fetchAndSetNews, setQuery: setContextQuery } = useNews();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    setContextQuery(trimmedQuery);  // 🔥 Add this line
    fetchAndSetNews(trimmedQuery);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8 bg-white p-4 rounded-xl shadow-lg"
    >
      <input
        type="text"
        placeholder="🔍 Search the latest news (e.g. AI, Politics, Health)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm placeholder-gray-400 text-sm transition text-black"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-md text-sm font-medium shadow-md hover:opacity-90 transition"
      >
        🔎 Search
      </button>
    </form>
  );
}
