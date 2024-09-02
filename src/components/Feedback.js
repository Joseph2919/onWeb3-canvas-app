import React, { useState } from 'react';

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
    console.log('User rated:', newRating);
  };

  return (
    <div className="feedback">
      <h2>Rate This Content</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <span 
          key={star} 
          onClick={() => handleRating(star)}
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'grey' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Feedback;
