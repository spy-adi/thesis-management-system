const router = require('express').Router();
const {
    addRequest,
    getAllRequests,
    checkRequest,
    uploadFile
} = require('../controllers/courseWaiverRequestsController');

router.post('/add', uploadFile, addRequest);

router.get('/getAll', getAllRequests);

router.get('/check/:scholarId/:session/:semester', checkRequest);

module.exports = router;