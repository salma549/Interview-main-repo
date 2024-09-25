// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [skills, setSkills] = useState('');
//     const [loading, setLoading] = useState(false);

//     const onFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     };

//     const onFileUpload = async () => {
//         if (!selectedFile) {
//             alert('Please upload a file');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('resume', selectedFile);
        
//         try {
//             setLoading(true);
//             const response = await axios.post('http://localhost:5000/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             setSkills(response.data.skills);
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             alert('Error uploading or parsing the file');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="App">
//             <h1>Resume Skill Extractor</h1>
//             <input type="file" accept=".pdf" onChange={onFileChange} />
//             <button onClick={onFileUpload}>Upload and Extract Skills</button>
//             {loading ? <p>Loading...</p> : <pre>{skills}</pre>}
//         </div>
//     );
// }

// export default App;

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [skills, setSkills] = useState('');
//     const [questions, setQuestions] = useState('');
//     const [loading, setLoading] = useState(false);

//     const onFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     };

//     const onFileUpload = async () => {
//         if (!selectedFile) {
//             alert('Please upload a file');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('resume', selectedFile);
        
//         try {
//             setLoading(true);
//             const response = await axios.post('http://localhost:5000/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             setSkills(response.data.skills.join(', ')); // Join skills into a string
//             setQuestions(JSON.stringify(response.data.questions, null, 2)); // Format questions for display
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             alert('Error uploading or parsing the file');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="App">
//             <h1>Resume Skill Extractor</h1>
//             <input type="file" accept=".pdf" onChange={onFileChange} />
//             <button onClick={onFileUpload}>Upload and Extract Skills</button>
//             {loading ? <p>Loading...</p> : (
//                 <>
//                     <h2>Extracted Skills:</h2>
//                     <pre>{skills}</pre>
//                     <h2>Generated Interview Questions:</h2>
//                     <pre>{questions}</pre>
//                 </>
//             )}
//         </div>
//     );
// }

// export default App;

// ---------------------- Main ---------------------

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [skills, setSkills] = useState('');
//     const [questions, setQuestions] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const onFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     };

//     const onFileUpload = async () => {
//         if (!selectedFile) {
//             alert('Please upload a file');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('resume', selectedFile);

//         try {
//             setLoading(true);
//             const response = await axios.post('http://localhost:5000/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             setSkills(response.data.skills.join(', ')); // Join skills into a string
//             setQuestions(response.data.questions); // Use raw questions
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             alert('Error uploading or parsing the file');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const formatText = (text) => {
//         return text
//             .replace(/\*\*/g, '')  // Remove all occurrences of '**'
//             .replace(/\n/g, '<br />');  // Replace '\n' with line breaks
//     };

//     return (
//         <div className="App min-h-screen bg-gray-50 p-6 flex flex-col items-center">
//             <h1 className="text-4xl font-bold mb-6 text-blue-600">Resume Skill Extractor</h1>
    
//             <input
//                 type="file"
//                 accept=".pdf"
//                 onChange={onFileChange}
//                 className="mb-4 p-2 border border-gray-300 rounded"
//             />
//             <button
//                 onClick={onFileUpload}
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
//             >
//                 Upload and Extract Skills
//             </button>
    
//             {loading ? (
//                 <p className="mt-6 text-xl text-gray-700">Loading...</p>
//             ) : (
//                 <>
//                     <div className="mt-6 w-full max-w-full">
//                         <h2 className="text-2xl font-semibold text-blue-600 mb-2">Extracted Skills:</h2>
//                         <pre className="bg-white p-4 rounded shadow text-gray-800">{skills}</pre>
    
//                         {questions && Object.keys(questions).length > 0 ? (
//                             <div className="bg-white p-4 rounded shadow mt-6">
//                                 <h2 className="text-2xl font-semibold text-blue-600 mb-2">Generated Interview Questions:</h2>
//                                 {Object.keys(questions).map((skill, index) => (
//                                     <div key={index} className="mb-6">
//                                         <h3 className="text-xl font-bold text-green-700 mb-2">{skill}</h3>
//                                         <ul className="space-y-4">
//                                             {questions[skill].map((qa, idx) => (
//                                                 <li key={idx} className="border-b border-gray-200 pb-4">
//                                                     <p className="text-lg text-gray-900 font-medium">
//                                                         Q{idx + 1}: {qa.question}
//                                                     </p>
//                                                     {/* <p className="text-gray-700 mt-2 pl-4">
//                                                         Answer: {qa.answer}
//                                                     </p> */}
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 ))}
//                             </div>
//                         ) : (
//                             <p className="mt-4 text-gray-700">No questions available.</p>
//                         )}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
    
    
// }

// export default App;


// --------------- Interview Main ----------------------




// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [skills, setSkills] = useState('');
//     const [questions, setQuestions] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const onFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     };

//     const onFileUpload = async () => {
//         if (!selectedFile) {
//             alert('Please upload a file');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('resume', selectedFile);

