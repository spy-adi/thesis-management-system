const db = require("../models");
const Thesis_Eval = db.thesis_eval;
const Examiner = db.examiner;
const multer = require('multer');
const path = require('path');


// create

const addThesis_Eval = async(req,res)=>{
    try {
        let generalFeaturesOne, generalFeaturesTwo, eval_type_url;
        if (req.files.generalFeaturesOne.length > 0) {
            generalFeaturesOne = req.files.generalFeaturesOne[0].path;
        }
        if (req.files.generalFeaturesTwo.length > 0) {
            generalFeaturesTwo = req.files.generalFeaturesTwo[0].path;
        }
        if (req.files.eval_type_url.length > 0) {
            eval_type_url = req.files.eval_type_url[0].path;
        }
        const thesis_eval = await Thesis_Eval.create({
            ...req.body,
            generalFeaturesOne,
            generalFeaturesTwo,
            eval_type_url
        });
        await Examiner.update({thesis_evaluation_status: "evaluated"}, { where: { examinerId: req.body.examinerId } });
        res.status(200).send(thesis_eval);
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

// read/get all Thesis_Eval

const getAllThesis_Eval = async(req,res)=>{
    try {
        const thesis_eval = await Thesis_Eval.findAll({});
        res.status(200).send(thesis_eval);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

// read/get a single Thesis_Eval

const getOneThesis_Eval = async(req,res)=>{
    try {
        let id = req.params.id;
        const thesis_eval = await Thesis_Eval.findOne({where:{examinerId:id}});
        res.status(200).send(thesis_eval);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//update Thesis_Eval

const updateThesis_Eval = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedThesis_Eval = await Thesis_Eval.update(req.body,{where:{id:id}});
        res.status(200).send(updatedThesis_Eval);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//delete Thesis_Eval

const deleteThesis_Eval = async(req,res)=>{
    try {
        let id = req.params.id;
        await Thesis_Eval.destroy({where:{id:id}});
        res.status(200).send("thesis_eval deleted");
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//upload files

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'generalFeaturesOne') {
            cb(null, 'files/reports/ex_eval/GeneralFeaturesOne');
        }
        else if (file.fieldname === 'generalFeaturesTwo') {
            cb(null, 'files/reports/ex_eval/GeneralFeaturesTwo');
        }
        else if (file.fieldname === 'eval_type_url') {
            cb(null, 'files/reports/ex_eval/EvalTypeFile');
        }
        else {
            cb('Invalid field name!', null);
        }
    },
    filename: (req, file, cb) => {
        let name = `${req.body.scholarAdmn}-${req.body.examinerId}`
        if (file.fieldname === 'generalFeaturesOne') {
            cb(null, name + path.extname(file.originalname));
        }
        else if (file.fieldname === 'generalFeaturesTwo') {
            cb(null, name + path.extname(file.originalname));
        }
        else if (file.fieldname === 'eval_type_url') {
            cb(null, name + path.extname(file.originalname));
        }
        else {
            cb('Invalid field name!', null);       
        }
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
    { name: 'generalFeaturesOne', maxCount: 1 },
    { name: 'generalFeaturesTwo', maxCount: 1 },
    { name: 'eval_type_url', maxCount: 1 },
]);

module.exports = {
    addThesis_Eval,
    getAllThesis_Eval,
    getOneThesis_Eval,
    updateThesis_Eval,
    deleteThesis_Eval,
    uploadFiles
}