const db = require("../models");
const CourseWaiverRequests = db.course_waiver_requests;
const Scholar = db.scholar;
const Professor = db.professor;
const Course = db.course;
const multer = require("multer");
const path = require("path");
const sendNotifications = require('../utils/sendNotification');
const sendMail = require("../utils/sendMail");

//create

const addRequest = async (req, res) => {
  try {
    let request = await CourseWaiverRequests.create({
      ...req.body,
      file: req.file.path,
      status: "pending",
    });
    const { supervisorId, name, professor } = await Scholar.findOne({ attributes: [ 'supervisorId', 'name' ], include:{ model: Professor, as: 'professor', attributes: ['email'] }, where: { admn: req.body.scholarId } });
    await sendNotifications([supervisorId], "Course Waiver Request", `${name} has submitted PH6 for a course waiver.`, null);
    await sendMail([professor.email], `Course Waiver Request from ${name}`, `<p>${name}, Admission Number ${req.body.scholarId} has submitted a course waiver request. The file is attached here for your reference.</p><p>IITISM TMS Notifications</p>`, [{path: path.resolve(req.file.path)}]);
    res.status(200).json(request);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error!" });
  }
};

//get all requests

const getAllRequests = async (req, res) => {
  try {
    const requests = await CourseWaiverRequests.findAll({
      include: {
        model: Scholar,
        attributes: [
          "name",
          "department",
          "photo",
          "supervisorId",
          "co_supervisorId",
          "dscId",
        ],
        include: [
          {
            model: Professor,
            as: "supervisor",
            attributes: ["name", "department", "photo"],
          },
          {
            model: Professor,
            as: "co_supervisor",
            attributes: ["name", "department", "photo"],
          },
        ],
      },
    });
    res.status(200).json(requests);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error!" });
  }
};

const checkRequest = async (req, res) => {
  try {
    const request = await CourseWaiverRequests.findOne({
      where: { scholarId: req.params.scholarId, semester: req.params.semester, session: req.params.session },
    });
    if (request) {
      res.status(200).json({ result: true, proposed: null });
    } else {
      const proposed = await Scholar.findOne({
        where: { admn: req.params.scholarId },
        attributes: [],
        include: {
          model: Course,
          attributes: [
            "course_code",
            "course_name",
            "department",
            "details",
            "course_structure_url",
          ],
          through: {
            attributes: [],
            where: {
              semester: req.params.semester,
              session: req.params.session,
              status: "proposed",
            },
          },
        },
      });
      res.status(200).json({ result: false, proposed: proposed.courses });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error!" });
  }
};

//upload file

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files/course_waiver_requests");
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
  getAllRequests,
  checkRequest,
  uploadFile,
};
