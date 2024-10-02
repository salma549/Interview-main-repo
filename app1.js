const express = require('express');
const app = express();
const resumeRoutes = require('./resume');
const dsaRoutes = require('./dsa')
const codeRoutes = require('./code')
const allRoutes = require('./all')
const editorRoutes = require('./codeEditor')
const bodyParser = require('body-parser');

const cors = require('cors');
app.use(bodyParser.json());

app.use(express.json());
app.use(cors()); 
app.use('/resume', resumeRoutes); 
app.use('/dsa', dsaRoutes)
app.use('/code', codeRoutes)
app.use('/all',allRoutes)
app.use('/editor',editorRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
