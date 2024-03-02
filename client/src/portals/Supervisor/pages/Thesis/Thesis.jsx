import React,{useContext,useEffect} from "react";
import { Layout } from "antd";
import "../../SupervisorApp.css";
import { tableIcons } from "../../../../CommonComponents";
import AuthContext from "../../../../context/auth/authContext";
import AssignedThesisContext from "../../../../context/assignedThesis/assignedThesisContext";
import MaterialTable from "material-table";
import Spinner from "../../../../CommonComponents/Spinner";

const { Content } = Layout;

function Overview() {
  const authContext = useContext(AuthContext);
  const assignedThesisContext = useContext(AssignedThesisContext);
  const{user} = authContext;
  const{profId} = user.dataValues;
  const{Theses,getAssignedThesisDetailsBySupervisor,checked} = assignedThesisContext;
  useEffect(()=>{
    getAssignedThesisDetailsBySupervisor(profId);
  },[]);
  if(checked===false) return <Spinner/>
  const columns = [
    // { title: "ID", field: "id" },
    { title: "Title", field: "title" },
    { title: "Submitted By", field: "scholar" },
    { title: "Submission Date", field: "sd", type: "date" },
    {
      title: "Details",
      filed: "url",
      render: (rowData) => <a href={rowData.url}>View</a>,
    },
  ];
  let data = Theses===""?[]:Theses.filter((thesis)=>(thesis.thesis_submission_date!==null&&thesis.phd_degree==="pending"))
   data = data.map((thesis,index)=>
  {  return (
      {title:thesis.title,scholar:thesis.scholarAdmn,sd:thesis.thesis_submission_date.substring(0,10),url:`/sp/thesis/${thesis.scholarAdmn}/${thesis.id}`})
  });
  
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <MaterialTable title="Thesis" columns={columns} data={data}
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
    </Content>
  );
}

export default Overview;
