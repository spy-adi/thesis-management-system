const db = require("../models");
const Thesis = db.thesis;
const multer = require('multer');
const path = require('path');


// create

const addThesis = async(req,res)=>{
    try {
        const thesis = await Thesis.create({...req.body, file: req.file.path});
            res.status(200).send(thesis);
        
    } catch (error) {
        res.status(400).send(error);
    }
}

// read/get all Thesis

const getAllThesis = async(req,res)=>{
    try {
        const thesis = await Thesis.findAll({});
        res.status(200).send(thesis);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

// read/get a single Thesis

const getOneThesis = async(req,res)=>{
    try {
        let id = req.params.id;
        const thesis = await Thesis.findOne({where:{id:id}});
        res.status(200).send(thesis);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//update Thesis

const updateThesis = async(req,res)=>{
    try {
        if (req.file) {
            req.body = {...req.body, file: req.file.path};
        }
        let id = req.params.id;
        const updatedThesis = await Thesis.update(req.body,{where:{id:id}});
        res.status(200).send(updatedThesis);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//delete Thesis

const deleteThesis = async(req,res)=>{
    try {
        let id = req.params.id;
        await Thesis.destroy({where:{id:id}});
        res.status(200).send("thesis deleted");
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//upload thesis

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/theses');
    },
    filename: (req, file, cb) => {
        let name = req.body.id;
        if(!name) {
            name = req.params.id;
        }
        cb(null, name + path.extname(file.originalname));
    }
});

let uploadFile = multer({
    storage: storage,
    limits: {fileSize: '52428800'},
    fileFilter: (req, file, cb) => {

        if (!file) {
            return cb('No file!')
        }

        const fileTypes = /pdf|doc|docx|rtf/;
        const mimeType = fileTypes.test(file.mimetype);
        const extName = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extName) {
            return cb(null, true);
        }

        cb('File Format error!');
    }
}).single('file');

module.exports = {
    addThesis,
    getAllThesis,
    getOneThesis,
    updateThesis,
    deleteThesis,
    uploadFile
}