const db = require("../models");
const Scholar = db.scholar;
const Course = db.course;

const getSemCoursework = async (req, res) => {
  try {
    const request = await Scholar.findOne({
      where: { admn: req.params.admn },
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
            semester: req.params.sem,
            session: req.params.session,
            status: ["final", "proposed"],
          },
        },
      },
    });
    res.status(200).json(request);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server Error!" });
  }
};

module.exports = {
    getSemCoursework,
}