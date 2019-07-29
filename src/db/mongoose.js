const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

/**
 * that was our very first REST API route.
 *  - the route for creating a new user
 *  - we sent data via HTTP request off to the
 *      express server
 *  - using the predefined operation app.post()
 *      we were able to create a user in the database
 */
