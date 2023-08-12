import express from 'express'; // Import 'express' using ES module syntax

const app = express();

app.get('/service-worker.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript'); // Set the correct MIME type
  // Serve your service worker script here
});

// Other route handlers

app.listen(1234, () => {
  console.log('Server is running on port 1234');
});
