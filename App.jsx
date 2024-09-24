
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [skills, setSkills] = useState('');
    const [questions, setQuestions] = useState('');
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
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSkills(response.data.skills.join(', ')); // Join skills into a string
            setQuestions(JSON.stringify(response.data.questions, null, 2)); // Format questions for display
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading or parsing the file');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Resume Skill Extractor</h1>
            <input type="file" accept=".pdf" onChange={onFileChange} />
            <button onClick={onFileUpload}>Upload and Extract Skills</button>
            {loading ? <p>Loading...</p> : (
                <>
                    <h2>Extracted Skills:</h2>
                    <pre>{skills}</pre>
                    <h2>Generated Interview Questions:</h2>
                    <pre>{questions}</pre>
                </>
            )}
        </div>
    );
}

export default App;

