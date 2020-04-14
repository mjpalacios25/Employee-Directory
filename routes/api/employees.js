const router = require("express").Router();
const employeeController = require("../../controllers/EmployeeController");

router.route("/")
    .get(employeeController.findAll)
    .post(employeeController.create)


router.route("/:id")
    .get(employeeController.findbyID)
    .delete(employeeController.remove);
//ask about this... only worked when i added employees/department here and employyes/employees/department in the api call
router.route("/sort/department")
    .get(employeeController.sortbyDept)

module.exports = router;