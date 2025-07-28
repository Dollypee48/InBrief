import { useEffect } from "react";
import { useNews } from "../context/NewsContext";
import ArticleCard from "../components/news/ArticleCard";
import SearchBar from "../components/news/SearchBar";
import CategoryFilter from "../components/news/CategoryFilter"; 

export default function Home() {
  const { articles, fetchAndSetNews, loading, error, query } = useNews(); 

  
  useEffect(() => {
    if (query) {
      fetchAndSetNews(query);
    }
  }, [query]);

  return (
    <section className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
       
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-3xl shadow-lg text-rose-500 mb-12 border border-gray-700">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            InBrief: Curated Headlines, Instantly
          </h1>
          <p className="mt-3 text-rose-300 text-lg md:text-xl max-w-2xl">
            Dive into the most important stories of the day. Your intelligent and elegant news reader.
          </p>
        </div>

      
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-700 mb-10">
          <SearchBar />
          <CategoryFilter />
          {loading && <p className="text-indigo-400 mt-4">Loading news...</p>}
          {error && <p className="text-red-400 mt-4">{error}</p>}
        </div>

       
        <div>
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
            Latest Articles
          </h2>

          {articles.length === 0 && !loading && (
            <p className="text-gray-500 text-center mt-8">No news articles found.</p>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
