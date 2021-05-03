const express = require("express");
var cors = require("cors");
const { newCard } = require("./services/card");
const { travel } = require("./services/travel");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  if (req.body.login === "test@test.com" && req.body.password === "123456") {
    res.json("Login successful!");
  } else {
    res.status(401).json("Username or password incorrect!");
  }
});

app.post("/card", (req, res) => {
  const card = newCard(req.body.userId, req.body.fare);
  res.status(201).json(card);
});

app.post("/", (req, res) => {
  const authorized = travel(req.body.userId, req.body.zone);
  authorized
    ? res.sendStatus(201)
    : res.status(401).send("Unauthorized travel");
});

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).json(err);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
