import express from 'express';
const app = express();

app.get('/', (re, res) => {
  res.status(200).send('Hello from Acquisations');
});

export default app;
