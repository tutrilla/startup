const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Simulate data storage
let requestsData = [];

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Number of requests
apiRouter.get('/requests', (req, res) => {
  console.log('Sending data:', requestsData);
  res.json(requestsData);
});

// API endpoint to create a request
apiRouter.post('/requests', (req, res) => {
  const newRequest = req.body;

  if (!newRequest) {
    return res.status(400).json({ error: 'Invalid request data'});
  }
  console.log('Recieving data:', newRequest);

  requestsData.push(newRequest);
  res.status(201).json(newRequest);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
