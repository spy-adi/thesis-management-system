const router = require("express").Router();
const {
    addRps_Rep,
    getAllRps_Rep,
    getOneRps_Rep,
    updateRps_Rep,
    deleteRps_Rep
} = require("../controllers/rps_repController");

router.post("/addRpsRep",addRps_Rep);
router.get("/getAllRpsRep",getAllRps_Rep);

router.get("/:id",getOneRps_Rep);
router.put("/:id",updateRps_Rep);
router.delete("/:id",deleteRps_Rep);

module.exports = router;