// import React, { useState } from 'react';
// import axios from 'axios';

// const CodeEditor = () => {
//   const [languageId, setLanguageId] = useState(54); // Default language: C++
//   const [code, setCode] = useState('');
//   const [output, setOutput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const languages = [
//     { id: 54, name: 'C++' },
//     { id: 62, name: 'Java' },
//     { id: 71, name: 'Python' },
//     { id: 63, name: 'JavaScript' },
//     { id: 51, name: 'C' },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       // Make a POST request to our backend
//       const response = await axios.post('http://localhost:5000/editor/submit', {
//         sourceCode: code,
//         languageId: parseInt(languageId),
//       });

//       setOutput(response.data.stdout || response.data.stderr);
//     } catch (error) {
//       console.error('Error submitting code:', error);
//       setOutput('Error in code submission.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Online Code Editor</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Select Language:</label>
//           <select value={languageId} onChange={(e) => setLanguageId(e.target.value)}>
//             {languages.map((lang) => (
//               <option key={lang.id} value={lang.id}>
//                 {lang.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label>Enter your code:</label>
//           <textarea
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             rows="10"
//             cols="50"
//             placeholder="Write your code here..."
//           ></textarea>
//         </div>

//         <button type="submit">Run Code</button>
//       </form>

//       {isLoading ? <p>Loading...</p> : <pre>Output: {output}</pre>}
//     </div>
//   );
// };

// export default CodeEditor;


// import React, { useState } from 'react';
// import axios from 'axios';

// const CodeEditor = () => {
//   const [languageId, setLanguageId] = useState(54); // Default language: C++
//   const [code, setCode] = useState('');
//   const [output, setOutput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const languages = [
//     { id: 54, name: 'C++' },
//     { id: 62, name: 'Java' },
//     { id: 71, name: 'Python' },
//     { id: 63, name: 'JavaScript' },
//     { id: 51, name: 'C' },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const apiKey = 'fa639c9852msh7d0d83ff3e5302dp1949f5jsn303d1a785a70'; // Replace with your API key

//     const options = {
//       method: 'POST',
//       url: 'https://judge0-ce.p.rapidapi.com/submissions',
//       params: { base64_encoded: 'false', fields: '*' },
//       headers: {
//         'content-type': 'application/json',
//         'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
//         'x-rapidapi-key': apiKey,
//       },
//       data: {
//         source_code: code,
//         language_id: languageId,
//         stdin: '',
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       const token = response.data.token;

//       // Fetch the output using the token
//       const getResult = async () => {
//         const resultResponse = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${token}`, {
//           params: { base64_encoded: 'false', fields: '*' },
//           headers: {
//             'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
//             'x-rapidapi-key': apiKey,
//           },
//         });
//         setOutput(resultResponse.data.stdout || resultResponse.data.stderr);
//         setIsLoading(false);
//       };

//       // Wait 2 seconds before fetching result to allow code execution
//       setTimeout(getResult, 2000);
//     } catch (error) {
//       console.error(error);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Online Code Editor</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Select Language:</label>
//           <select value={languageId} onChange={(e) => setLanguageId(e.target.value)}>
//             {languages.map((lang) => (
//               <option key={lang.id} value={lang.id}>
//                 {lang.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label>Enter your code:</label>
//           <textarea
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             rows="10"
//             cols="50"
//             placeholder="Write your code here..."
//           ></textarea>
//         </div>

//         <button type="submit">Run Code</button>
//       </form>

//       {isLoading ? <p>Loading...</p> : <pre>Output: {output}</pre>}
//     </div>
//   );
// };

// export default CodeEditor


// Main part is above

// import React, { useState } from 'react';
// import axios from 'axios';

// const CodeEditor = () => {
//   const [languageId, setLanguageId] = useState(54); // Default language: C++
//   const [code, setCode] = useState('');
//   const [output, setOutput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const languages = [
//     { id: 54, name: 'C++' },
//     { id: 62, name: 'Java' },
//     { id: 71, name: 'Python' },
//     { id: 63, name: 'JavaScript' },
//     { id: 51, name: 'C' },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:5000/editor/submit', {
//         code,
//         languageId: parseInt(languageId), // Ensure languageId is an integer
//       });

