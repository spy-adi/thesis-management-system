const router = require("express").Router();
const {
    addSA,
    getAllSA,
    getOneSA,
    updateSA,
    deleteSA
} = require("../controllers/supervisorAllocationController");
const auth = require("../middleware/auth")

router.post("/addSA",auth,addSA);
router.get("/getAllSA",auth,getAllSA);

router.get("/:id",auth,getOneSA);
router.put("/:id",auth,updateSA);
router.delete("/:id",auth,deleteSA);

module.exports = router;