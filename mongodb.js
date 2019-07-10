// CRUD operations to manage data successfully (create, update, delete)

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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

    // db.collection("users").insertOne(
    //   {
    //     name: "Andrew",
    //     age: 27
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28
    //     },
    //     {
    //       name: "Ahmad",
    //       age: 26
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    /**
     * Goal: Insert 3 tasks into a new tasks collection
     */

    db.collection("tasks").insertMany(
      [
        {
          description: "Clean the house",
          completed: true
        },
        {
          description: "Renew Licence",
          completed: false
        },
        {
          description: "Clean garden",
          completed: false
        }
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert tasks");
        }
        console.log(result.ops);
      }
    );
  }
);
