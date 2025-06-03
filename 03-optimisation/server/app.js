import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());

const path = './server/data.json';

app.post('/new-message', (req, res) => {
  const { message } = req.body;
  const data = fs.readFileSync(path, 'utf8');
  const messages = data ? JSON.parse(data) : [];
  messages.unshift({ id: new Date().toISOString(), text: message });
  fs.writeFileSync(path, JSON.stringify(messages), (err) => console.log(err));
  res.status(201).json({ message: 'Success!' });
});

app.get('/messages', (req, res) => {
  const reqSource = req.headers['x-id'];
  console.log(
    `${new Date().toISOString()}: EXECUTING /messages on backend from ${reqSource || 'API'}`
  );
  const data = fs.readFileSync(path, 'utf8');
  const messages = data ? JSON.parse(data) : [];
  res.status(200).json(messages);
});

app.listen(8080, () => console.log('[server connected]'));
