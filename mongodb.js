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

    // undating documents
    // switch someones name by targeting _id
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5d252dc972c41b05b2eb213e")
    //     },
    //     {
    //       $set: {
    //         name: "Mike"
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    /* incrementing age */
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5d252dc972c41b05b2eb213e")
    //     },
    //     {
    //       $inc: {
    //         age: 1
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    /**
     * Goal:  Use updateMany to complete all tasks
     */

    db.collection("tasks")
      .updateMany(
        {
          completed: false
        },
        {
          $set: {
            completed: true
          }
        }
      )
      .then(result => {
        console.log(result.modifiedCount);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
