const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0'); // Ensure two-digit format
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const currentTime = `${hours}:${minutes}:${seconds}`;
  res.send(currentTime);
});

const port = process.env.PORT || 3000; // Use environment variable for flexibility

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
