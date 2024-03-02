const db = require("../models");
const Fsbs = db.fsbs;
const multer = require('multer');
const path = require('path');


// create

const addFsbs = async(req,res)=>{
    try {
        const fsbs = await Fsbs.create(req.body);
            res.status(200).json(fsbs);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
}

// read/get all Fsbs

const getAllFsbs = async(req,res)=>{
    try {
        const fsbs = await Fsbs.findAll({});
        res.status(200).json(fsbs);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

// read/get a single Fsbs

const getOneFsbs = async(req,res)=>{
    try {
        let id = req.params.id;
        const fsbs = await Fsbs.findOne({where:{id:id}});
        res.status(200).json(fsbs);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//update Fsbs

const updateFsbs = async(req,res)=>{
    try {
        const supervisorId = req.params.supervisorId;
        const scholarAdmn = req.params.scholarAdmn;
        for (const form in req.files) {
            req.body[form] = req.files[form][0].path;
        }
        const updatedFsbs = await Fsbs.update(req.body,{where:{supervisorId: supervisorId, scholarAdmn: scholarAdmn}});
        console.log(updatedFsbs);
        res.status(200).json(updatedFsbs);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//delete Fsbs

const deleteFsbs = async(req,res)=>{
    try {
        let id = req.params.id;
        await Fsbs.destroy({where:{id:id}});
        res.status(200).json("Fsbs deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//upload FORMS

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/fsbs/'+file.fieldname);
    },
    filename: (req, file, cb) => {
        cb(null, `${req.params.scholarAdmn}-${file.fieldname}` + path.extname(file.originalname));
    }
});

let uploadFiles = multer({
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
    { name: 'PH2', maxCount: 1 },
    { name: 'PH3', maxCount: 1 },
    { name: 'PH8', maxCount: 1 },
    { name: 'PH10', maxCount: 1 },
    { name: 'PH11', maxCount: 1 },
    { name: 'PH12', maxCount: 1 },
    { name: 'PH13', maxCount: 1 },
    { name: 'PH15', maxCount: 1 },
    { name: 'PH16', maxCount: 1 },
    { name: 'PH17', maxCount: 1 },
    { name: 'PH18', maxCount: 1 },
]);

module.exports = {
    addFsbs,
    getAllFsbs,
    getOneFsbs,
    updateFsbs,
    deleteFsbs,
    uploadFiles
}