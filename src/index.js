// starting point for application
const express = require("express");
require("./db/mongoose");
//load user in
const User = require("./models/user");

const app = express();

// to get app working on heroku
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log("Server is on port " + port);
});
