import express from 'express';

const app = express();

app.get('/users', (req, res) => res.send('Hello World'));

app.post('/post', (req, res) =>
  res.json({ message: 'Data received successfuly' })
);

app.listen(3333, () => {
  console.log('Server is running!');
});
