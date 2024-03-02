const router = require('express').Router();
const {
    addRequest,
    getAllRequests,
    getOneRequest,
    updateRequest,
    deleteRequest,
    uploadFile
} = require('../controllers/pssRequestsController');

router.post("/add", uploadFile, addRequest);
router.get("/getAll", getAllRequests);

router.get("/:id", getOneRequest);
router.put("/:id", uploadFile, updateRequest);
router.delete("/:id", deleteRequest);

module.exports = router;