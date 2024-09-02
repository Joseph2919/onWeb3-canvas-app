import React, { useEffect, useState } from 'react';

const TrendingContent = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/all/top.json')
      .then(response => response.json())
      .then(data => setTrending(data))
      .catch(error => console.error('Error fetching trending content:', error));
  }, []);

  return (
    <div className="trending-content">
      <h2>Trending Content</h2>
      <ul>
        {trending.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingContent;
