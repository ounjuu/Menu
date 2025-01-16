const express = require("express");
const app = express();

app.listen(8088, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${8088}/`);
});

app.get("/", (요청, 응답) => {
  응답.send("반갑다");
});
