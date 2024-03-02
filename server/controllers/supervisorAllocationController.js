const db = require("../models");
const SA = db.supervisor_allocation;


// create

const addSA = async(req,res)=>{
    try {
        const sa = await SA.create(req.body);
            res.status(200).json(sa);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

// read/get all SA

const getAllSA = async(req,res)=>{
    try {
        const sa = await SA.findAll({});
        res.status(200).json(sa);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

// read/get a single SA

const getOneSA = async(req,res)=>{
    try {
        let id = req.params.id;
        const sa = await SA.findOne({where:{scholarAdmn:id}});
        res.status(200).json(sa);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//update SA

const updateSA = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedSA = await SA.update(req.body,{where:{id:id}});
        res.status(200).json(updatedSA);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//delete SA

const deleteSA = async(req,res)=>{
    try {
        let id = req.params.id;
        await SA.destroy({where:{id:id}});
        res.status(200).json("SA deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

module.exports = {
    addSA,
    getAllSA,
    getOneSA,
    updateSA,
    deleteSA
}