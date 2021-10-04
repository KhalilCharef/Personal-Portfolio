const express = require("express");
const path = require("path");

const Home = require("./views/Home");
const app = express();
const port = 5000;

app.use(express.static("public"));

// app.get("*", (req, res) => {
//   res.send("hello");
// });
app.use("/home", Home);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
