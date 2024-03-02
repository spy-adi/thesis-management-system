import React from "react";
import { Layout } from "antd";
import { tableIcons} from "../../../../CommonComponents";
import "../../AdminApp.css";
import MaterialTable from "material-table";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

function DSC() {
  const navigate = useNavigate();
  const columns=[
    {title:"Sr No",field:"id"},
    {title:"Chairman",field:"chairman"},
    {title:"Members",field:"mem"},
    {title:"Students",field:"url",render:(rowData)=>(
      <a href={rowData.url}>View</a>
    )},
  ];
  const data=[
    {id:"1",chairman:"Oliver Hansen",mem:"Ralph Hubbard, April Tucker, Van Henry, Carlos Abbott, Omar Alexander",url:"/sp/mygroupoverview/Adm_No"},
  ]
  return (
        <Content style={{ margin: "10px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding:"24px",minHeight: 400 }}
          >
            <MaterialTable
                  title="DSC"
                  data={data}
                  columns={columns}
                  icons={tableIcons}
                  actions={[
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

export default DSC;