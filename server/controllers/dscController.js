const db = require("../models");
const Dsc = db.dsc;


// create

const addDsc = async(req,res)=>{
    try {
        const dsc = await Dsc.create(req.body);
            res.status(200).json(dsc);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

// read/get all Dsc

const getAllDsc = async(req,res)=>{
    try {
        const dsc = await Dsc.findAll({});
        res.status(200).json(dsc);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

// read/get a single Dsc

const getOneDsc = async(req,res)=>{
    try {
        let id = req.params.id;
        const dsc = await Dsc.findOne({where:{id:id}});
        res.status(200).json(dsc);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//update Dsc

const updateDsc = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedDsc = await Dsc.update(req.body,{where:{id:id}});
        res.status(200).json(updatedDsc);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//delete Dsc

const deleteDsc = async(req,res)=>{
    try {
        let id = req.params.id;
        await Dsc.destroy({where:{id:id}});
        res.status(200).json("dsc deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

module.exports = {
    addDsc,
    getAllDsc,
    getOneDsc,
    updateDsc,
    deleteDsc
}