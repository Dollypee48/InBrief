import React from "react";
import { useNews } from "../../context/NewsContext";

export default function ArticleCard({ article }) {
  const { toggleFavorite, savedArticles } = useNews();
  const { title, description, url, urlToImage, source, publishedAt } = article;

  const isFavorite = savedArticles.some((a) => a.url === article.url);

  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-zinc-700">
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-52 object-cover"
        />
      )}

      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold text-white hover:text-rose-400 transition">
            {title}
          </h2>
          <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
            {description?.slice(0, 100)}...
          </p>
        </div>

        <div className="mt-4 flex justify-between text-xs text-zinc-400 italic">
          <span>{source?.name}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-rose-400 hover:underline font-medium"
          >
            Read More →
          </a>
          <button
            onClick={() => toggleFavorite(article)}
            className={`text-xs font-medium px-3 py-1 rounded-full transition ${
              isFavorite
                ? "bg-rose-600 text-white"
                : "bg-zinc-800 border border-zinc-600 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {isFavorite ? "★ Saved" : "☆ Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
