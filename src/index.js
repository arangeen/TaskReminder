// starting point for application
const express = require("express");
require("./db/mongoose");
//load user in
const User = require("./models/user");
const Task = require("./models/task");

const app = express();

// to get app working on heroku
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

/**
 * Goal: Setup the task creation endpoint
 *  - creat a separate file for the task model (load it into index.js)
 *  - create the task creation endpoint (handle success and error )
 *  - test the endpoint from postman with good and bad data
 */

app.listen(port, () => {
  console.log("Server is on port " + port);
});
