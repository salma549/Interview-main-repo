import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [languageId, setLanguageId] = useState(54); // Default language: C++
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const languages = [
    { id: 54, name: 'C++' },
    { id: 62, name: 'Java' },
    { id: 71, name: 'Python' },
    { id: 63, name: 'JavaScript' },
    { id: 51, name: 'C' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const apiKey = 'fa639c9852msh7d0d83ff3e5302dp1949f5jsn303d1a785a70'; // Replace with your API key

    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: 'false', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
        'x-rapidapi-key': apiKey,
      },
      data: {
        source_code: code,
        language_id: languageId,
        stdin: '',
      },
    };

    try {
      const response = await axios.request(options);
      const token = response.data.token;

      // Fetch the output using the token
      const getResult = async () => {
        const resultResponse = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${token}`, {
          params: { base64_encoded: 'false', fields: '*' },
          headers: {
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'x-rapidapi-key': apiKey,
          },
        });
        setOutput(resultResponse.data.stdout || resultResponse.data.stderr);
        setIsLoading(false);
      };

      // Wait 2 seconds before fetching result to allow code execution
      setTimeout(getResult, 2000);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Online Code Editor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Language:</label>
          <select value={languageId} onChange={(e) => setLanguageId(e.target.value)}>
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Enter your code:</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows="10"
            cols="50"
            placeholder="Write your code here..."
          ></textarea>
        </div>

        <button type="submit">Run Code</button>
      </form>

      {isLoading ? <p>Loading...</p> : <pre>Output: {output}</pre>}
    </div>
  );
};

export default App;
