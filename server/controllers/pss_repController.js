const db = require("../models");
const Pss_Rep = db.pss_rep;
const multer = require('multer');


// create

const addPss_Rep = async(req,res)=>{
    try {
        const pss_rep = await Pss_Rep.create({...req.body, rep_url: req.file.path});
            res.status(200).send(pss_rep);
        
    } catch (error) {
        res.status(400).send(error);
    }
}

// read/get all Pss_Rep

const getAllPss_Rep = async(req,res)=>{
    try {
        const pss_rep = await Pss_Rep.findAll({});
        res.status(200).send(pss_rep);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

// read/get a single Pss_Rep

const getOnePss_Rep = async(req,res)=>{
    try {
        let id = req.params.id;
        const pss_rep = await Pss_Rep.findOne({where:{scholarAdmn:id}});
        res.status(200).send(pss_rep);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//update Pss_Rep

const updatePss_Rep = async(req,res)=>{
    try {
        if (req.file) {
            req.body = {...req.body, rep_url: req.file.path};
        }
        let id = req.params.id;
        const updatedPss_Rep = await Pss_Rep.update(req.body,{where:{id:id}});
        res.status(200).send(updatedPss_Rep);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//delete Pss_Rep

const deletePss_Rep = async(req,res)=>{
    try {
        let id = req.params.id;
        await Pss_Rep.destroy({where:{id:id}});
        res.status(200).send("pss_rep deleted");
    } catch (error) {
        res.status(400).send(error);
    }
    
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/reports/pss');
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
}).single('rep');

module.exports = {
    addPss_Rep,
    getAllPss_Rep,
    getOnePss_Rep,
    updatePss_Rep,
    deletePss_Rep,
    uploadFile,
}