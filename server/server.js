const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 4006;

app.listen(port, () => {
    console.log(`Up and running on port ${port}.`);
});