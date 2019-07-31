// starting point for application
const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

// to get app working on heroku
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

/**
 * Goal: Create user and task router
 *      - create new file that creates/exports new router
 *      - move all the routes over
 *      - load in and use that router with the express app
 */

app.listen(port, () => {
  console.log("Server is on port " + port);
});
