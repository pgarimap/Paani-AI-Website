// import React from 'react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Blog1() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/blog3.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default Blog1;
