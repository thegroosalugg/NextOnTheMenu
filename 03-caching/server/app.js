import express from 'express';

const app = express();

app.get('/messages', (req, res) => {
  const requestSource = req.headers['x-id'];
  console.log(`${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`);
  res.json([
    { id: 1, text: 'Hudson River' },
    { id: 2, text: 'Two years ago' },
  ]);
});

app.listen(8080, () => console.log('[server connected]'));
