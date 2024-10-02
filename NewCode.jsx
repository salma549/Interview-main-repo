// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaCode } from 'react-icons/fa'; // Importing a code icon for design


// function Code() {
//     const [skills, setSkills] = useState('');
//     const [generatedCode, setGeneratedCode] = useState(null);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleGenerateCode = async () => {
//         const skillsArray = skills.split(',').map(skill => skill.trim()).filter(skill => skill);

//         if (skillsArray.length === 0) {
//             alert('Please enter at least one skill.');
//             return;
//         }

//         setLoading(true);
//         setError('');

//         try {
//             const response = await axios.post('http://localhost:5000/code/generate-code', {
//                 skills: skillsArray
//             });
//             setGeneratedCode(response.data.generatedCode);
//         } catch (err) {
//             console.error('Error generating code:', err);
//             setError('An error occurred while generating code.');
//             setGeneratedCode(null);
//         } finally {
//             setLoading(false);
//         }
//     };

    
   

//     return (
//         <div className="relative bg-white min-h-screen flex flex-col items-center justify-start py-10 w-6xl">
//             {/* Input and Button Section */}
//             <div className="relative w-full flex flex-col items-center p-8 bg-white rounded-lg shadow-2xl overflow-hidden mt-20">
//                 <h1 className="text-gray-900 text-4xl font-extrabold mb-4 text-center">Master Data Structures & Algorithms!</h1>
//                 <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6">
//                     Unleash Your Coding Brilliance with Specialized DSA Content!
//                 </p>
//                 <input
//                     type="text"
//                     value={skills}
//                     onChange={(e) => setSkills(e.target.value)}
//                     placeholder="Enter skills separated by commas (e.g., DSA Graphs, Linked Lists...)"
//                     className="w-full p-4 mb-4 border border-transparent rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
//                 />
//                 <button
//                     onClick={handleGenerateCode}
//                     className="w-full bg-blue-200 text-gray-800 py-4 rounded-lg shadow-md hover:bg-blue-300 focus:outline-none transition duration-300 ease-in-out"
//                 >
//                     {loading ? 'Generating...' : 'Generate Code'}
//                 </button>

//                 {error && <div className="mt-4 text-red-300 text-center">{error}</div>}
//             </div>

//             {/* Generated Code Section */}
//             <div className="w-full max-w-8xl bg-gray-50 shadow-lg rounded-lg p-4 md:p-6 lg:p-8 mt-8">
//                 {loading ? (
//                     <p className="text-xl text-gray-700 text-center">Loading...</p>
//                 ) : (
//                     <div id="resultContainer" className="space-y-8">
//                         {generatedCode ? (
//                             Object.entries(generatedCode).map(([skill, code], index) => (
//                                 <div key={index} className="relative p-4 md:p-6 bg-white rounded-lg shadow-lg border-l-4 border-indigo-600 hover:border-indigo-800 transition duration-200">
//                                     <div className="flex items-center space-x-3 mb-4">
//                                         <FaCode className="text-indigo-600 text-2xl" />
//                                         <h2 className="text-lg md:text-2xl font-extrabold text-gray-800">{'💻 '}{skill} Code</h2>
//                                     </div>
//                                     <pre className="bg-gray-100 p-4 rounded-lg shadow-inner text-sm md:text-base text-gray-900 whitespace-pre-wrap">
//                                         {code}
//                                     </pre>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="mt-4 text-gray-700 text-center">No code available.</p>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Code;


import React, { useState } from 'react';
import axios from 'axios';
import { FaCode } from 'react-icons/fa'; // Importing a code icon for design
import '../index.css'

