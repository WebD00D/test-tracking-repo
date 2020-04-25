const router = require("express").Router();
const teacherController = require("../controllers/teacherController.js");
const childController = require("../controllers/childController.js");


router.route("/teachers").get(teacherController.findAll);

router.route("/teachers/:id").get(teacherController.findById);

router.route("/students").get(childController.findAll);

router.route("/students/:id").get(childController.findById);

router.route("/students/:id/:caregiver").put(childController.update);

module.exports = router;
