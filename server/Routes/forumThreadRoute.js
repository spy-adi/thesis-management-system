const router = require("express").Router();
const {
    addFT,
    getAllFT,
    getOneFT,
    updateFT,
    deleteFT
} = require("../controllers/forumThreadController");
const auth = require("../middleware/auth")

router.post("/addFT",auth,addFT);
router.get("/getAllFT",auth,getAllFT);

router.get("/:id",auth,getOneFT);
router.put("/:id",auth,updateFT);
router.delete("/:id",auth,deleteFT);

module.exports = router;