require("../src/db/mongoose");
const User = require("../src/models/user");

// 5d37a580e2e5d80a6eb05cbb

// User.findByIdAndUpdate("5d3f7d1e917eb11576e8e432", { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// Async-Await

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5d3f7d1e917eb11576e8e432", 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
