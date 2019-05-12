const express = require('express');
const bodyParser = require('body-parser');
const eloRoutes = require('./elo');

const app = express();
const port = process.env.PORT || 8082;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', eloRoutes);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
