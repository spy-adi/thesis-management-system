import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button, Space} from 'antd';
import AssignedThesisContext from '../../../context/assignedThesis/assignedThesisContext';
import DscContext from '../../../context/dsc/dscContext';
import ProfessorContext from '../../../context/professor/professorContext';
import ScholarContext from '../../../context/scholar/scholarContext';
import Spinner from '../../../CommonComponents/Spinner';
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';
function MyProjectNav() {
  const { project_id } = useParams();
  const assignedThesisContext = useContext(AssignedThesisContext);
  const dscContext = useContext(DscContext);
  const scholarContext = useContext(ScholarContext);
  const professorContext = useContext(ProfessorContext);
  const{scholarDetails,getScholarDetails} = scholarContext;
  const {dscDetails,chairman,getDscDetails} = dscContext;
  const {supervisorDetails,chairmanDetails,co_supervisorDetails,getProfDetails} = professorContext;
  const{assignedThesis,getAssignedThesisDetailsById,scholar,supervisor,co_supervisor,dsc} = assignedThesisContext;
  useEffect(()=>{
    getAssignedThesisDetailsById(project_id);
  },[]);
  useEffect(()=>{
    if(dsc!==null)getDscDetails(dsc);
    if(supervisor!==null)getProfDetails(supervisor,"supervisorDetails");
    if(co_supervisor!==null)getProfDetails(co_supervisor,"co_supervisorDetails");
    if(scholar!==null)getScholarDetails(scholar);
  },[dsc,supervisor,co_supervisor,scholar]);
  useEffect(()=>{
    if(chairman!==null) getProfDetails(chairman,"chairmanDetails");
},[chairman]);
  
  if(assignedThesis===null||supervisorDetails===null||co_supervisorDetails===null||scholarDetails===null||dscDetails===null||chairmanDetails===null) return<Spinner/>
  const data = [
    {project:assignedThesis.title, 
    date: assignedThesis.start_date.substring(0,10),  
    sup:supervisorDetails.name,
    coSup:co_supervisorDetails.name,
    dscc:chairmanDetails.name,
    student:scholarDetails.name
  }
  ]
  
  const columns = [
    { title: "My Project", field: "project" },
    { title: "Start Date", field: "date" },
    { title: "Scholar", field: "student"},
    { title: "Supervisor", field: "sup"},
    { title: "Co-Supervisor", field: "coSup"},
    { title: "DSC Chairman", field: "dscc"}
  ];
  return (
    <div style={{marginBottom: '20px'}}>
    <Space style={{marginBottom: '10px'}}>
    <Button type="primary">
        <Link to='/sp/myproject'>
          Back
        </Link>
      </Button>
      <Button type="primary">
        <Link to={`/sp/myproject/${scholarDetails.admn}/${project_id}`}>
          Overview
        </Link>
      </Button>
      <Button type="primary">
        <Link to={`/sp/myproject/${scholarDetails.admn}/${project_id}/activityplan`}>
          Activity Plan
        </Link>
      </Button>
      <Button type="primary">
        <Link to={`/sp/myproject/${scholarDetails.admn}/${project_id}/final`}>
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