function Code() {
    const [skills, setSkills] = useState('');
    const [generatedCode, setGeneratedCode] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerateCode = async () => {
        const skillsArray = skills.split(',').map(skill => skill.trim()).filter(skill => skill);

        if (skillsArray.length === 0) {
            alert('Please enter at least one skill.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/code/generate-code', {
                skills: skillsArray
            });
            setGeneratedCode(response.data.generatedCode);
        } catch (err) {
            console.error('Error generating code:', err);
            setError('An error occurred while generating code.');
            setGeneratedCode(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative bg-white min-h-screen flex flex-col items-center justify-start py-10 w-6xl">
            {/* Input and Button Section */}
            <div className="relative w-full flex flex-col items-center p-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg shadow-2xl overflow-hidden mt-20 clip-path-custom">
    {/* Blob Top Left */}
    <div className="absolute top-0 left-0">
        <svg className="h-64 w-64 text-white opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M54.9,-51.2C69.5,-36.4,76.9,-18.2,76.8,0.3C76.7,18.7,69,37.4,54.4,50.9C39.7,64.5,18.1,72.9,-0.6,73.5C-19.3,74.1,-38.5,66.9,-53,54.5C-67.4,42,-77.1,24.4,-76.3,7C-75.4,-10.4,-64.1,-26.7,-50,-41C-35.9,-55.2,-18,-67.3,0.7,-67.5C19.5,-67.7,39,-55.9,54.9,-51.2Z" transform="translate(100 100)" />
        </svg>
    </div>

    {/* Content Section */}
    <div className="relative z-10 w-full text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-4xl font-extrabold mb-4 animate-fadeInDown">
        Master Your Coding Skills: Elevate Your Career and Become a Developer of Tomorrow!
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-6 animate-fadeInUp">
        Just specify your programming language and the code you need, and let the magic happen!
        </p>
        <button 
            className="bg-white text-blue-400 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-200 font-serif transition duration-300 transform hover:scale-105 focus:outline-none animate-bounce"
        >
            Start <span className='text-teal-400'>Coding</span>
        </button>
    </div>

    {/* Blob Top Right */}
    <div className="absolute top-0 right-0">
        <svg className="h-64 w-64 text-white opacity-30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M54.9,-51.2C69.5,-36.4,76.9,-18.2,76.8,0.3C76.7,18.7,69,37.4,54.4,50.9C39.7,64.5,18.1,72.9,-0.6,73.5C-19.3,74.1,-38.5,66.9,-53,54.5C-67.4,42,-77.1,24.4,-76.3,7C-75.4,-10.4,-64.1,-26.7,-50,-41C-35.9,-55.2,-18,-67.3,0.7,-67.5C19.5,-67.7,39,-55.9,54.9,-51.2Z" transform="translate(100 100)" />
        </svg>
    </div>
</div>



            
            {/* text area section */}

            
            <div className='mt-10'>
                <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="Enter programming language and the code you need ...)"
                    className="w-full p-4 mb-4 border border-transparent rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                />
                <button 
                    onClick={handleGenerateCode}
                    className="w-full bg-gradient-to-r from-teal-300 to-blue-400 text-gray-800 py-4 rounded-lg shadow-md hover:bg-gradient-to-r from-teal-500 to-blue-600 focus:outline-none transition duration-300 ease-in-out"
                >
                    {loading ? 'Generating...' : 'Generate Code'}
                </button>

                {error && <div className="mt-4 text-red-300 text-center">{error}</div>}
            </div>

           {/* Generated Code Section */}
<div className="w-full max-w-8xl bg-gray-50 shadow-lg rounded-lg p-4 md:p-6 lg:p-8 mt-8 font-serif">
    {loading ? (
        <p className="text-xl text-gray-700 text-center font-serif">Loading...</p>
    ) : (
        <div id="resultContainer" className="space-y-8 font-serif">
            {generatedCode ? (
                Object.entries(generatedCode).map(([skill, code], index) => (
                    <div 
                        key={index} 
                        className="relative p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-lg border-l-4 border-indigo-600 hover:border-indigo-800 transition duration-200 font-serif"
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-3 mb-4">
                            <FaCode className="text-indigo-600 text-2xl font-serif" />
                            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 font-serif">
                                {'💻 '}{skill} Code
                            </h2>
                        </div>
                        <pre className="bg-gray-100 p-4 font-serif rounded-lg shadow-inner text-sm sm:text-base md:text-lg text-gray-900 whitespace-pre-wrap overflow-x-auto">
                            {code.replace(/\*\*/g, '')}
                        </pre>
                    </div>
                ))
            ) : (
                <p className="mt-4 text-gray-700 text-center font-serif">Your Code will be Generated here...</p>
            )}
        </div>
    )}
</div>

        </div>
    );
}

export default Code;
