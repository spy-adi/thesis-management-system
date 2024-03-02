const router = require("express").Router();
const { body } = require('express-validator');
const {
    addExaminer,
    getAllExaminer,
    getOneExaminer,
    updateExaminer,
    deleteExaminer,
    uploadImage
} = require("../controllers/examinersController");

router.post("/addExaminer",
uploadImage,
body("examinerId","Please enter a examiner id").not().isEmpty(),
body("name","Please enter a name").not().isEmpty(),
body("email","Please enter a valid email").isEmail(),
body("password","Please enter a password of min 6 characters").isLength({min: 6})
,addExaminer);
router.get("/getAllExaminer",getAllExaminer);

router.get("/:id",getOneExaminer);
router.post("/:id",uploadImage,updateExaminer);
router.delete("/:id",deleteExaminer);

module.exports = router;