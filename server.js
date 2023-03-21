
const express = require('express')
const app = express()
const mongoose =require ('mongoose')
const bodyparser= require('body-parser')
const port = 3000

import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const studentSchema = new mongoose.Schema({
    roll_no: Number,
    name: String,
    year: Number,
    subjects: [String]
});

const stud = new Student({
    roll_no: 1001,
    name: 'Madison Hyde',
    year: 3,
    subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
});
stud
    .save()
    .then(
        () => console.log("One entry added"), 
        (err) => console.log(err)
    );


    app.get('/', (req, res) => {
        Student.find({}, (err, found) => {
            if (!err) {
                res.send(found);
            }
            console.log(err);
            res.send("Some error occured!")
        }).catch(err => console.log("Error occured, " + err));
    });