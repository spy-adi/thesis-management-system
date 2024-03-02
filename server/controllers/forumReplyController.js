const db = require("../models");
const FR = db.forum_reply;


// create

const addFR = async(req,res)=>{
    try {
        const fr = await FR.create(req.body);
            res.status(200).json(fr);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

// read/get all FR

const getAllFR = async(req,res)=>{
    try {
        const fr = await FR.findAll({});
        res.status(200).json(fr);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

// read/get a single FR

const getOneFR = async(req,res)=>{
    try {
        let id = req.params.id;
        const fr = await FR.findOne({where:{id:id}});
        res.status(200).json(fr);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}
//get replies of a particular thread
const getFR = async(req,res)=>{
    try {
        let id = req.params.id;
        const fr = await FR.findAll({where:{forumThreadId:id}});
        res.status(200).json(fr);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//update FR

const updateFR = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedFR = await FR.update(req.body,{where:{id:id}});
        res.status(200).json(updatedFR);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//delete FR

const deleteFR = async(req,res)=>{
    try {
        let id = req.params.id;
        await FR.destroy({where:{id:id}});
        res.status(200).json("FR deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

module.exports = {
    addFR,
    getAllFR,
    getOneFR,
    getFR,
    updateFR,
    deleteFR
}