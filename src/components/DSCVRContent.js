import React, { useEffect, useState } from 'react';

const DSCVRContent = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Use jsonplaceholder for testing
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  return (
    <div className="dscvr-content">
      <h2>DSCVR Content</h2>
      <ul className="content-item">
        {content.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DSCVRContent;
