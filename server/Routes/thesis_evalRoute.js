const router = require("express").Router();
const {
    addThesis_Eval,
    getAllThesis_Eval,
    getOneThesis_Eval,
    updateThesis_Eval,
    deleteThesis_Eval,
    uploadFiles
} = require("../controllers/thesis_evalController");

router.post("/addThesisEval", uploadFiles, addThesis_Eval);
router.get("/getAllThesisEval",getAllThesis_Eval);

router.get("/:id",getOneThesis_Eval);
router.put("/:id",updateThesis_Eval);
router.delete("/:id",deleteThesis_Eval);

module.exports = router;