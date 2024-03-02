const router = require("express").Router();
const {
    addVivaVoice,
    getAllVivaVoice,
    getOneVivaVoice,
    updateVivaVoice,
    deleteVivaVoice
} = require("../controllers/vivaVoiceController");
const auth = require("../middleware/auth")

router.post("/addVivaVoice",auth,addVivaVoice);
router.get("/getAllVivaVoice",auth,getAllVivaVoice);

router.get("/:id",auth,getOneVivaVoice);
router.put("/:id",auth,updateVivaVoice);
router.delete("/:id",auth,deleteVivaVoice);

module.exports = router;