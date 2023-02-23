const parser = require('body-parser');  
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors()); // Enable CORS for all routes
app.use(parser.json());
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});





