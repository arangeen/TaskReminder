// CRUD operations to manage data successfully (create, read, update, delete)

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// destructuring above 3 line code to write it like this
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id.id.length);
// // console.log(id.getTimestamp());
// console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    // console.log("Connected correxctly");
    const db = client.db(databaseName);

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

// db.collection("users").insertOne(
//     {
//       //_id: id,
//       name: "Vikram",
//       age: 26
//     },
//     (error, result) => {
//       if (error) {
//         return console.log("Unable to insert user");
//       }
//       console.log(result.ops);
//     }
//   );

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
//     [
//       {
//         name: "Jen",
//         age: 28
//       },
//       {
//         name: "Gunther",
//         age: 27
//       }
//     ],
//     (error, result) => {
//       if (error) {
//         return console.log("Unable to connect to insert documents!");
//       }

//       console.log(result.ops);
//     }
//   );

// db.collection("tasks").insertMany(
//     [
//       {
//         description: "Clean the house",
//         completed: true
//       },
//       {
//         description: "Renew inspection",
//         completed: false
//       },
//       {
//         description: "Pot plants",
//         completed: false
//       }
//     ],
//     (error, result) => {
//       if (error) {
//         return console.log("Unable to connect to insert Tasks!");
//       }

//       console.log(result.ops);
//     }
//   );

//   //update all false tasks to true
//   db.collection("tasks")
//   .updateMany(
//     {
//       completed: false
//     },
//     {
//       $set: {
//         completed: true
//       }
//     }
//   )
//   .then(result => {
//     console.log(result.modifiedCount);
//   })
//   .catch(error => {
//     console.log(error);
//   });
