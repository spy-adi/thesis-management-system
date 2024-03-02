const router = require("express").Router();
const {
    addFR,
    getAllFR,
    getOneFR,
    getFR,
    updateFR,
    deleteFR
} = require("../controllers/forumReplyController");
const auth = require("../middleware/auth")

router.post("/addFR",auth,addFR);
router.get("/getAllFR",auth,getAllFR);
router.get("/thread/:id",auth,getFR);

router.get("/:id",auth,getOneFR);
router.put("/:id",auth,updateFR);
router.delete("/:id",auth,deleteFR);

module.exports = router;