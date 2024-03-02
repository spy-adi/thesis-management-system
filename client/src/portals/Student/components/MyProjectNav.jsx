import React ,{useContext,useEffect} from 'react';
import 'antd/dist/antd.css';
import { Button, Space} from 'antd';
import AuthContext from '../../../context/auth/authContext';
import DscContext from '../../../context/dsc/dscContext';
import ProfessorContext from '../../../context/professor/professorContext';
import AssignedThesisContext from '../../../context/assignedThesis/assignedThesisContext';
import Spinner from '../../../CommonComponents/Spinner';
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';

function MyProjectNav() {
  const authContext = useContext(AuthContext);
  const dscContext = useContext(DscContext);
  const assignedThesisContext = useContext(AssignedThesisContext);
  const professorContext = useContext(ProfessorContext);
  const {assignedThesis,getAssignedThesisDetails} = assignedThesisContext;
  const {dscDetails,chairman,getDscDetails} = dscContext;
  const {supervisorDetails,chairmanDetails,co_supervisorDetails,getProfDetails} = professorContext;
  const {user} = authContext;
  const {admn,name,dscId,supervisorId,co_supervisorId} = user.dataValues;
  useEffect(()=>{
    getDscDetails(dscId);
    getProfDetails(supervisorId,"supervisorDetails");
    getProfDetails(co_supervisorId,"co_supervisorDetails");
    getAssignedThesisDetails(admn);
    //eslint-disable-next-line
  },[]);
  useEffect(()=>{
    if(chairman!==null) getProfDetails(chairman,"chairmanDetails");
  },[chairman]);
  if(dscDetails===null||supervisorDetails===null||co_supervisorDetails===null) return <Spinner/>
  if(chairmanDetails===null) return <Spinner/>
  const data = [
    {project:assignedThesis.title, 
    date: assignedThesis.start_date.substring(0,10),  
    sup:supervisorDetails.name,
    coSup:co_supervisorDetails.name,
    dscc:chairmanDetails.name,
    student:name
  }
  ]
  
  const columns = [
    { title: "My Project", field: "project" },
    { title: "Start Date", field: "date" },
    { title: "Scholar", field: "student"},
    { title: "Supervisor", field: "sup"},
    { title: "Co-Supervisor", field: "coSup"},
    { title: "DSC Chairman", field: "dscc"},
  ];
  return (
    <div style={{marginBottom:'20px'}}>
    <Space style={{marginBottom: '10px'}}>
      <Button type="primary">
        <Link to='/st/myprojectOverview'>
          Overview
        </Link>
      </Button>
      <Button type="primary">
        <Link to='/st/myprojectActivityPlan'>
          Activity Plan
        </Link>
      </Button>
      <Button type="primary">
        <Link to='/st/myprojectFinal'>
         Final Seminar
        </Link>
      </Button>
    </Space>

    <MaterialTable title="" columns={columns} data={data}
                    options={{
                        toolbar:false , paging:false
                        }}
                />
      </div>
  );
}

export default MyProjectNav;