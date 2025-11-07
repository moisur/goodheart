import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import '../styles/legal.css';

const TermsOfServicePage: React.FC = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/legal/terms-of-service.md')
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 prose">
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  );
};

export default TermsOfServicePage;