const router = require("express").Router();
const {
    addActivityPlan,
    getAllActivityPlan,
    getOneActivityPlan,
    updateActivityPlan,
    deleteActivityPlan
} = require("../controllers/activityPlanController");

router.post("/addActivityPlan",addActivityPlan);
router.get("/getAllActivityPlan",getAllActivityPlan);

router.get("/:id",getOneActivityPlan);
router.post("/:id",updateActivityPlan);
router.delete("/:id",deleteActivityPlan);

module.exports = router;
