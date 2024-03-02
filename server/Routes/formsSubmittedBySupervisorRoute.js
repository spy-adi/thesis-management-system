const router = require("express").Router();
const {
    addFsbs,
    getAllFsbs,
    getOneFsbs,
    updateFsbs,
    deleteFsbs,
    uploadFiles
} = require("../controllers/formsSubmittedBySupervisorController");
const auth = require("../middleware/auth")

router.post("/addFsbs",auth,addFsbs);
router.get("/getAllFsbs",auth,getAllFsbs);

router.get("/:id",auth,getOneFsbs);
router.put("/:supervisorId/:scholarAdmn",auth, uploadFiles, updateFsbs);
router.delete("/:id",auth,deleteFsbs);

module.exports = router;