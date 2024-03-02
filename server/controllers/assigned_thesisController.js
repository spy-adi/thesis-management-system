const db = require("../models");
const Assigned_thesis = db.assigned_thesis;
const Draft = db.draft;
const Thesis = db.thesis;


// create

const addAssigned_thesis = async(req,res)=>{
    try {
        const assigned_thesis = await Assigned_thesis.create(req.body);
            res.status(200).send(assigned_thesis);
        
    } catch (error) {
        res.status(400).send(error);
    }
}

// read/get all Professors

const getAllAssigned_thesis = async(req,res)=>{
    try {
        const assigned_thesis = await Assigned_thesis.findAll({});
        res.status(200).send(assigned_thesis);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

// read/get a single Assigned_thesis

const getOneAssigned_thesis = async(req,res)=>{
    try {
        let id = req.params.id;
        console.log(id);
        const assigned_thesis = await Assigned_thesis.findOne({ where: {scholarAdmn: id}, include: [ { model: Thesis }, { model: Draft } ] });
        console.log(assigned_thesis)
        res.status(200).send(assigned_thesis);
    } catch (error) {
        res.status(400).send(error);
    }
    
}
const getOneAssigned_thesis_by_id = async(req,res)=>{
    try {
        let id = req.params.id;
        const assigned_thesis = await Assigned_thesis.findOne({ where: {id: id}, include: [ { model: Thesis }, { model: Draft } ] });
        res.status(200).send(assigned_thesis);
    } catch (error) {
        res.status(400).send(error);
    }
    
}
const getOneAssigned_thesis_by_supervisor = async(req,res)=>{
    try {
        let id = req.params.id;
        const assigned_thesis = await Assigned_thesis.findOne({where:{supervisor:id}});
        res.status(200).send(assigned_thesis);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//update Assigned_thesis

const updateAssigned_thesis= async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedAssigned_thesis = await Assigned_thesis.update(req.body,{where:{id:id}});
        res.status(200).send(updatedAssigned_thesis);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//delete Assigned_thesis

const deleteAssigned_thesis = async(req,res)=>{
    try {
        let id = req.params.id;
        await Assigned_thesis.destroy({where:{id:id}});
        res.status(200).send("Assigned_thesis deleted");
    } catch (error) {
        res.status(400).send(error);
    }
    
}

module.exports = {
    addAssigned_thesis,
    getAllAssigned_thesis,
    getOneAssigned_thesis_by_id,
    getOneAssigned_thesis,
    getOneAssigned_thesis_by_supervisor,
    updateAssigned_thesis,
    deleteAssigned_thesis
}