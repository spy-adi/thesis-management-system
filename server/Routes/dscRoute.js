const router = require("express").Router();
const {
    addDsc,
    getAllDsc,
    getOneDsc,
    updateDsc,
    deleteDsc
} = require("../controllers/dscController");
const auth = require("../middleware/auth")

router.post("/addDsc",auth,addDsc);
router.get("/getAllDsc",auth,getAllDsc);

router.get("/:id",auth,getOneDsc);
router.put("/:id",auth,updateDsc);
router.delete("/:id",auth,deleteDsc);

module.exports = router;