import React, { useContext,useState } from "react";
import SupervisorGroupContext from "../../../../context/supervisorGroups/supervisorGroupContext";
import { Layout } from "antd";
import { tableIcons,Session } from "../../../../CommonComponents";
import "../../SupervisorApp.css";
import MaterialTable from "material-table";
const { Content } = Layout;
function Overview() {
  const flag = localStorage.getItem("showSession");
  const [showSession,setShowSession]=useState(flag);
  const supervisorGroupContext = useContext(SupervisorGroupContext);
  const{scholars,group} = supervisorGroupContext;
  const columns=[
    {title:"Admission No.",field:"id"},
    {title:"Name",field:"name"},
    {title:"Status",field:"status"},
    {title:"Details",filed:"url",render:(rowData)=>(
      <a href={rowData.url}>View</a>
    )},
  ];
  const data=scholars===""?[]:scholars.map(scholar=>{return {id:scholar.admn,name:scholar.name,status:scholar.status,url:`/sp/mygroupoverview/${scholar.admn}`}});
  function handleClick(props){
      setShowSession(false);
      localStorage.setItem("showSession","false");
    }

  return (
        <Content style={{ margin: "25px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 400 }}
          >
          <Session onClick={handleClick} style={{display:showSession==="true"?"inherit":"none",marginTop:"5%"}} group={group}/>
            <div className="container-fluid" style={{display:showSession==="true"?"none":"inherit"}} >
            <MaterialTable title="Scholars" columns={columns} data={data}
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

export default Overview;