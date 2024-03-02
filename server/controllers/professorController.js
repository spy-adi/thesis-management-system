const db = require("../models");
const Professor = db.professor;
const ProgressReport = db.progress_report;
const Scholar = db.scholar;
const CeRep =db.ce_rep;
const RpsRep = db.rps_rep;
const PssRep = db.pss_rep;
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require('path');

// create

const addProfessor = async(req,res)=>{
    const errs = validationResult(req);
    if(!errs.isEmpty()){
        console.error(errs.message);
        return res.status(400).json({errors: errs.array()})
    }
    try {
        if (req.file) {
            req.body = {...req.body, photo: req.file.path};
        }

        let {profId,password} = req.body;
        let professor = await Professor.findOne({where:{profId:profId}});
        if(professor){
            return res.status(400).json({msg: "Professor already exists"});
        }
        const salt = await bcrypt.genSalt(10); // 10 rounds of salts
        password = await bcrypt.hash(password,salt);
        professor = await Professor.create({...req.body,password});
        res.status(200).json(professor);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Server Error"});
    }
}

// read/get all Professors

const getAllProfessors = async(req,res)=>{
    try {
        const professors = await Professor.findAll({});
        res.status(200).json(professors);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Server Error"});
    }
    
}

// read/get a single Professor

const getOneProfessor = async(req,res)=>{
    try {
        let id = req.params.id;
        const professor = await Professor.findOne({where:{profId:id}});
        res.status(200).json(professor);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Server Error"});
    }
    
}

//update Professor

const updateProfessor = async(req,res)=>{
    try {
        if (req.file) {
            req.body = {...req.body, photo: req.file.path};
        }
        let id = req.params.id;
        const updatedProfessor = await Professor.update(req.body,{where:{profId:id}});
        res.status(200).json(updatedProfessor);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Server Error"});
    }
    
}

//delete Professor

const deleteProfessor = async(req,res)=>{
    try {
        let id = req.params.id;
        await Professor.destroy({where:{id:id}});
        res.status(200).json({msg:"Professor deleted"});
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Server Error"});
    }
    
}

const getCeEligibleScholars = async (req, res) => {
    try {
        let id = req.params.id;
        const scholars = await ProgressReport.findAll({ attributes: [], include: { model: Scholar, attributes: ['admn', 'name', 'department'], where: { supervisorId: id } }, where: { comprehensive_exam_status: "pending" } });
        let ceDetails = [];
        for (const element of scholars) {
            const cd = await CeRep.findOne({ where: { scholarAdmn: element.scholar.dataValues.admn } });
            ceDetails.push(cd);
        }
        res.status(200).json({scholars, ceDetails});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error!' });
    }
}

const getRpsEligibleScholars = async (req, res) => {
    try {
        let id = req.params.id;
        const scholars = await ProgressReport.findAll({ attributes: [], include: { model: Scholar, attributes: ['admn', 'name', 'department'], where: { supervisorId: id } }, where: { rps_status: "pending" } });
        let rpsDetails = [];
        for (const element of scholars) {
            const rd = await RpsRep.findOne({ where: { scholarAdmn: element.scholar.dataValues.admn } });
            rpsDetails.push(rd);
        }
        res.status(200).json({scholars, rpsDetails});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error!' });
    }
}

const getPssEligibleScholars = async (req, res) => {
    try {
        let id = req.params.id;
        const scholars = await ProgressReport.findAll({ attributes: [], include: { model: Scholar, attributes: ['admn', 'name', 'department'], where: { supervisorId: id } }, where: { pss_status: "pending" } });
        let pssDetails = [];
        for (const element of scholars) {
            const pd = await PssRep.findOne({ where: { scholarAdmn: element.scholar.dataValues.admn } });
            pssDetails.push(pd);
        }
        res.status(200).json({scholars, pssDetails});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error!' });
    }
}

//upload professor image

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/photos/professors')
    },
    filename: (req, file, cb) => {
        let name = req.body.profId;
        if(!name) {
            name = req.params.id;
        }
        cb(null, name + path.extname(file.originalname))
    }
});

let uploadImage = multer({
    storage: storage,
    limits: {fileSize: '1,048,576'},
    fileFilter: (req, file, cb) => {

        if (!file) {
            return cb('No file!')
        }

        const fileTypes = /jpeg|jpg|png/;
        const mimeType = fileTypes.test(file.mimetype);
        const extName = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extName) {
            return cb(null, true);
        }

        cb('File Format error!');
    }
}).single('photo');


module.exports = {
    addProfessor,
    getAllProfessors,
    getOneProfessor,
    updateProfessor,
    deleteProfessor,
    getCeEligibleScholars,
    getRpsEligibleScholars,
    getPssEligibleScholars,
    uploadImage 
}