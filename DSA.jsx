import React, { useState } from 'react';
import axios from 'axios';


function DSA() {
    const [skills, setSkills] = useState('');
    const [questions, setQuestions] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Added loading state

    const handleGenerateQuestions = async () => {
        const skillsArray = skills.split(',').map(skill => skill.trim()).filter(skill => skill);

        if (skillsArray.length === 0) {
            alert('Please enter at least one skill.');
            return;
        }

        setLoading(true); // Set loading to true
        setError(''); // Clear previous errors

        try {
            const response = await axios.post('http://localhost:5000/dsa/generate-questions', {
                skills: skillsArray
            });
            setQuestions(response.data.questions);
        } catch (err) {
            console.error('Error generating questions:', err);
            setError('An error occurred while generating questions.');
            setQuestions(null);
        } finally {
            setLoading(false); // Set loading to false when done
        }
    };

    const formatText = (text) => {
        if (!text) return '';  // Ensure `text` is a string, if not return an empty string
        return text
            .replace(/\*\*/g, '')  // Remove all occurrences of '**'
            .replace(/#/g, '')     // Remove all occurrences of '#'
            .replace(/\n/g, '');  // Replace '\n' with line breaks
    };

    return (
        <div className="container mt-36">
            <h1>Interview Question Generator</h1>
            <input
                type='text'
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Enter skills separated by commas (e.g., JavaScript, Python, React)"
            />
            <button onClick={handleGenerateQuestions}>Generate Questions</button>
            {error && <div className="error">{error}</div>}
            {loading ? (
                <p className="mt-6 text-xl text-gray-700">Loading...</p>
            ) : (
                <div id="resultContainer">
                    {questions ? (
                        Object.entries(questions).map(([skill, pairs]) => (
                            <div key={skill}>
                                <h2>{skill}</h2>
                                {pairs.map((pair, index) => (
                                    <div key={index} className="question-pair">
                                        <strong>Question:</strong> {formatText(pair.question)}<br />
                                     
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p className="mt-4 text-gray-700">No questions available.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default DSA;
