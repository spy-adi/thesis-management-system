const express = require("express");
const app = express();
const db = require("./models");
const scholarRoute = require("./Routes/scholarRoute");
const professorRoute = require("./Routes/professorRoute");
const assigned_thesisRoute = require("./Routes/assigned_thesisRoute");
const ce_repRoute = require("./Routes/ce_repRoute");
const coursesRoute = require("./Routes/coursesRoute");
const draftRoute = require("./Routes/draftRoute");
const dscRoute = require("./Routes/dscRoute");
const progressReportRoute = require("./Routes/progressReportRoute");
const pss_repRoute = require("./Routes/pss_repRoute");
const rps_repRoute = require("./Routes/rps_repRoute");
const thesis_evalRoute = require("./Routes/thesis_evalRoute");
const thesisRoute = require("./Routes/thesisRoute");
const adminRoute = require("./Routes/adminRoute");
const examinersRoute = require("./Routes/examinersRoute");
const authRoute = require("./Routes/auth");
const vivaVoiceRoute = require("./Routes/vivaVoiceRoute");
const forumThreadRoute = require("./Routes/forumThreadRoute");
const forumReplyRoute = require("./Routes/forumReplyRoute");
const supervisorAllocationRoute = require("./Routes/supervisorAllocationRoute");
const courseWaiverRequestsRoute = require('./Routes/courseWaiverRequestsRoute');
const pssRequestsRoute = require('./Routes/pssRequestsRoute');
const courseworkRoute = require("./Routes/courseworkRoute");
const getFileRoute = require('./Routes/getFileRoute');
const activityPlanRoute = require("./Routes/activityPlanRoute");
const honorariumFormRoute = require("./Routes/honorariumFormRoute");
const OverallThesisRoute = require("./Routes/overallThesisRoute");
const formsSubmittedBySupervisorRoute = require("./Routes/formsSubmittedBySupervisorRoute");

// middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.use("/api/auth",authRoute);
app.use("/api/scholar",scholarRoute);
app.use("/api/professor",professorRoute);
app.use("/api/assignedThesis",assigned_thesisRoute);
app.use("/api/ceRep",ce_repRoute);
app.use("/api/vivaVoice",vivaVoiceRoute);
app.use("/api/courses",coursesRoute);
app.use("/api/draft",draftRoute);
app.use("/api/dsc",dscRoute);
app.use("/api/progressReport",progressReportRoute);
app.use("/api/pssRep",pss_repRoute);
app.use("/api/rpsRep",rps_repRoute);
app.use("/api/thesis",thesisRoute);
app.use("/api/thesisEval",thesis_evalRoute);
app.use("/api/admin",adminRoute);
app.use("/api/examiner",examinersRoute);
app.use("/api/forumThread",forumThreadRoute);
app.use("/api/forumReply",forumReplyRoute);
app.use("/api/supervisorAllocation",supervisorAllocationRoute);
app.use('/api/cwRequests', courseWaiverRequestsRoute);
app.use('/api/pssRequest', pssRequestsRoute);
app.use('/api/coursework', courseworkRoute);
app.use('/api/getFile', getFileRoute);
app.use("/api/activityPlan",activityPlanRoute);
app.use("/api/honorariumForm",honorariumFormRoute);
app.use("/api/overallThesis", OverallThesisRoute);
app.use("/api/fsbs", formsSubmittedBySupervisorRoute);


const PORT = process.env.PORT||5000;

db.sequelize.sync({force: false})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server listening on port ${PORT}`); 
    })
})
.catch((err)=>{
    console.log(err);
});

