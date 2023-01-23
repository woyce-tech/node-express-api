const express = require('express');
const cors = require('cors');
const http = require('http');


const app = express();
app.use(cors());

// Parsers for POST data
app.use(express.json({ limit: '100mb', extended: false }));
app.use(express.urlencoded({ limit: '100mb', extended: false }));

const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
    console.log(`=> SERVER running on localhost:${port}`); // eslint-disable-line
});