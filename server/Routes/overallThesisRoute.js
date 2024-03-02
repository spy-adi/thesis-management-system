const router = require("express").Router();
const {
    addRequest,
    uploadFile
} = require("../controllers/overallThesisController");

router.post("/add", uploadFile, addRequest);

module.exports = router;