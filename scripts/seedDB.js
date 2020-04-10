const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/employeedirectory"
);

const employeeSeed = [
    {
        name: "Moses Palacios",
        department: "Executive",
        role: "The Boss",
        email: "boss@company.com"
    },
    {
        name: "Joe Montana",
        department: "Operations",
        role: "The Visionary",
        email: "visionary@company.com"
    },
    {
        name: "Cal Ripken",
        department: "Maintenance",
        role: "The Workhorse",
        email: "workhorse@company.com"
    },
    {
        name: "Charles Barkely",
        department: "Communications",
        role: "The Yapper",
        email: "yapper@company.com"
    },
    {
        name: "Mia Hamm",
        department: "Membership",
        role: "The Unifier",
        email: "unifier@company.com"
    },
    {
        name: "Serena Williams",
        department: "Events and Conferences",
        role: "The Social Butterfly",
        email: "butterfly@company.com"
    },
    {
        name: "Lebron James",
        department: "IT",
        role: "The Networker",
        email: "networker@company.com"
    }
];

db.Employee
    .remove({})
    .then(() => db.Employee.collection.insertMany(employeeSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
      });