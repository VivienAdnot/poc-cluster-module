const { spawn } = require("child_process");

const child = spawn("find . -type f | wc -l", {
  stdio: "inherit", // the child process inherits the main process stdin, stdout, and stderr
  shell: true
});
