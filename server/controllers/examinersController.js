const db = require("../models");
const Examiner = db.examiner;
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require('path');


// create

const addExaminer = async(req,res)=>{
    const errs = validationResult(req);
    if(!errs.isEmpty()){
        console.error(errs.message);
        return res.status(400).json({errors: errs.array()})
    }
    try {
        if (req.file) {
            req.body = {...req.body, photo: req.file.path};
        }

        let{examinerId,password} = req.body;
        let examiner = await Examiner.findOne({where:{examinerId:examinerId}});
        if(examiner){
            return res.status(400).json({msg: "Examiner already exists"});
        }
        const salt = await bcrypt.genSalt(10); // 10 rounds of salts
        password = await bcrypt.hash(password,salt);
        examiner = await Examiner.create({...req.body,password});
        res.status(200).json(examiner);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Server Error"});
    }
}

// read/get all Examiner

const getAllExaminer = async(req,res)=>{
    try {
        const examiners = await Examiner.findAll({});
        res.status(200).json(examiners);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Server Error"});
    }
    
}

// read/get a single Examiner

const getOneExaminer = async(req,res)=>{
    try {
        let id = req.params.id;
        const examiner = await Examiner.findOne({where:{id:id}});
        res.status(200).json(examiner);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Server Error"});
    }
    
}

//update Examiner

const updateExaminer = async(req,res)=>{
    try {
        if (req.file) {
            req.body = {...req.body, photo: req.file.path};
        }
        let id = req.params.id;
        let e = await Examiner.findOne({where:{examinerId:id}});
        e = await e.update(req.body);
        res.status(200).json(e);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Server Error"});
    }
    
}

//delete Examiner

const deleteExaminer = async(req,res)=>{
    try {
        let id = req.params.id;
        await Examiner.destroy({where:{id:id}});
        res.status(200).json({msg:"examiner deleted"});
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Server Error"});
    }
    
}

//upload examiner image

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/photos/examiners')
    },
    filename: (req, file, cb) => {
        let name = req.body.examinerId;
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
    addExaminer,
    getAllExaminer,
    getOneExaminer,
    updateExaminer,
    deleteExaminer,
    uploadImage
}