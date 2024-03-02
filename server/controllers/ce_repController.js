const db = require("../models");
const Ce_Rep = db.ce_rep;
const multer = require('multer');
const path = require('path');


// create

const addCe_Rep = async(req,res)=>{
    try {
        const ce_rep = await Ce_Rep.create({...req.body, rep1_url: req.files[0].path});
        res.status(200).send(ce_rep);
        
    } catch (error) {
        res.status(400).send(error);
    }
}

// read/get all Professors

const getAllCe_Rep = async(req,res)=>{
    try {
        const ce_reps = await Ce_Rep.findAll({});
        res.status(200).send(ce_reps);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

// read/get a single Ce_Rep

const getOneCe_Rep = async(req,res)=>{
    try {
        let id = req.params.id;
        const ce_rep = await Ce_Rep.findOne({where:{scholarAdmn:id}});
        console.log(ce_rep);
        res.status(200).send(ce_rep);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
    
}

//update Ce_Rep

const updateCe_Rep = async(req,res)=>{
    try {
        if (req.files['rep1']) {
            req.body = {...req.body, rep1_url: req.files['rep1'][0].path};
        }
        if (req.files['rep2']) {
            req.body = {...req.body, rep2_url: req.files['rep2'][0].path};
        }
        let id = req.params.id;
        const updatedce_rep = await Ce_Rep.update(req.body,{where:{scholarAdmn:id}});
        console.log(updatedce_rep);
        res.status(200).send(updatedce_rep);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    
}

//delete Ce_Rep

const deleteCe_Rep = async(req,res)=>{
    try {
        let id = req.params.id;
        await Ce_Rep.destroy({where:{id:id}});
        res.status(200).send("ce_rep deleted");
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//upload course structure

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/reports/ce');
    }
});

let uploadFile = multer({
    storage: storage,
    limits: {fileSize: '20971520'},
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
}).fields([
    { name: 'rep1', maxCount: 1 },
    { name: 'rep2', maxCount: 1 },
]);



module.exports = {
    addCe_Rep,
    getAllCe_Rep,
    getOneCe_Rep,
    updateCe_Rep,
    deleteCe_Rep,
    uploadFile
}