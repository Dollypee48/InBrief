import { Link, useNavigate } from "react-router-dom";
import { useNews } from "../../context/NewsContext";
import { useState } from "react";

export default function Navbar() {
  const { setQuery } = useNews();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setQuery(search.trim());
      navigate("/"); // Ensure search redirects to homepage
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="text-2xl font-extrabold text-gray-900 tracking-wide">
            InBrief
          </Link>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="flex w-full md:w-auto items-center gap-2"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search news..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm transition-all duration-200"
          >
            Search
          </button>
        </form>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm justify-center md:justify-end w-full md:w-auto">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/favourite" className="text-gray-700 hover:text-blue-600 font-medium">
            Favorites
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
