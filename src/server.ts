import express, { request, response } from 'express';

const app = express();

/**
 * GET => Get info
 * POST => Insert info
 * PUT => Change info
 * DELETE => Delete info
 * PATCH => Change specific info
 */

app.get('/test', (request, response)=> {
  // Request => In
  // Response => Out
  return response.send("Hello World GET!")
});

app.post('/test-post', (request, response)=> {
  return response.send("Hello World POST!")
});

// http://localhost:3000
app.listen(3000, ()=> console.log('Server is running'));