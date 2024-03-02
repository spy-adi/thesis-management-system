const router = require("express").Router();
const {
    addProgress_Report,
    getAllProgress_Report,
    getOneProgress_Report,
    updateProgress_Report,
    deleteProgress_Report
} = require("../controllers/progressReportController");

router.post("/addProgressReport",addProgress_Report);
router.get("/getAllProgressReports",getAllProgress_Report);

router.get("/:id",getOneProgress_Report);
router.put("/:id",updateProgress_Report);
router.delete("/:id",deleteProgress_Report);

module.exports = router;