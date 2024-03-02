const router = require("express").Router();
const { body } = require('express-validator');
const {
    addScholar,
    getAllScholars,
    getOneScholar,
    updateScholar,
    deleteScholar,
    uploadImage,
    getSomeScholars
} = require("../controllers/scholarController");

router.post("/addScholar",
uploadImage,
body("admn","Please enter a admission number").not().isEmpty(),
body("name","Please enter a name").not().isEmpty(),
body("email","Please enter a valid email").isEmail(),
body("password","Please enter a password of min 6 characters").isLength({min: 6}),
addScholar);

router.post('/uploadImage', uploadImage, async (req, res) => {
    console.log("here");
    res.status(200).json({filepath: req.file.path});
});

router.get("/getAllScholars",getAllScholars);
router.get("/:profId/:current_semester/:current_session", getSomeScholars);
router.get("/:admn",getOneScholar);
router.put("/:admn", uploadImage, updateScholar);
router.delete("/:admn",deleteScholar);

module.exports = router;
