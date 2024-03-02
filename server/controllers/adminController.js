const db = require("../models");
const Admin = db.admin;
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require('path');

//create
const addAdmin = async(req,res)=>{
    const errs = validationResult(req);
    if(!errs.isEmpty()){
        console.error(errs.message);
        return res.status(400).json({errors: errs.array()})
    }
    try {
        if (req.file) {
            req.body = {...req.body, photo: req.file.path};
        }

        let {adminId,password} = req.body;
        let admin = await Admin.findOne({where:{adminId:adminId}});
        if(admin){
            return res.status(400).json({msg: "Admin already exists"});
        }
        const salt = await bcrypt.genSalt(10); // 10 rounds of salts
        password = await bcrypt.hash(password,salt);
        admin = await Admin.create({...req.body,password})
        res.status(200).json(admin);
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"Server Error"});
    }
}

// read/get all Admin
const getAllAdmin = async(req,res)=>{
    try {
        const admins = await Admin.findAll({});
        res.status(200).send(admins);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

// read/get a single Admin

const getOneAdmin = async(req,res)=>{
    try {
        let id = req.params.id;
        const admin = await Admin.findOne({where:{id:id}});
        res.status(200).send(admin);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//update Admin

const updateAdmin = async(req,res)=>{
    try {
        if (req.file) {
            req.body = {...req.body, photo: req.file.path};
        }
        let id = req.params.id;
        const updatedAdmin = await Admin.update(req.body,{where:{adminId:id}});
        res.status(200).send(updatedAdmin);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//delete Admin

const deleteAdmin = async(req,res)=>{
    try {
        let id = req.params.id;
        await Admin.destroy({where:{id:id}});
        res.status(200).json({msg:"admin deleted"});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//upload admin image

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/photos/admins')
    },
    filename: (req, file, cb) => {
        let name = req.body.adminId;
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
    addAdmin,
    getAllAdmin,
    getOneAdmin,
    updateAdmin,
    deleteAdmin,
    uploadImage
}