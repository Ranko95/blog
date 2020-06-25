const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post('http://posts-clusterip-srv:4000/events', event);
  axios.post('http://comments-clusterip-srv:4001/events', event);
  axios.post('http://query-clusterip-depl:4002/events', event);
  axios.post('http://moderation-clusterip-depl:4003/events', event);

  res.send({ status: 'OK' });
});

app.get('/events', (req,res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
