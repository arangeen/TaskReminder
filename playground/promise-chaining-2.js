/**
 * Goal: Mess around with promise chaining
 *
 *    - create promise-chaining-2.js
 *    - load in mongoose and task model
 *    - remove a given task by Id
 *    - Get and print the total number of incomplete tasks
 *    - test work
 */

require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5d3f85e1787878162b6f024b")
  .then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
