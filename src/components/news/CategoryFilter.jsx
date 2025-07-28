import { useNews } from "../context/NewsContext";

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

export default function CategoryFilter() {
  const { query, setQuery } = useNews();

  return (
    <div className="flex flex-wrap gap-2 my-4 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setQuery(category)}
          className={`px-3 py-1 rounded-full border ${
            query === category
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-800 border-gray-300"
          } hover:bg-gray-800 hover:text-white transition`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
