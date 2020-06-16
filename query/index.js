const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/posts', (req, res) => {
});

app.post('/events', (req, res) => {
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
