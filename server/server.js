// Create server
const express = require('express');
const app = express();
const server = require('http').createServer(app);

// Link to static file
const path = require('path');
app.use('/page/asset', express.static(path.join(__dirname, '../dist/asset')));
app.use('/asset', express.static(path.join(__dirname, '../dist/asset')));



// Load env file
require('dotenv').config();

// Route to each file
const Page = require('./components/Page/Page.component');

app.use('/page', Page);
app.get('/', (req, res) => {
  res.send('Server is running.');
});

// Not Found Page
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: `API_NOT_FOUND`,
  })
});

const PORT = process.env.PORT || 55555;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
