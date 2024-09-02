import React, { useState } from 'react';

const ContentSubmission = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit content
    console.log({ title, content, tags });
  };

  return (
    <div className="content-submission">
      <h2>Submit Content</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma separated)"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContentSubmission;
