const router = require("express").Router();
const employeeController = require("../../controllers/EmployeeController");

router.route("/")
    .get(employeeController.findAll)
    .post(employeeController.create)


router.route("/:id")
    .get(employeeController.findbyID)
    .delete(employeeController.remove);

router.route("/sort/department")
    .get(employeeController.sortbyDept);

router.route("/add/employee")
    .post(employeeController.create);

module.exports = router;