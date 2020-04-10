const router = require("express").Router();
const employeeController = require("../../controllers/EmployeeController");

router.route("/")
    .get(employeeController.findAll)
    .post(employeeController.create);

router.route("/:id")
    .get(employeeController.findbyID)
    .delete(employeeController.remove)
