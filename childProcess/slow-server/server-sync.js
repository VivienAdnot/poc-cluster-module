const express = require("express");
const debug = require("debug")("longComputation");
const app = express();

let counter = 0;

const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
};

app.get("/compute", (req, res) => {
  debug("booting longComputation %s", counter);
  counter++;
  const sum = longComputation();
  debug("end booting %s", counter);
  return res.end(`Sum is ${sum}`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
