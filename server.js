const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'reportbuilder.html'));
});

app.get('/removals', (req, res) => {
    res.sendFile(path.join(__dirname, 'removals.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Report Builder: http://localhost:${PORT}/`);
    console.log(`Removals Tracker: http://localhost:${PORT}/removals`);
});