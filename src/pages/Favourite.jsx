import ArticleCard from "../components/news/ArticleCard";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Favourite() {
  const [favourites] = useLocalStorage("inbrief-favorites", []);

  return (
    <section className="px-4 py-10 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Your Favorite Articles</h1>

      {!favourites || favourites.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-gray-300"
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
