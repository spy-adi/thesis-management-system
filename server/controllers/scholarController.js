const db = require("../models");
const Scholar = db.scholar;
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// create

const addScholar = async(req,res)=>{
    const errs = validationResult(req);
    if(!errs.isEmpty()){
        console.error(errs.message);
        return res.status(400).json({errors: errs.array()})
    }
    try {
        if (req.file) {
            req.body = {...req.body, photo: req.file.path};
        }

        let {admn,password} = req.body;
        let scholar = await Scholar.findOne({where:{admn:admn}});
        if(scholar){
            return res.status(400).json({msg: "Scholar already exists"}); // checking if the scholar already exists and if so sending status 400 as bad request
        }
        const salt = await bcrypt.genSalt(10); // 10 rounds of salts
        password = await bcrypt.hash(password,salt);
        scholar = await Scholar.create({...req.body,password});
        res.status(200).json(scholar);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

// read/get all scholars

const getAllScholars = async(req,res)=>{

    try{  
        const scholars = await Scholar.findAll({});
        res.status(200).json(scholars);
    }catch{
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

// read/get a single scholar

const getOneScholar = async(req,res)=>{
    try{
        let admn = req.params.admn;
        const scholar = await Scholar.findOne({where:{admn:admn}});
        res.status(200).json(scholar);
    }
    catch{
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}
// get some scholars
const getSomeScholars = async(req,res)=>{
    const {profId,current_semester,current_session} = req.params;
    try{  
        const scholars = await Scholar.findAll({where:{supervisorId:profId,current_semester:current_semester,current_session:current_session}});
        res.status(200).json(scholars);
    }catch{
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

//update scholar

const updateScholar = async(req,res)=>{
    try{
        if (req.file) {
            req.body = {...req.body, photo: req.file.path};
        }
        console.log(req.body);
        let admn = req.params.admn;
        const updatedScholar = await Scholar.update(req.body,{where:{admn:admn}});
        res.status(200).json(updatedScholar);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

//delete scholar

const deleteScholar = async(req,res)=>{
    try{
        let admn = req.params.admn;
        const scholar = await Scholar.findOne({where:{admn:admn}});
        if (scholar.photo) {
            await fs.unlink(scholar.photo, err => {
                console.error(err);
            });
        }
        await scholar.destroy();
        res.status(200).json({msg:"scholar deleted"});
    }
    catch{
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

//upload scholar image

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/photos/scholars')
    },
    filename: (req, file, cb) => {
        let name = req.body.admn;
        if(!name) {
            name = req.params.admn;
        }
        cb(null, name + path.extname(file.originalname))
    }
});

let uploadImage = multer({
    storage: storage,
    limits: {fileSize: '1048576'},
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
    addScholar,
    getAllScholars,
    getOneScholar,
    updateScholar,
    deleteScholar,
    uploadImage,
    getSomeScholars,
}