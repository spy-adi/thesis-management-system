const db = require("../models");
const ActivityPlan = db.activityPlan;


// create

const addActivityPlan = async(req,res)=>{
    try {
        const activityPlan = await ActivityPlan.create(req.body);
            res.status(200).json(activityPlan);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

// read/get all ActivityPlan

const getAllActivityPlan = async(req,res)=>{
    try {
        const activityPlan = await ActivityPlan.findAll({});
        res.status(200).json(activityPlan);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

// read/get a single ActivityPlan

const getOneActivityPlan = async(req,res)=>{
    try {
        let id = req.params.id;
        const activityPlan = await ActivityPlan.findOne({where:{admissionNumber:id}});
        res.status(200).json(activityPlan);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//update ActivityPlan

const updateActivityPlan = async(req,res)=>{
    try{
        let id = req.params.id;
        let ap = await ActivityPlan.findOne({where:{admissionNumber:id}});
        ap = await ap.update(req.body);
        res.status(200).json(ap);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//delete ActivityPlan

const deleteActivityPlan = async(req,res)=>{
    try {
        let id = req.params.id;
        await ActivityPlan.destroy({where:{id:id}});
        res.status(200).json("ActivityPlan deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

module.exports = {
    addActivityPlan,
    getAllActivityPlan,
    getOneActivityPlan,
    updateActivityPlan,
    deleteActivityPlan
}