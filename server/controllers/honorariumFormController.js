const db = require("../models");
const HonorariumForm = db.honorariumForm;


// create

const addHonorariumForm = async(req,res)=>{
    try {
        const honorariumForm = await HonorariumForm.create(req.body);
            res.status(200).json(honorariumForm);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

// read/get all HonorariumForm

const getAllHonorariumForm = async(req,res)=>{
    try {
        const honorariumForm = await HonorariumForm.findAll({});
        res.status(200).json(honorariumForm);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

// read/get a single HonorariumForm

const getOneHonorariumForm = async(req,res)=>{
    try {
        let id = req.params.id;
        const honorariumForm = await HonorariumForm.findOne({where:{examinerId:id}});
        res.status(200).json(honorariumForm);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//update HonorariumForm

const updateHonorariumForm = async(req,res)=>{
    try{
        let id = req.params.id;
        let hf = await HonorariumForm.findOne({where:{examinerId:id}});
        hf = await hf.update(req.body);
        res.status(200).json(hf);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//delete HonorariumForm

const deleteHonorariumForm = async(req,res)=>{
    try {
        let id = req.params.id;
        await HonorariumForm.destroy({where:{id:id}});
        res.status(200).json("honorariumForm deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

module.exports = {
    addHonorariumForm,
    getAllHonorariumForm,
    getOneHonorariumForm,
    updateHonorariumForm,
    deleteHonorariumForm
}