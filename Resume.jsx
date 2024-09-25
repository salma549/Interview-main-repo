
import React, { useState } from 'react';
import axios from 'axios';

function Resume() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [skills, setSkills] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const onFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const onFileUpload = async () => {
        if (!selectedFile) {
            alert('Please upload a file');
            return;
        }

        const formData = new FormData();
        formData.append('resume', selectedFile);

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:5000/resume/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSkills(response.data.skills.join(', ')); // Join skills into a string
            setQuestions(response.data.questions); // Use raw questions
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading or parsing the file');
        } finally {
            setLoading(false);
        }
    };

    const formatText = (text) => {
        if (!text) return '';  // Ensure `text` is a string, if not return an empty string
        return text
            .replace(/\*\*/g, '')  // Remove all occurrences of '**'
            .replace(/#/g, '')     // Remove all occurrences of '#'
            .replace(/\n/g, '');  // Replace '\n' with line breaks (if needed)
    };

    return (
        <div className="App min-h-screen bg-gray-50 p-6 flex flex-col items-center mt-36">
            <h1 className="text-4xl font-bold mb-6 text-blue-600">Resume Skill Extractor</h1>

            <input
                type="file"
                accept=".pdf"
                onChange={onFileChange}
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <button
                onClick={onFileUpload}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
                Upload and Extract Skills
            </button>

            {loading ? (
                <p className="mt-6 text-xl text-gray-700">Loading...</p>
            ) : (
                <>
                    <div className="mt-6 w-full max-w-full">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Extracted Skills:</h2>
                        <pre className="bg-white p-4 rounded shadow text-gray-800">{skills}</pre>

                        {questions && Object.keys(questions).length > 0 ? (
                            <div className="bg-white p-4 rounded shadow mt-6">
                                <h2 className="text-2xl font-semibold text-blue-600 mb-2">Generated Interview Questions:</h2>
                                {Object.keys(questions).map((skill, index) => (
                                    <div key={index} className="mb-6">
                                        <h3 className="text-xl font-bold text-green-700 mb-2">{skill}</h3>
                                        <ul className="space-y-4">
                                            {questions[skill].map((qa, idx) => (
                                                <li key={idx} className="border-b border-gray-200 pb-4">
                                                    <p className="text-lg text-gray-900 font-medium">
                                                        Q: {qa.question ? formatText(qa.question) : 'No question available'} {/* Check if `qa.question` exists */}
                                                    </p>
                                                  
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="mt-4 text-gray-700">No questions available.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Resume;
