const db = require("../models");
const Course = db.course;
const multer = require('multer');
const path = require('path');


// create

const addCourse = async(req,res)=>{
    try {
        const course = await Course.create({...req.body, course_structure_url: req.file.path});
        res.status(200).send(course);
        
    } catch (error) {
        res.status(400).send(error);
    }
}

// read/get all Courses

const getAllCourse = async(req,res)=>{
    try {
        const courses = await Course.findAll({});
        res.status(200).send(courses);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

// read/get a single Course

const getOneCourse = async(req,res)=>{
    try {
        let id = req.params.id;
        const course = await Course.findOne({where:{id:id}});
        res.status(200).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//update Course

const updateCourse = async(req,res)=>{
    try {
        if (req.file) {
            req.body = {...req.body, course_structure_url: req.file.path};
        }
        let id = req.params.id;
        const updatedCourse = await Course.update(req.body,{where:{course_code: id}});
        res.status(200).send(updatedCourse);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//delete Course

const deleteCourse = async(req,res)=>{
    try {
        let id = req.params.id;
        await Course.destroy({where:{id:id}});
        res.status(200).send("course deleted");
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//upload course structure

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/course_structures');
    },
    filename: (req, file, cb) => {
        let name = req.body.course_code;
        if(!name) {
            name = req.params.id;
        }
        cb(null, name + path.extname(file.originalname));
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
}).single('file');



module.exports = {
    addCourse,
    getAllCourse,
    getOneCourse,
    updateCourse,
    deleteCourse,
    uploadFile
}