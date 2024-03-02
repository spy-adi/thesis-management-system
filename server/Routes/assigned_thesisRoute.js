const router = require("express").Router();
const {
    addAssigned_thesis,
    getAllAssigned_thesis,
    getOneAssigned_thesis,
    getOneAssigned_thesis_by_id,
    getOneAssigned_thesis_by_supervisor,
    updateAssigned_thesis,
    deleteAssigned_thesis
} = require("../controllers/assigned_thesisController");

router.post("/addAssignedThesis",addAssigned_thesis);
router.get("/getAllAssignedThesis",getAllAssigned_thesis);

router.get("/bySupervisor/:id",getOneAssigned_thesis_by_supervisor);
router.get("/byId/:id",getOneAssigned_thesis_by_id);
router.get("/:id",getOneAssigned_thesis);
router.put("/:id",updateAssigned_thesis);
router.delete("/:id",deleteAssigned_thesis);

module.exports = router;