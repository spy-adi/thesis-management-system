const db = require("../models");
const Rps_Rep = db.rps_rep;
const multer = require('multer');


// create

const addRps_Rep = async(req,res)=>{
    try {
        const rps_rep = await Rps_Rep.create({...req.body, rep1_url: req.files[0].path});
            res.status(200).send(rps_rep);
        
    } catch (error) {
        res.status(400).send(error);
    }
}

// read/get all Rps_Rep

const getAllRps_Rep = async(req,res)=>{
    try {
        const rps_rep = await Rps_Rep.findAll({});
        res.status(200).send(rps_rep);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

// read/get a single Rps_Rep

const getOneRps_Rep = async(req,res)=>{
    try {
        let id = req.params.id;
        const rps_rep = await Rps_Rep.findOne({where:{scholarAdmn:id}});
        res.status(200).send(rps_rep);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//update Rps_Rep

const updateRps_Rep = async(req,res)=>{
    try {
        req.files.forEach(file => {
            if (file.fieldname === 'rep1') {
                rep1_url = file.path;
            }
            else {
                rep2_url = file.path;
            }
        });
        if (rep1_url) {
            req.body = {...req.body, rep1_url};
        }
        if (rep2_url) {
            req.body = {...req.body, rep2_url};
        }
        let id = req.params.id;
        const updatedRps_Rep = await Rps_Rep.update(req.body,{where:{id:id}});
        res.status(200).send(updatedRps_Rep);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//delete Rps_Rep

const deleteRps_Rep = async(req,res)=>{
    try {
        let id = req.params.id;
        await Rps_Rep.destroy({where:{id:id}});
        res.status(200).send("rps_rep deleted");
    } catch (error) {
        res.status(400).send(error);
    }
    
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/reports/rps');
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
    addRps_Rep,
    getAllRps_Rep,
    getOneRps_Rep,
    updateRps_Rep,
    deleteRps_Rep,
    uploadFile,
}