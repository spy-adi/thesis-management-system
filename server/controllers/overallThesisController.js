const db = require("../models");
const OverallThesisRep = db.overall_thesis_rep;
const multer = require('multer');
const path = require('path');

const addRequest = async (req, res) => {
    try {
        let request = await OverallThesisRep.create({...req.body, file: req.file.path, progressReportAdmn: req.body.scholarId});
        res.status(200).json(request);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error!"});
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "files/reports/overall");
    },
    filename: (req, file, cb) => {
      let name = req.body.scholarId;
      if (!name) {
        name = req.params.id;
      }
      cb(null, name + path.extname(file.originalname));
    },
  });
  
  let uploadFile = multer({
    storage: storage,
    limits: { fileSize: "52428800" },
    fileFilter: (req, file, cb) => {
      if (!file) {
        return cb("No file!");
      }
  
      const fileTypes = /pdf/;
      const mimeType = fileTypes.test(file.mimetype);
      const extName = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extName) {
        return cb(null, true);
      }
  
      cb("File Format error!");
    },
  }).single("file");

module.exports = {
    addRequest,
    uploadFile,
}