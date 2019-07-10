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

    //deleteing all users with age 28
    // db.collection("users")
    //   .deleteMany({
    //     age: 28
    //   })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    /**
     * Goal: use deleteOne to remove a task
     */
    db.collection("tasks")
      .deleteOne({
        description: "Clean the house"
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
