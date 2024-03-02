const router = require("express").Router();
const {
    addCe_Rep,
    getAllCe_Rep,
    getOneCe_Rep,
    updateCe_Rep,
    deleteCe_Rep,
    uploadFile
} = require("../controllers/ce_repController");

router.post("/addCeRep", uploadFile, addCe_Rep);
router.get("/getAllCeRep",getAllCe_Rep);

router.get("/:id",getOneCe_Rep);
router.put("/:id", uploadFile, updateCe_Rep);
router.delete("/:id",deleteCe_Rep);

module.exports = router;