//       setOutput(response.data.output || response.data.error);
//     } catch (error) {
//       console.error('Error submitting the code:', error);
//       setOutput('An error occurred while submitting the code.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-20 p-6 bg-gray-100 rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold text-center mb-6">Online Code Editor</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="flex flex-col">
//           <label className="text-lg font-semibold mb-2">Select Language:</label>
//           <select
//             value={languageId}
//             onChange={(e) => setLanguageId(parseInt(e.target.value))}
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             {languages.map((lang) => (
//               <option key={lang.id} value={lang.id}>
//                 {lang.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label className="text-lg font-semibold mb-2">Enter your code:</label>
//           <textarea
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             rows="10"
//             className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
//             placeholder="Write your code here..."
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
//         >
//           {isLoading ? 'Running...' : 'Run Code'}
//         </button>
//       </form>

//       <div className="mt-8">
//         {isLoading ? (
//           <p className="text-center text-lg">Loading...</p>
//         ) : (
//           <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
//             Output: {output}
//           </pre>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CodeEditor;
// import React, { useState } from 'react';
// import axios from 'axios';

// const CodeEditor = () => {
//   const [languageId, setLanguageId] = useState(54); // Default language: C++
//   const [code, setCode] = useState('');
//   const [output, setOutput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const languages = [
//     { id: 54, name: 'C++' },
//     { id: 62, name: 'Java' },
//     { id: 71, name: 'Python' },
//     { id: 63, name: 'JavaScript' },
//     { id: 51, name: 'C' },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post('http://localhost:5000/editor/submit', {
//         code,
//         languageId: parseInt(languageId),
//       });

//       setOutput(response.data.output || response.data.error);
//     } catch (error) {
//       console.error('Error submitting the code:', error);
//       setOutput('An error occurred while submitting the code.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-full mx-auto mt-12 p-6 bg-gray-900 text-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-center mb-6 mt-7">Code Editor</h1>

//       <div className="bg-gray-800 border border-gray-700 rounded-lg">
//         <div className="p-4 bg-gray-700 text-sm text-gray-300 flex items-center justify-between rounded-t-lg">
//           <span className="font-mono">Select Language:</span>
//           <select
//             value={languageId}
//             onChange={(e) => setLanguageId(parseInt(e.target.value))}
//             className="bg-gray-900 text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
//           >
//             {languages.map((lang) => (
//               <option key={lang.id} value={lang.id}>
//                 {lang.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <textarea
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           rows="15"
//           className="w-full p-4 bg-gray-900 text-green-400 border-t border-gray-700 rounded-b-lg focus:outline-none font-mono"
//           placeholder="// Write your code here..."
//         ></textarea>
//       </div>

//       <button
//         onClick={handleSubmit}
//         className="w-full mt-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
//       >
//         {isLoading ? 'Running...' : 'Run Code'}
//       </button>

//       <div className="mt-8 bg-black p-4 rounded-lg shadow-inner">
//         <h2 className="text-xl font-semibold mb-4">Terminal Output:</h2>
//         {isLoading ? (
//           <p className="text-lg text-yellow-500">Processing...</p>
//         ) : (
//           <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto h-48">
//             {output ? `> ${output}` : '> No output yet'}
//           </pre>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CodeEditor;


import React, { useState } from 'react';
import axios from 'axios';

const CodeEditor = () => {
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

    try {
      const response = await axios.post('http://localhost:5000/editor/submit', {
        code,
        languageId: parseInt(languageId),
      });

      setOutput(response.data.output || response.data.error);
    } catch (error) {
      console.error('Error submitting the code:', error);
      setOutput('An error occurred while submitting the code.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-24 p-6 bg-gray-900 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 mt-7">Code Editor</h1>

      <div className="bg-gray-800 border border-gray-700 rounded-lg">
        <div className="p-4 bg-gray-700 text-sm text-gray-300 flex flex-col sm:flex-row items-center justify-between rounded-t-lg">
          <span className="font-mono mb-2 sm:mb-0">Select Language:</span>
          <select
            value={languageId}
            onChange={(e) => setLanguageId(parseInt(e.target.value))}
            className="bg-gray-900 text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows="15"
          className="w-full p-4 bg-gray-900 text-green-400 border-t border-gray-700 rounded-b-lg focus:outline-none font-mono resize-none"
          placeholder="// Write your code here..."
        ></textarea>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
      >
        {isLoading ? 'Running...' : 'Run Code'}
      </button>

      <div className="mt-8 bg-black p-4 rounded-lg shadow-inner">
        <h2 className="text-xl font-semibold mb-4">Terminal Output:</h2>
        {isLoading ? (
          <p className="text-lg text-yellow-500">Processing...</p>
        ) : (
          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto h-48 max-h-72">
            {output ? `> ${output}` : '> No output yet'}
          </pre>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
