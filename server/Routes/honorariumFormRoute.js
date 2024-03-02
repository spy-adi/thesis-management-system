const router = require("express").Router();
const {
    addHonorariumForm,
    getAllHonorariumForm,
    getOneHonorariumForm,
    updateHonorariumForm,
    deleteHonorariumForm
} = require("../controllers/honorariumFormController");
const auth = require("../middleware/auth")

router.post("/addHonorariumForm",auth,addHonorariumForm);
router.get("/getAllHonorariumForm",auth,getAllHonorariumForm);

router.get("/:id",auth,getOneHonorariumForm);
router.put("/:id",auth,updateHonorariumForm);
router.delete("/:id",auth,deleteHonorariumForm);

module.exports = router;