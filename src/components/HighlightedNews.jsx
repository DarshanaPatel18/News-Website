import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../HighlightedNews.css';

const API_KEY = 'YOUR_API_KEY'; // Replace this with your actual NewsAPI key

function HighlightedNews() {
  const [topNews, setTopNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch top news when component mounts
    const fetchTopNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=1c205b6962e9445c8ab72acf992090a4`
        );
        setTopNews(response.data.articles.slice(0, 2)); // Limit to top 2 articles for the section
      } catch (err) {
        setError("Failed to load top news.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopNews();
  }, []);

  return (
    <section className="highlighted-news" id="highlighted">
      <h2>Top News</h2>

      {loading && <p>Loading top news...</p>}
      {error && <p>{error}</p>}

      <div className="highlighted-news-grid">
        {topNews.map((news, index) => (
          <div key={index} className="news-card">
            <img src={news.urlToImage || 'https://via.placeholder.com/600x300'} alt={news.title} />
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighlightedNews;
