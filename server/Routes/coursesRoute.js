const router = require("express").Router();
const {
    addCourse,
    getAllCourse,
    getOneCourse,
    updateCourse,
    deleteCourse,
    uploadFile
} = require("../controllers/coursesController");

router.post("/addCourse", uploadFile, addCourse);
router.get("/getAllCourses",getAllCourse);

router.get("/:id",getOneCourse);
router.put("/:id", uploadFile, updateCourse);
router.delete("/:id",deleteCourse);

module.exports = router;