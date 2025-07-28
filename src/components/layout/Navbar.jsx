import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link
            to="/"
            className="text-2xl font-extrabold text-rose-600 tracking-wide"
          >
            InBrief
          </Link>
        </div>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm justify-center md:justify-end w-full md:w-auto">
          <Link
            to="/"
            className="text-gray-700 hover:text-rose-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/favourite"
            className="text-gray-700 hover:text-rose-600 font-medium"
          >
            Favorites
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-rose-600 font-medium"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
