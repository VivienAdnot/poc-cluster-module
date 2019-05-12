const express = require("express");
const debug = require("debug")("me:server");
const app = express();
const { fork } = require("child_process");

let counter = 0;

app.get("/compute", (req, res) => {
  debug("start route %s", counter);

  const compute = fork("childProcess/slow-server/compute.js");
  compute.send(counter);

  counter++;

  compute.on("message", countEnd => {
    debug("route %s end", countEnd);
    res.end(`end`);
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
