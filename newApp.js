const express = require('express');
const app = express();
const resumeRoutes = require('./resume');
const dsaRoutes = require('./dsa')
const codeRoutes = require('./code')
const reactRoutes = require('./react')
const cors = require('cors');

app.use(express.json());
app.use(cors()); 
app.use('/resume', resumeRoutes); 
app.use('/dsa', dsaRoutes)
app.use('/code', codeRoutes)
app.use('/react',reactRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
