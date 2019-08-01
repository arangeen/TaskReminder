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

app.listen(port, () => {
  console.log("Server is on port " + port);
});

// used for hashing passwords
const bcrypt = require("bcryptjs");

const myFunction = async () => {
  const password = "Red12345!";
  // 8 is the number of times we want password to be hashed
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("Red12345!", hashedPassword);
  console.log(isMatch);
};

myFunction();
