const db = require("../models");
const Draft = db.draft;
const AssignedThesis = db.assigned_thesis;
const Progress_Report = db.progress_report;
const multer = require('multer');
const path = require('path');

// create

const addDraft = async(req,res)=>{
    try {
        let draft;
        if (req.draftId) {
            draft = await Draft.update({ title: req.body.title, abstract: req.body.abstract, file: req.files.thesis[0].path, synopsis: req.files.synopsis[0].path }, { where: { id: req.draftId } });
        }
        else {
            draft = await Draft.create({ title: req.body.title, abstract: req.body.abstract, file: req.files.thesis[0].path, synopsis: req.files.synopsis[0].path });
        }
        let updateData = { draftId: draft.id };
        if (req.body.finalSubmission) {
            updateData = { ...updateData, completed: new Date(), thesis_submission_date: new Date() };
            await Progress_Report.update({ thesis_submission_status: 'submitted' }, { where: { scholarAdmn: req.params.admn } });
        }
        await AssignedThesis.update(updateData, { where: { id: req.assignedThesisId } });
        res.status(200).json(draft);        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}

// read/get all Drafts

const getAllDraft = async(req,res)=>{
    try {
        const drafts = await Draft.findAll({});
        res.status(200).send(drafts);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

const getAssignedThesis = async (req, res, next) => {
    try {
        const assigned = await AssignedThesis.findOne({ where: { scholarAdmn: req.params.admn } });
        if (assigned) {
            req.draftId = assigned.draftId;
            req.assignedThesisId = assigned.id;
            next();
        } else {
            res.status(404).json({ message: "Thesis has not yet been assigned to the Scholar!" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Server error!" });
    }
}

// read/get a single Draft

const getOneDraft = async(req,res)=>{
    try {
        let id = req.params.id;
        const draft = await Draft.findOne({where:{id:id}});
        res.status(200).send(draft);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//update Draft

const updateDraft = async(req,res)=>{
    try {
        if (req.file) {
            req.body = {...req.body, url: req.file.path};
        }
        let id = req.params.id;
        const updatedDraft = await Draft.update(req.body,{where:{id:id}});
        res.status(200).send(updatedDraft);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//delete Draft

const deleteDraft = async(req,res)=>{
    try {
        let id = req.params.id;
        await Draft.destroy({where:{id:id}});
        res.status(200).send("draft deleted");
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//upload draft

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'thesis') {
            cb(null, 'files/drafts/theses')
        }
        else if (file.fieldname === 'synopsis') {
            cb(null, 'files/drafts/synopses');
        }
    },
    filename: (req, file, cb) => {
        let name = req.body.id;
        if(!name) {
            name = req.params.admn;
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
}).fields([
    { name: 'thesis', maxCount: 1 },
    { name: 'synopsis', maxCount: 1 },
]);


module.exports = {
    addDraft,
    getAllDraft,
    getAssignedThesis,
    getOneDraft,
    updateDraft,
    deleteDraft,
    uploadFile
}