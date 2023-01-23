const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
const routes = require('./routes');

app.use(cors());

// Parsers for POST data
app.use(express.json({ limit: '100mb', extended: false }));
app.use(express.urlencoded({ limit: '100mb', extended: false }));

// console requested data
app.use((req, res, next) => {
  // can add custome middleware
  // console.log('body', req.body);
  next();
});

// API location
app.use('/health', routes.healthRoutes);
app.use('/', routes.authRoutes);

// return error when no one route match.
app.use((req, res) => {
  res.status(404).json({
    errors: {
      global:
          'Still working on it. Please try again later when we implement it',
    },
  });
});

const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`=> SERVER running on localhost:${port}`);
});
