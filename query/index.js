const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  switch (type) {
    case 'PostCreated':
      const { id, title } = data;
      posts[id] = { id, title, comments: [] };

      break;

    case 'CommentCreated':
      const commentId = data.id;
      const { content, postId } = data;

      const post = posts[postId];
      post.comments.push({ commentId, content });

      break;
  
    default:
      break;
  }
  
  res.send({});
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
