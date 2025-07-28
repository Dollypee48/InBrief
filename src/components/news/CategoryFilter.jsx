import { useNews } from "../../context/NewsContext";

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
    <div className="flex flex-wrap gap-3 justify-center my-6">
      {categories.map((category) => {
        const isActive = query === category;
        return (
          <button
            key={category}
            onClick={() => setQuery(category)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition duration-200 border shadow-sm focus:outline-none
              ${
                isActive
                  ? "bg-pink-600 text-white border-pink-700"
                  : "bg-zinc-800 text-gray-300 border-zinc-600 hover:bg-pink-600 hover:text-white"
              }
            `}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
