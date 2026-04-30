const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Pehla "Test" rasta (Route)
app.get('/', (req, res) => {
    res.send('Fitness Tracker API is working perfectly!');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});