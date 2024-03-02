'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//coursework
db.scholar.belongsToMany(db.course, { through: db.coursework, foreignKey: 'scholarId'});
db.course.belongsToMany(db.scholar, { through: db.coursework, foreignKey: 'course_code' });

//course_waiver_requests
db.scholar.hasMany(db.course_waiver_requests, {foreignKey: 'scholarId'});
db.course_waiver_requests.belongsTo(db.scholar, {foreignKey: 'scholarId'});

//pss_requests
db.scholar.hasMany(db.pss_requests, {foreignKey: 'scholarId'});
db.pss_requests.belongsTo(db.scholar, {foreignKey: 'scholarId'});
db.professor.hasMany(db.pss_requests, {foreignKey: 'supervisor'});
db.pss_requests.belongsTo(db.professor, {foreignKey: 'supervisor'});
 
//scholar
db.professor.hasMany(db.scholar,{foreignKey:"supervisorId"});
db.scholar.belongsTo(db.professor,{foreignKey:"supervisorId"});
db.professor.hasMany(db.scholar,{foreignKey:"co_supervisorId"});
db.scholar.belongsTo(db.professor,{foreignKey:"co_supervisorId"});
db.scholar.hasMany(db.draft);
db.draft.belongsTo(db.scholar);
db.scholar.hasMany(db.thesis_eval);
db.thesis_eval.belongsTo(db.scholar);
db.dsc.hasMany(db.scholar)
db.scholar.belongsTo(db.dsc);
db.scholar.hasOne(db.ce_rep);
db.ce_rep.belongsTo(db.scholar);
db.scholar.hasOne(db.rps_rep);
db.rps_rep.belongsTo(db.scholar);
db.scholar.hasOne(db.pss_rep);
db.pss_rep.belongsTo(db.scholar);
db.scholar.hasOne(db.viva_voice);
db.viva_voice.belongsTo(db.scholar);

//dsc
db.professor.hasOne(db.dsc,{foreignKey:"chairman"})
db.dsc.belongsTo(db.professor,{foreignKey:"chairman"})
db.professor.hasOne(db.dsc,{foreignKey:"member1"})
db.dsc.belongsTo(db.professor,{foreignKey:"member1"})
db.professor.hasOne(db.dsc,{foreignKey:"member2"})
db.dsc.belongsTo(db.professor,{foreignKey:"member2"})
db.professor.hasOne(db.dsc,{foreignKey:"member3"})
db.dsc.belongsTo(db.professor,{foreignKey:"member3"})
db.professor.hasOne(db.dsc,{foreignKey:"member4"})
db.dsc.belongsTo(db.professor,{foreignKey:"member4"})
db.professor.hasOne(db.dsc,{foreignKey:"member5"})
db.dsc.belongsTo(db.professor,{foreignKey:"member5"})

//activity plan
db.scholar.hasOne(db.activityPlan,{foreignKey:"admissionNumber"});
db.activityPlan.belongsTo(db.scholar,{foreignKey:"admissionNumber"});

//assigned thesis
db.assigned_thesis.hasMany(db.thesis_eval);
db.thesis_eval.belongsTo(db.assigned_thesis);
db.assigned_thesis.hasMany(db.examiner);
db.examiner.belongsTo(db.assigned_thesis);
db.draft.hasOne(db.assigned_thesis, { foreignKey: "draftId" });
db.assigned_thesis.belongsTo(db.draft, { foreignKey: "draftId" });
db.thesis.hasOne(db.assigned_thesis,{foreignKey:{name:"thesisId",allowNull:false}});
db.assigned_thesis.belongsTo(db.thesis,{foreignKey:{name:"thesisId",allowNull:false}});
db.scholar.hasOne(db.assigned_thesis);
db.assigned_thesis.belongsTo(db.scholar);
db.professor.hasOne(db.assigned_thesis,{foreignKey:{name:"supervisor",allowNull:false}});
db.assigned_thesis.belongsTo(db.professor,{foreignKey:{name:"supervisor",allowNull:false}});
db.professor.hasOne(db.assigned_thesis,{foreignKey:{name:"co_supervisor",allowNull:false}});
db.assigned_thesis.belongsTo(db.professor,{foreignKey:{name:"co_supervisor",allowNull:false}});
db.dsc.hasMany(db.assigned_thesis);
db.assigned_thesis.belongsTo(db.dsc);

//thesis
db.professor.hasMany(db.thesis,{
  foreignKey:{allowNull:false}
});
db.thesis.belongsTo(db.professor);

//progress report
db.scholar.hasOne(db.progress_report,{
  foreignKey:{allowNull:false}
});
db.progress_report.belongsTo(db.scholar);
db.progress_report.hasOne(db.ce_rep,{
  foreignKey:{allowNull:false}
});
db.ce_rep.belongsTo(db.progress_report);
db.progress_report.hasOne(db.rps_rep,{
  foreignKey:{allowNull:false}
});
db.rps_rep.belongsTo(db.progress_report);
db.progress_report.hasOne(db.pss_rep,{
  foreignKey:{allowNull:false}
});
db.pss_rep.belongsTo(db.progress_report,{
  foreignKey:{allowNull:false}
});
db.viva_voice.belongsTo(db.progress_report);
db.progress_report.hasOne(db.viva_voice,{
  foreignKey:{allowNull:false}
});
db.progress_report.hasOne(db.overall_thesis_rep,{
  foreignKey:{allowNull:false}
});
db.overall_thesis_rep.belongsTo(db.progress_report);
// thesis_eval
db.examiner.hasOne(db.thesis_eval,{foreignKey:{name:"examinerId",allowNull:false}});
db.thesis_eval.belongsTo(db.examiner,{foreignKey:{name:"examinerId",allowNull:false}});
//forum_reply
db.forum_thread.hasMany(db.forum_reply);
db.forum_reply.belongsTo(db.forum_thread);
//supervisor_allocation
db.scholar.hasOne(db.supervisor_allocation);
db.supervisor_allocation.belongsTo(db.scholar);
//honorarium _form
db.examiner.hasOne(db.honorariumForm,{foreignKey:{name:"examinerId",allowNull:false}});
db.honorariumForm.belongsTo(db.examiner,{foreignKey:{name:"examinerId",allowNull:false}});
// fsbs
db.professor.hasMany(db.fsbs,{foreignKey:"supervisorId"});
db.fsbs.belongsTo(db.professor,{foreignKey:"supervisorId"});
db.scholar.hasMany(db.fsbs);
db.fsbs.belongsTo(db.scholar);


module.exports = db;
