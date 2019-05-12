const http = require("http");
const pid = process.pid;
const numberOfUsersInDB = require("./db");

http
  .createServer((req, res) => {
    for (let i = 0; i < 1e7; i++); // simulate CPU work
    res.write(`Handled by process ${pid}\n`);
    res.end(`Users: ${numberOfUsersInDB()}`);
  })
  .listen(8080, () => {
    console.log(`Started process ${pid}`);
  });
