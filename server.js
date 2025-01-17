const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(8080, () => {
  console.log(`Server running at http://localhost:${8080}/`);
});

app.get("/", (요청, 응답) => {
  응답.send("반갑다");
});

app.get("/news", (요청, 응답) => {
  응답.sendFile(__dirname + "/index.html");
});
app.get("/shop", (요청, 응답) => {
  응답.send("쇼핑페이지임");
});
app.get("/about", (요청, 응답) => {
  응답.sendFile(__dirname + "/aboutme.html");
});
