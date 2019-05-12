const { fork } = require("child_process");

const forked = fork("childProcess/fork/child");

forked.on("message", msg => {
  console.log("Message from child", msg);
});

forked.send({ hello: "world" });
