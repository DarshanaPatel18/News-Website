import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../NewsSection.css';

const API_KEY = 'YOUR_API_KEY'; // Replace this with your actual NewsAPI key
const categories = ["Technology", "Sports", "Business", "Health", "Science"];

function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Technology');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch news when component mounts or when category changes
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${selectedCategory.toLowerCase()}&apiKey=1c205b6962e9445c8ab72acf992090a4`
        );
        setNews(response.data.articles);
      } catch (err) {
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedCategory]);

  return (
    <section className="news-section" id="news">
      <h2>Latest News by Category</h2>
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={category === selectedCategory ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {loading && <p>Loading news...</p>}
      {error && <p>{error}</p>}

      <div className="news-grid">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.urlToImage || 'https://via.placeholder.com/300x200'} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
