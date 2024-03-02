import React, { useState,useEffect } from "react";
import { Layout } from "antd";
import { tableIcons,Session } from "../../../../../CommonComponents";
import "../../../AdminApp.css";
import MaterialTable from "material-table";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

function Scholar() {
  const flag = localStorage.getItem("showSession");
  const [showSession,setShowSession]=useState(flag);
  console.log(localStorage.getItem("showSession"));
  console.log(showSession)
  function handleClick(props){
    setShowSession("false");
    localStorage.setItem("showSession","false");
  }

  const navigate = useNavigate();
  const columns=[
    {title:"Admission No.",field:"id"},
    {title:"Name",field:"name"},
    {title:"Department",field:"department"},
    {title:"Details",field:"url",render:(rowData)=>(
      <a href={rowData.url}>View</a>
    )},
  ];
  const data=[
    {id:"19JE0072",name:"Ayush Tripathi",department:"Mathematics & Computing",url:"/ad/details/scholar/Adm_No"},
    {id:"19JE0215",name:"Mrinal Pathak",department:"Applied Physics",url:"//ad/details/scholar/Adm_No"},
    {id:"19JE0064",name:"Aditya Mishra",department:"Electrical",url:"/ad/details/scholar/Adm_No"},
    {id:"19JE0599",name:"Pattewar Darshan",department:"Mathematics & Computing",url:"/ad/details/scholar/Adm_No"}
  ]
  return (
        <Content style={{ margin: "10px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding:"24px",minHeight: 400 }}
          >
            <Session onClick={handleClick} style={{display:showSession==="true"?"block":"none",marginTop:"5%"}}/>
            <MaterialTable
                  title="Scholars"
                  data={data}
                  columns={columns}
                  icons={tableIcons}
                  actions={[
                  {
                    icon: tableIcons.Add,
                    tooltip: 'Add',
                    isFreeAction: true,
                    onClick: (event, rowData) => navigate('/ad/add_new/scholar')
                  },
                  {
                    icon: tableIcons.Edit,
                    tooltip: 'Edit',
                    onClick: (event, rowData) => navigate('/ad/add_new/scholar'+rowData.id)
                  },
                  {
                    icon: tableIcons.Delete,
                    tooltip: 'Delete',
                    // eslint-disable-next-line no-restricted-globals
                    onClick: (event, rowData) => confirm('You want to delete '+rowData.name)
                  }
                  ]}
                  options={{
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
                    actionsColumnIndex: -1, 
                    addRowPosition: "first"
                  }}
                  style={{display:showSession==="true"?"none":"block"}} 
                />
            </div>
        </Content>
  );
}

export default Scholar;