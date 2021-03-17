const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const profile = require("./profile.json");
const generateTrashWords = require("./generate_trash_words");

const app = express();
const port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", {profile : profile.results});
});

app.post("/", (req, res) => {
  const options = req.body;
  res.render("index", {
  trashWords: generateTrashWords(options),
  options: options,
  profile: profile.results,
  });

});

app.listen(port, () => {
  console.log(`Express app listening on localhost:${port}.`);
});
