const { spawn } = require("child_process");

const child = spawn("wc");

process.stdin.pipe(child.stdin);

child.stdout.on("data", data => {
  console.log(`child stdout:\n${data}`);
});

// to use:
// 1 - type something
// 2 - press ctrl + d
