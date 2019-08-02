// starting point for application
const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
// to get app working on heroku
const port = process.env.PORT || 3000;

// example of middleware function
// app.use((req, res, next) => {
//   if (req.method == "GET") {
//     res.send("Get requests are disabled");
//   } else {
//     // next lets express know that we are done with the middleware function
//     next();
//   }
// });

/**
 * Goal: Setup middleware for maintenance mode
 *  - register a new middleware function
 *  - send back a maintenance message with a 503 status code
 *  - try your requests from the servef and confifrm status/message shows
 */

app.use((req, res, next) => {
  res.status(503).send("Site is currently down. Check back soon");
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

/**
 *
 * without middleware: new request -> run route handler
 *
 * with middleware: new request => do something => run route handler
 */

app.listen(port, () => {
  console.log("Server is on port " + port);
});

// used for hashing passwords
const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
    expiresIn: "7 days"
  });
  console.log(token);
  const data = jwt.verify(token, "thisismynewcourse");
  console.log(data);
};

myFunction();
