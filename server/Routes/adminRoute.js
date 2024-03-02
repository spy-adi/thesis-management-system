const router = require("express").Router();
const { body } = require('express-validator');
const {
    addAdmin,
    getAllAdmin,
    getOneAdmin,
    updateAdmin,
    deleteAdmin,
    uploadImage
} = require("../controllers/adminController");

router.post("/addAdmin",
uploadImage,
body("adminId","Please enter a admin id").not().isEmpty(),
body("name","Please enter a name").not().isEmpty(),
body("email","Please enter a valid email").isEmail(),
body("password","Please enter a password of min 6 characters").isLength({min: 6})
,addAdmin);
router.get("/getAllAdmin",getAllAdmin);

router.get("/:id",getOneAdmin);
router.put("/:id", uploadImage, updateAdmin);
router.delete("/:id",deleteAdmin);

module.exports = router;
