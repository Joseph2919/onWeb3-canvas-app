import React, { useEffect, useState } from 'react';

const Recommendation = ({ rating }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (rating > 0) {
      setRecommendations([
        `Content recommended for rating ${rating}`,
        `Another suggestion based on rating ${rating}`
      ]);
    }
  }, [rating]);

  return (
    <div className="user-profile">
      <h2>Recommendations</h2>
      <ul>
        {recommendations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
