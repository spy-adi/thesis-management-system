const router = require("express").Router();
const { getSemCoursework } = require("../controllers/courseworkController");

router.get("/:admn/:session/:sem", getSemCoursework);

module.exports = router;