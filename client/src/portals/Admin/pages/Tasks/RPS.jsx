import React  from "react";
import { Layout, Button } from "antd";
import { tableIcons } from "../../../../CommonComponents";
import MaterialTable from "material-table";
const { Content } = Layout;

function CE() {
  const columns=[
    {title:"Admission No.",field:"id",editable: 'never'},
    {title:"Name",field:"name",editable: 'never'},
    {title:"Department",field:"department",editable: 'never'},
    {title:"CGPA",field:'cgpa',editable: 'never'},
    {title: "Status", field: "status", lookup: {0: 'Ineligible',1:'Eligible'}},

  ];
  const data=[
    {id:"19JE0215",name:"Ayush Tripathi",department:"Mathematics & Computing",cgpa:9.00,status:1},
    {id:"19JE0215",name:"Mrinal Pathak",department:"Applied Physics",cgpa:9.00,status:1},
    {id:"19JE0215",name:"Aditya Mishra",department:"Electrical",cgpa:9.00,status:1},
    {id:"19JE0215",name:"Pattewar Darshan",department:"Mathematics & Computing",cgpa:9.00,status:1}
  ]
  return (
        <Content style={{ margin: "25px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 400 }}
          >
            <div className="container-fluid" >
            <MaterialTable title="Research Proposal Seminar Eligibility list" columns={columns} data={data}
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
                  cellEditable={{
          onCellEditApproved: (newValue) => {
          return new Promise((resolve) => {
            console.log('newValue: ' + newValue);
            setTimeout(resolve, 1000);
          });
        }
      }}
            />
            
          <div className="container text-center">
            <Button type="primary">Submit</Button>
          </div>
            </div>
          </div>
        </Content>
  );
}

export default CE;