const router = require("express").Router();
const {
    addPss_Rep,
    getAllPss_Rep,
    getOnePss_Rep,
    updatePss_Rep,
    deletePss_Rep
} = require("../controllers/pss_repController");

router.post("/addPssRep",addPss_Rep);
router.get("/getAllPssRep",getAllPss_Rep);

router.get("/:id",getOnePss_Rep);
router.put("/:id",updatePss_Rep);
router.delete("/:id",deletePss_Rep);

module.exports = router;