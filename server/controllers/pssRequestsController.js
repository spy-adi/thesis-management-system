const db = require('../models');
const PssRequests = db.pss_requests;
const multer = require('multer');
const path = require('path');

//create

const addRequest = async (req, res) => {
    try {
        console.log(req.body);
        let request = await PssRequests.create({...req.body, file: req.file.path, status: 'pending'});
        res.status(200).json(request);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg: 'Server Error!'});
    }
}

//get All

const getAllRequests = async (req, res) => {
    try {
        let requests = await PssRequests.findAll({});
        res.status(200).json(requests);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg: 'Server Error!'});
    }
}

//get one

const getOneRequest = async (req, res) => {
    try {
        let id = req.params.id;
        const request = await PssRequests.findOne({where: {scholarId: id}});
        res.status(200).json(request);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg: 'Server Error!'});
    }
}

//update one

const updateRequest = async (req, res) => {
    try {
        if (req.file) {
            req.body = {...req.body, url: req.file.path};
        }
        let id = req.params.id;
        const request = await PssRequests.update(req.body, {where: {id: id}});
        res.status(200).json(request);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg: 'Server Error!'});
    }
}

//delete one

const deleteRequest = async(req,res)=>{
    try {
        let id = req.params.id;
        await PssRequests.destroy({where: {id: id}});
        res.status(200).json("PSS request deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg:"Server Error"});
    }
    
}

//upload file

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/pss_requests');
    },
    filename: (req, file, cb) => {
        let name = req.body.scholarId;
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
    addRequest,
    getAllRequests,
    getOneRequest,
    updateRequest,
    deleteRequest,
    uploadFile
}