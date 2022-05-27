const express = require("express");

const port = 9001;
const app = express();

app.use(express.static(`public`));

app.get("/", (req, res) => {
  res.statusCode(200);
  res.sendFile(index.html);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
