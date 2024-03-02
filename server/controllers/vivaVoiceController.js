const db = require("../models");
const VivaVoice = db.viva_voice;


// create

const addVivaVoice = async(req,res)=>{
    try {
        const vivaVoice = await VivaVoice.create(req.body);
            res.status(200).send(vivaVoice);
        
    } catch (error) {
        res.status(400).send(error);
    }
}

// read/get all Professors

const getAllVivaVoice = async(req,res)=>{
    try {
        const vivaVoice = await VivaVoice.findAll({});
        res.status(200).send(vivaVoice);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

// read/get a single VivaVoice

const getOneVivaVoice = async(req,res)=>{
    try {
        let id = req.params.id;
        const vivaVoice = await VivaVoice.findOne({where:{scholarAdmn:id}});
        res.status(200).send(vivaVoice);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//update VivaVoice

const updateVivaVoice = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedVivaVoice = await VivaVoice.update(req.body,{where:{id:id}});
        res.status(200).send(updatedVivaVoice);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//delete VivaVoice

const deleteVivaVoice = async(req,res)=>{
    try {
        let id = req.params.id;
        await VivaVoice.destroy({where:{id:id}});
        res.status(200).send("vivaVoice deleted");
    } catch (error) {
        res.status(400).send(error);
    }
    
}

module.exports = {
    addVivaVoice,
    getAllVivaVoice,
    getOneVivaVoice,
    updateVivaVoice,
    deleteVivaVoice
}