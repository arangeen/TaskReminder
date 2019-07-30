require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5d3f85e1787878162b6f024b")
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5d3f8561d55e3f1621b9f242")
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
/**
 * Goal: use Async/Await
 *    - Create deleteTaskAndCount as an async function
 *        -accept id of task to remove
 *    - Use await to delete task and count up incomplete tasks
 *    - return the count
 *    - call the function and attach then/catch to log results
 *    - test work
 */
