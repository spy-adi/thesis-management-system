const db = require("../models");
const Progress_Report = db.progress_report;
const Ce_Rep = db.ce_rep;
const Rps_Rep = db.rps_rep;
const Pss_Rep = db.pss_rep;
const OverallThesisRep = db.overall_thesis_rep;
const VivaVoice = db.viva_voice;


// create

const addProgress_Report = async(req,res)=>{
    try {
        const progress_report = await Progress_Report.create(req.body);
            res.status(200).send(progress_report);
        
    } catch (error) {
        res.status(400).send(error);
    }
}

// read/get all Progress_Report

const getAllProgress_Report = async(req,res)=>{
    try {
        const progress_report = await Progress_Report.findAll({});
        res.status(200).send(progress_report);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

// read/get a single Progress_Report

const getOneProgress_Report = async(req,res)=>{
    try {
        let id = req.params.id;
        const progress_report = await Progress_Report.findOne({where:{scholarAdmn:id}});
        if (progress_report) {
            if (progress_report.comprehensive_exam_status) {
                console.log('here');
                progress_report.dataValues.ce_rep = await Ce_Rep.findOne({ where: { progressReportId: progress_report.id } });
                console.log(progress_report.dataValues.ce_rep);
            }
            if (progress_report.rps_status) {
                progress_report.dataValues.rps_rep = await Rps_Rep.findOne({ where: { progressReportId: progress_report.id } });
            }
            if (progress_report.pss_status) {
                progress_report.dataValues.pss_rep = await Pss_Rep.findOne({ where: { progressReportId: progress_report.id } });
            }
            if (progress_report.thesis_evaluation_status) {
                progress_report.dataValues.overall_thesis_eval = await OverallThesisRep.findOne({ where: { progressReportId: progress_report.id } });
            }
            if (progress_report.viva_voice_status) {
                progress_report.dataValues.vv_rep = await VivaVoice.findOne({ where: { progressReportId: progress_report.id } });
            }
        }
        console.log(progress_report);
        res.status(200).send(progress_report);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//update Progress_Report

const updateProgress_Report = async(req,res)=>{
    try {
        let id = req.params.id;
        const updatedProgress_Report = await Progress_Report.update(req.body,{where:{scholarAdmn:id}});
        res.status(200).send(updatedProgress_Report);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

//delete Progress_Report

const deleteProgress_Report = async(req,res)=>{
    try {
        let id = req.params.id;
        await Progress_Report.destroy({where:{id:id}});
        res.status(200).send("progress_report deleted");
    } catch (error) {
        res.status(400).send(error);
    }
    
}

module.exports = {
    addProgress_Report,
    getAllProgress_Report,
    getOneProgress_Report,
    updateProgress_Report,
    deleteProgress_Report
}