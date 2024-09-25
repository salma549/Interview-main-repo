// const express = require('express');
// const cors = require('cors');
// const { GoogleGenerativeAI } = require('@google/generative-ai');

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// // Initialize the Google Generative AI with your API key
// const genAI = new GoogleGenerativeAI("AIzaSyB-GRBEsB4XCpUaJTt1-lQwGYZvZIyRV-M");

// // Route for generating interview questions based on skills entered by the user
// app.post('/generate-questions', async (req, res) => {
//     const { skills } = req.body;

//     if (!skills || !Array.isArray(skills) || skills.length === 0) {
//         return res.status(400).send('Skills are required and should be an array.');
//     }

//     const questions = {};

//     for (const skill of skills) {
//         const prompt = `Generate at least 20 interview questions for the skill ${skill}. Include questions suitable for beginners, advanced professionals, and experienced candidates. Additionally, provide appropriate answers for each question.`;

//         try {
//             // Use the generative model to get content based on the prompt
//             const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//             const result = await model.generateContent(prompt);
//             const response = await result.response.text();

//             // Split response into questions and answers and structure the output
//             const questionAnswerPairs = response.split('\n\n').map((pair) => {
//                 const [question] = pair.split('\nAnswer:');
//                 return {
//                     question: question ? question.trim() : 'No question available',
                  
//                 };
//             });

//             questions[skill] = questionAnswerPairs;
//         } catch (error) {
//             console.error(`Error generating questions for ${skill}:`, error);
//             questions[skill] = [{ question: 'Error generating question' }];
//         }
//     }

//     res.json({ questions });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });



const express = require('express');

const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const router = express.Router();


// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI("AIzaSyB-GRBEsB4XCpUaJTt1-lQwGYZvZIyRV-M");

// Route for generating interview questions based on skills entered by the user
router.post('/generate-questions', async (req, res) => {
    const { skills } = req.body;

    if (!skills || !Array.isArray(skills) || skills.length === 0) {
        return res.status(400).send('Skills are required and should be an array.');
    }

    const questions = {};

    for (const skill of skills) {
        const prompt = `Generate at least 20 interview questions for the skill ${skill}. Include questions suitable for beginners, advanced professionals, and experienced candidates. Additionally, provide appropriate answers for each question.`;

        try {
            // Use the generative model to get content based on the prompt
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent(prompt);
            const response = await result.response.text();

            // Split response into questions and answers and structure the output
            const questionAnswerPairs = response.split('\n\n').map((pair) => {
                const [question] = pair.split('\nAnswer:');
                return {
                    question: question ? question.trim() : 'No question available',
                  
                };
            });

            questions[skill] = questionAnswerPairs;
        } catch (error) {
            console.error(`Error generating questions for ${skill}:`, error);
            questions[skill] = [{ question: 'Error generating question' }];
        }
    }

    res.json({ questions });
});

module.exports = router;
