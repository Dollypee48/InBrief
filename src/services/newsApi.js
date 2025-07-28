import axios from "axios";


const BASE_URL = "https://gnews.io/api/v4";
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY; 

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    token: API_KEY,
    lang: "en",
    max: 10,
  },
});


export const fetchNews = async (query = "trending") => {
  try {
    const endpoint = query === "trending" ? "/top-headlines" : "/search";
    const response = await api.get(endpoint, {
      params: query === "trending" ? {} : { q: query },
    });

    return response.data.articles;
  } catch (error) {
    throw new Error("Failed to fetch news. Try again later.");
  }
};
