import React, { useContext, useEffect } from "react";
import { Layout } from "antd";
import { tableIcons } from "../../../../CommonComponents";
import "../../SupervisorApp.css";
import AuthContext from "../../../../context/auth/authContext";
import AssignedThesisContext from "../../../../context/assignedThesis/assignedThesisContext";
import MaterialTable from "material-table";
import Spinner from "../../../../CommonComponents/Spinner";
const { Content } = Layout;

function MyProject() {
  const authContext = useContext(AuthContext);
  const assignedThesisContext = useContext(AssignedThesisContext);
  const{user} = authContext;
  const{profId} = user.dataValues;
  const{Theses,getAssignedThesisDetailsBySupervisor,checked} = assignedThesisContext;
  useEffect(()=>{
    getAssignedThesisDetailsBySupervisor(profId);
  },[]);
  if(checked===false) return <Spinner/>
  const columns=[
    {title:"Title",field:"title",filed:"url"},
    {title:"Scholar Admission No.",field:"scholar"},
    {title:"Start date",field:"sd"},
    {title:"Details",filed:"url",render:(rowData)=>(
      <a href={rowData.url}>View</a>
    )},
  ];
  const data = (Theses===""||Theses[0]===""||Theses===null)?[]:Theses.map(thesis=>{return {title:thesis.title,scholar:thesis.scholarAdmn,sd:thesis.start_date.substring(0,10),url:`/sp/myproject/${thesis.scholarAdmn}/${thesis.id}`}});;
  
  return (
        <Content style={{ margin: "25px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 400 }}
          >
            <div className="container-fluid" >
            <MaterialTable title="My Project" columns={columns} data={data}
              icons={tableIcons}
              options={{
                    // toolbar: false,
                    search:true,
                    paging: false,
                    draggable: false,
                    sorting: false,
                    headerStyle: {
                      backgroundColor: "#002140",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontFamily: "Open Sans",
                    },
                  }}
            />
            </div>
          </div>
        </Content>
  );
}

export default MyProject;