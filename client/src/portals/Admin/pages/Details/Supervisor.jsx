import React from "react";
import { Layout } from "antd";
import { tableIcons} from "../../../../CommonComponents";
import "../../AdminApp.css";
import MaterialTable from "material-table";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

function Supervisor() {
  const navigate = useNavigate();
  const columns=[
    {title:"Supervisor Id",field:"id"},
    {title:"Name",field:"name"},
    {title:"Department",field:"department"},
    {title:"Details",field:"url",render:(rowData)=>(
      <a href={rowData.url}>View</a>
    )},
  ];
  const data=[
    {id:"1",name:"Oliver Hansen",department:"Mathematics & Computing",url:"/sp/mygroupoverview/Adm_No"},
    {id:"2",name:"Van Henry",department:"Applied Physics",url:"/sp/mygroupoverview/Adm_No"},
    {id:"3",name:"April Tucker",department:"Electrical",url:"/sp/mygroupoverview/Adm_No"},
    {id:"4",name:"Ralph Hubbard",department:"Mathematics & Computing",url:"/sp/mygroupoverview/Adm_No"}
  ]
  return (
        <Content style={{ margin: "10px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding:"24px",minHeight: 400 }}
          >
            <MaterialTable
                  title="Supervisors"
                  data={data}
                  columns={columns}
                  icons={tableIcons}
                  actions={[
                  {
                    icon: tableIcons.Add,
                    tooltip: 'Add',
                    isFreeAction: true,
                    onClick: (event, rowData) => navigate('/ad/add_new/supervisor')
                  },
                  {
                    icon: tableIcons.Edit,
                    tooltip: 'Edit',
                    onClick: (event, rowData) => navigate('/ad/add_new/supervisor'+rowData.id)
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
                />
            </div>
        </Content>
  );
}

export default Supervisor;