const connectToMongo = require('./db.js');
const express = require('express');
var cors = require('cors')
const BASE_URL = process.env.BASE_URL

connectToMongo();

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

//Available Rautes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at ${BASE_URL}`);
});
