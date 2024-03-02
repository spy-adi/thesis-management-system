const router = require("express").Router();
const {
    addThesis,
    getAllThesis,
    getOneThesis,
    updateThesis,
    deleteThesis
} = require("../controllers/thesisController");

router.post("/addThesis",addThesis);
router.get("/getAllThesis",getAllThesis);

router.get("/:id",getOneThesis);
router.put("/:id",updateThesis);
router.delete("/:id",deleteThesis);

module.exports = router;