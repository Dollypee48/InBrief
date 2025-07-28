import { createContext, useContext, useEffect, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState(() => {
    try {
      const stored = localStorage.getItem("inbrief-articles");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [savedArticles, setSavedArticles] = useState(() => {
    try {
      const stored = localStorage.getItem("inbrief-favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("general"); // default category

  // Sync articles with localStorage
  useEffect(() => {
    localStorage.setItem("inbrief-articles", JSON.stringify(articles));
  }, [articles]);

  // Sync savedArticles with localStorage
  useEffect(() => {
    localStorage.setItem("inbrief-favorites", JSON.stringify(savedArticles));
  }, [savedArticles]);

  // Fetch news when query changes
  useEffect(() => {
    fetchAndSetNews(query);
  }, [query]);

  const updateArticles = (newArticles) => {
    setArticles(newArticles);
    setError(null);
  };

  const toggleFavorite = (article) => {
    const exists = savedArticles.some((a) => a.url === article.url);
    if (exists) {
      setSavedArticles((prev) => prev.filter((a) => a.url !== article.url));
    } else {
      setSavedArticles((prev) => [article, ...prev]);
    }
  };

  const fetchAndSetNews = async (searchQuery) => {
    setLoading(true);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
      if (!apiKey) throw new Error("Missing API Key");

      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?topic=${searchQuery}&lang=en&token=${apiKey}&max=20`
      );

      if (!response.ok) throw new Error("Network response failed");

      const data = await response.json();

      if (data.articles && data.articles.length > 0) {
        setArticles(data.articles);
      } else {
        setArticles([]);
        setError("No articles found for this category.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch news. Please check your network or API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        articles,
        savedArticles,
        loading,
        error,
        query,
        setQuery,
        fetchAndSetNews,
        updateArticles,
        toggleFavorite,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
