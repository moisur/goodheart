import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import '../styles/legal.css';

const PrivacyPolicyPage: React.FC = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/legal/privacy-policy.md')
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 prose">
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  );
};

export default PrivacyPolicyPage;