// CRUD operations to manage data successfully (create, read, update, delete)

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// write it like this so we can generate our own IDs
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";

const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    //fetching data out of datbase by name
    // db.collection("users").findOne({ name: "Jen" }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to fetch");
    //   }
    //   console.log(user);
    // });

    // fetching by _id
    // db.collection("users").findOne(
    //   { _id: new ObjectID("5d2530a1bfd82105c8b0ae55") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    //fetching multiple documents
    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 27 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    //fetching a task by _id
    db.collection("tasks").findOne(
      { _id: new ObjectID("5d25330e9e4deb05ecd84681") },
      (error, task) => {
        console.log(task);
      }
    );

    // finding all the tasks that need to be done still
    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
