const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "public");
app.use(express.static(public));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.get("/", function (req, res) {
  res.sendFile(path.join(public, "index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(public, "about.html"));
});
app.get("/info", function (req, res) {
  res.sendFile(path.join(public, "information.html"));
});
app.get("/contact", function (req, res) {
  res.sendFile(path.join(public, "contact.html"));
});

app.use(function (req, res) {
  res.status(404);
  res.send("Oops! We didn't find what you are looking for.");
});

app.listen(3000, () => {
  console.log("Server started on port 3000. Ctrl^c to quit.");
});
