const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index"); // index refers to index.ejs
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});