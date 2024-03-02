import React from "react";
import { Layout } from "antd";
import { tableIcons} from "../../../../CommonComponents";
import "../../AdminApp.css";
import MaterialTable from "material-table";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

function Examiner() {
  const navigate = useNavigate();
  const columns=[
    {title:"Examiner Id",field:"id"},
    {title:"Name",field:"name"},
    {title:"Institute",field:"institute"},
    {title:"Email",field:"email"},
    {title:"Contact",field:"contact"}
  ];
  const data=[
    {id:"1",name:"Oliver Hansen",institute:"Standford",email:"olivhans@yahoo.com",contact:"(600) 764-9595"},
    {id:"2",name:"Van Henry",institute:"CALTECH",email:"Vanhan@rediffmail.com",contact:"(324) 601-1687"},
    {id:"3",name:"April Tucker",institute:"MIT",email:"tucker@outlook.com",contact:"(682) 585-5838"},
    {id:"4",name:"Ralph Hubbard",institute:"QUT",email:"Hubbard@gmail.com",contact:"(742) 503-4960"}
  ]
  return (
        <Content style={{ margin: "10px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding:"24px",minHeight: 400 }}
          >
            <MaterialTable
                  title="Examiners"
                  data={data}
                  columns={columns}
                  icons={tableIcons}
                  actions={[
                  {
                    icon: tableIcons.Add,
                    tooltip: 'Add',
                    isFreeAction: true,
                    onClick: (event, rowData) => navigate('/ad/add_new/examiner')
                  },
                  {
                    icon: tableIcons.Edit,
                    tooltip: 'Edit',
                    onClick: (event, rowData) => navigate('/ad/add_new/examiner'+rowData.id)
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

export default Examiner;