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
      <div className="form-group">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required/>
        </div>
        <div className="form-group">
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required/>
          </div>
          <div className="form-group">
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma separated)"/>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContentSubmission;
