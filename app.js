const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(`public`));

app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/")
);

app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
