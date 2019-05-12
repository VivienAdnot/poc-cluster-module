const debug = require("debug")("me:compute");

const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
};

debug("child spawn: %s", process.pid);

process.on("message", counter => {
  debug("child %s received message, start longComputation", process.pid);

  longComputation();
  const message = `${counter}:${process.pid} end longComputation`;
  process.send(message);
});
