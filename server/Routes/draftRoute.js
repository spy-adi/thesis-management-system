const router = require("express").Router();
const path = require('path');
const {
    addDraft,
    getAllDraft,
    getAssignedThesis,
    getOneDraft,
    updateDraft,
    deleteDraft,
    uploadFile
} = require("../controllers/draftController");


router.post("/addDraft", uploadFile, addDraft);
router.put("/save/:admn", getAssignedThesis, uploadFile, addDraft);
router.get("/getAllDraft",getAllDraft);
router.get("/downloadFile/:file(*)", (req, res) => {
    console.log(path.resolve(`./${req.params.file}`));
    res.sendFile(path.resolve(`./${req.params.file}`));
});

router.get("/:id",getOneDraft);
router.put("/:id", uploadFile, updateDraft);
router.delete("/:id",deleteDraft);

module.exports = router;