import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.end('Responding...');
});

app.listen('8080', () => {console.log('Server is listening at: localhost:8080/graphql')})
