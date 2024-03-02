const db = require("../models");
const FT = db.forum_thread;


// create

const addFT = async(req,res)=>{
    try {
        const ft = await FT.create(req.body);
            res.status(200).json(ft);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

// read/get all FT

const getAllFT = async(req,res)=>{
    try {
        const ft = await FT.findAll({});
        res.status(200).json(ft);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

// read/get a single FT

const getOneFT = async(req,res)=>{
    try {
        let id = req.params.id;
        const ft = await FT.findOne({where:{posted_by_id:id}});
        res.status(200).json(ft);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//update FT

const updateFT = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedFT = await FT.update(req.body,{where:{id:id}});
        res.status(200).json(updatedFT);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//delete FT

const deleteFT = async(req,res)=>{
    try {
        let id = req.params.id;
        await FT.destroy({where:{id:id}});
        res.status(200).json("FT deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

module.exports = {
    addFT,
    getAllFT,
    getOneFT,
    updateFT,
    deleteFT
}