//         try {
//             setLoading(true);
//             const response = await axios.post('http://localhost:5000/resume/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             setSkills(response.data.skills.join(', ')); // Join skills into a string
//             setQuestions(response.data.questions); // Use raw questions
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             alert('Error uploading or parsing the file');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const formatText = (text) => {
//         if (!text) return '';  // Ensure `text` is a string, if not return an empty string
//         return text
//             .replace(/\*\*/g, '')  // Remove all occurrences of '**'
//             .replace(/#/g, '')     // Remove all occurrences of '#'
//             .replace(/\n/g, '');  // Replace '\n' with line breaks (if needed)
//     };

//     return (
//         <div className="App min-h-screen bg-gray-50 p-6 flex flex-col items-center">
//             <h1 className="text-4xl font-bold mb-6 text-blue-600">Resume Skill Extractor</h1>

//             <input
//                 type="file"
//                 accept=".pdf"
//                 onChange={onFileChange}
//                 className="mb-4 p-2 border border-gray-300 rounded"
//             />
//             <button
//                 onClick={onFileUpload}
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
//             >
//                 Upload and Extract Skills
//             </button>

//             {loading ? (
//                 <p className="mt-6 text-xl text-gray-700">Loading...</p>
//             ) : (
//                 <>
//                     <div className="mt-6 w-full max-w-full">
//                         <h2 className="text-2xl font-semibold text-blue-600 mb-2">Extracted Skills:</h2>
//                         <pre className="bg-white p-4 rounded shadow text-gray-800">{skills}</pre>

//                         {questions && Object.keys(questions).length > 0 ? (
//                             <div className="bg-white p-4 rounded shadow mt-6">
//                                 <h2 className="text-2xl font-semibold text-blue-600 mb-2">Generated Interview Questions:</h2>
//                                 {Object.keys(questions).map((skill, index) => (
//                                     <div key={index} className="mb-6">
//                                         <h3 className="text-xl font-bold text-green-700 mb-2">{skill}</h3>
//                                         <ul className="space-y-4">
//                                             {questions[skill].map((qa, idx) => (
//                                                 <li key={idx} className="border-b border-gray-200 pb-4">
//                                                     <p className="text-lg text-gray-900 font-medium">
//                                                         Q: {qa.question ? formatText(qa.question) : 'No question available'} {/* Check if `qa.question` exists */}
//                                                     </p>
                                                  
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 ))}
//                             </div>
//                         ) : (
//                             <p className="mt-4 text-gray-700">No questions available.</p>
//                         )}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// export default App;


// --------- DSA----------
// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css'; // Create a CSS file for styling if needed

// function App() {
//     const [skills, setSkills] = useState('');
//     const [questions, setQuestions] = useState(null);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false); // Added loading state

//     const handleGenerateQuestions = async () => {
//         const skillsArray = skills.split(',').map(skill => skill.trim()).filter(skill => skill);

//         if (skillsArray.length === 0) {
//             alert('Please enter at least one skill.');
//             return;
//         }

//         setLoading(true); // Set loading to true
//         setError(''); // Clear previous errors

//         try {
//             const response = await axios.post('http://localhost:5000/generate-questions', {
//                 skills: skillsArray
//             });
//             setQuestions(response.data.questions);
//         } catch (err) {
//             console.error('Error generating questions:', err);
//             setError('An error occurred while generating questions.');
//             setQuestions(null);
//         } finally {
//             setLoading(false); // Set loading to false when done
//         }
//     };

//     const formatText = (text) => {
//         if (!text) return '';  // Ensure `text` is a string, if not return an empty string
//         return text
//             .replace(/\*\*/g, '')  // Remove all occurrences of '**'
//             .replace(/#/g, '')     // Remove all occurrences of '#'
//             .replace(/\n/g, '');  // Replace '\n' with line breaks
//     };

//     return (
//         <div className="container">
//             <h1>Interview Question Generator</h1>
//             <input
//                 type='text'
//                 value={skills}
//                 onChange={(e) => setSkills(e.target.value)}
//                 placeholder="Enter skills separated by commas (e.g., JavaScript, Python, React)"
//             />
//             <button onClick={handleGenerateQuestions}>Generate Questions</button>
//             {error && <div className="error">{error}</div>}
//             {loading ? (
//                 <p className="mt-6 text-xl text-gray-700">Loading...</p>
//             ) : (
//                 <div id="resultContainer">
//                     {questions ? (
//                         Object.entries(questions).map(([skill, pairs]) => (
//                             <div key={skill}>
//                                 <h2>{skill}</h2>
//                                 {pairs.map((pair, index) => (
//                                     <div key={index} className="question-pair">
//                                         <strong>Question:</strong> {formatText(pair.question)}<br />
//                                         <strong>Answer:</strong> {formatText(pair.answer)} {/* Display answer if available */}
//                                     </div>
//                                 ))}
//                             </div>
//                         ))
//                     ) : (
//                         <p className="mt-4 text-gray-700">No questions available.</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default App;

// import React from 'react'
// import Resume from './components/Resume'
// import DSA from './components/DSA'

// const App = () => {
//   return (
//       <div>
//           {/* <Resume /> */}
//           <DSA/>
//     </div>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import DSA from './components/DSA';
// import Career from './pages/Career';
import './index.css'
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/dsa" element={<DSA />} />
           
              <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default App;

