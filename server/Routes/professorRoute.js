const router = require("express").Router();
const { body } = require('express-validator');
const {
    addProfessor,
    getAllProfessors,
    getOneProfessor,
    updateProfessor,
    deleteProfessor,
    getCeEligibleScholars,
    getRpsEligibleScholars,
    getPssEligibleScholars,
    uploadImage
} = require("../controllers/professorController");

router.post("/addProfessor",
uploadImage,
body("profId","Please enter a prof id").not().isEmpty(),
body("name","Please enter a name").not().isEmpty(),
body("email","Please enter a valid email").isEmail(),
body("password","Please enter a password of min 6 characters").isLength({min: 6})
,addProfessor);
router.get("/getAllProfessors",getAllProfessors);

router.get("/ceEligible/:id", getCeEligibleScholars);
router.get("/rpsEligible/:id", getRpsEligibleScholars);
router.get("/pssEligible/:id", getPssEligibleScholars);

router.get("/:id",getOneProfessor);
router.put("/:id", uploadImage, updateProfessor);
router.delete("/:id",deleteProfessor);

module.exports = router;