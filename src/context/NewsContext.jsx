import { createContext, useContext, useEffect, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState(() => {
    const stored = localStorage.getItem("inbrief-favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const [articles, setArticles] = useState(() => {
    const stored = localStorage.getItem("inbrief-articles");
    return stored ? JSON.parse(stored) : [];
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("trending");

  useEffect(() => {
    localStorage.setItem("inbrief-articles", JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem("inbrief-favorites", JSON.stringify(savedArticles));
  }, [savedArticles]);

  const updateArticles = (newArticles) => {
    setArticles(newArticles);
    setError(null);
  };

  const toggleFavorite = (article) => {
    const exists = savedArticles.find((a) => a.url === article.url);
    if (exists) {
      setSavedArticles(savedArticles.filter((a) => a.url !== article.url));
    } else {
      setSavedArticles([article, ...savedArticles]);
    }
    
  };

  const fetchAndSetNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
      
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&token=${apiKey}&lang=en&max=20`
      );
      const data = await response.json();

      if (data.articles && data.articles.length > 0) {
        setArticles(data.articles);
      } else {
        setError("No articles found.");
      }
    } catch (err) {
      setError("Failed to fetch news.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsContext.Provider
      value={{
        articles,
        updateArticles,
        savedArticles,
        toggleFavorite,
        loading,
        setLoading,
        error,
        setError,
        query,
        setQuery,
        fetchAndSetNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
