import 'dotenv/config';

import express from 'express';

import { getUsers } from './users.mjs';

const app = express();

const port = process.env.PORT ?? 3000;

app.set('view engine', 'pug');

app.get('/users', async (req, res, next) => {
  res.locals.users = await getUsers();

  res.status(200).render('users');
});

app.listen(port, () => {
  console.clear();
  console.log(`Listening on port ${port}...`);
});
