import ArticleCard from "../components/news/ArticleCard";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Favourite() {
  const [favourites] = useLocalStorage("inbrief-favorites", []);

  return (
    <section className="px-4 py-12 max-w-6xl mx-auto bg-black min-h-screen">
      <h1 className="text-4xl font-extrabold text-white mb-8 border-b border-gray-700 pb-2">
        Your <span className="text-pink-500">Favorite</span> Articles
      </h1>

      {!favourites || favourites.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="text-lg">You haven't saved any articles yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favourites.map((article, index) => (
            <ArticleCard key={article.url || index} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
