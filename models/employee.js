const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema ({
    name: {type: String, 
        trim: true, 
        required: true },
    department: {
        type: String,
        trim: true,
        required: true
    },
    role: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee