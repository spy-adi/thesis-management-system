import React ,{useContext,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Layout } from "antd";
import { tableIcons } from "../../../../CommonComponents";
import "antd/dist/antd.css";
import MaterialTable from "material-table";
import ActivityPlanContext from "../../../../context/activityPlan/activityPlanContext";
import Spinner from "../../../../CommonComponents/Spinner";
import { MyProjectNav } from "../../components";
const { Content } = Layout;


function ActivityPlan() {
  const{scholar} = useParams();
  const activityPlanContext = useContext(ActivityPlanContext);
  const{activityPlan,getActivityPlanDetails,updateActivityPlan,checkedAp} = activityPlanContext;
  useEffect(()=>{
    getActivityPlanDetails(scholar);
  },[])
  
  if(checkedAp===false) return <Spinner/>
  if(activityPlan===null)
  return(
    <Content style={{ margin: "25px 25px" }}>
          <div
            className="site-layout-background text-center"
            style={{ padding: 24, minHeight: 400 }}
          >
          <div
            className="container-fluid"
            style={{
              marginTop: "15%",
              textAlign: "center",
              display: "inherit",
            }}
          >
            <h3>Activity Plan has not been set yet!</h3>
                </div>
          </div>
            </Content>
  );
  const data11 = [
    {
      id:1,
      sr: "1",
      action: "First meeting: Basics, agreements and getting ready",
      status:activityPlan.m1,
      date:activityPlan.m1_date.substring(0,10),
    },
    {
      id:2,
      sr: "2",
      action: "Peer Review - Project Plan",
      status:activityPlan.m2,
      date:activityPlan.m2_date.substring(0,10),
    },
    {
      id:3,
      sr: "3",
      action: "Submit Project Plan",
      status:activityPlan.m3,
      date:activityPlan.m3_date.substring(0,10),
    },
    {
      id:4,
      sr: "4",
      action: "Approval of Project Plan",
      status:activityPlan.m4,
      date:activityPlan.m4_date.substring(0,10),
    },
    {
      id:5,
      sr: "5",
      action:
        "Thesis text including: Research problem, aim and question(s) method",
        status:activityPlan.m5,
      date:activityPlan.m5_date.substring(0,10),
    },
  ];
  
  //Phase 2
  const data22 = [
    {
      id:6,
      sr: "1",
      action: "Data Collection                                               ",
      status:activityPlan.m6,
      date:activityPlan.m6_date.substring(0,10),
    },
  ];
  
  //Phase 3
  const data33 = [
    {
      id:7,
      sr: "1",
      action: "Thesis text including: results, discussion and conclusions",
      status:activityPlan.m7,
      date:activityPlan.m7_date.substring(0,10),
    },
  ];
  
  //Phase 4
  const data44 = [
    {
      id:8,
      sr: "1",
      action: "Submit Final Seminar Thesis                                    ",
      status:activityPlan.m8,
      date:activityPlan.m8_date.substring(0,10),
    },
    {
      id:9,
      sr: "2",
      action: "Final Seminar",
      status:activityPlan.m9,
      date:activityPlan.m9_date.substring(0,10),
    },
    {
      id:10,
      sr: "3",
      action: "Final Thesis - Revised version",
      status:activityPlan.m10,
      date:activityPlan.m10_date.substring(0,10),
    },
  ];
  
  //Phase 5
  const data55 = [
    { id:11,sr: "1", action: "Grading",status:activityPlan.m11,date:activityPlan.m11_date.substring(0,10) }
  ];
  


const columns = [
    { title: "Sr No", field: "sr",editable: 'never'},
    { title: "Action", field: "action",editable: 'never'},
    { title: "Due Date", field: "date",editable: 'never'},
    {title: "Current Status", field:"status" }    
  ];
 
  return (
    <Content style={{ margin: "25px 25px" }}>
      <MyProjectNav />
      <h3
        style={{
          background: "#002140",
          color: "white",
          marginTop: "20px",
          paddingLeft: "20px",
        }}
      >
        Activity Plan
      </h3>
      <div className="site-layout-background" style={{ padding: "20px" }}>
        <div>
          <h4
            style={{
              marginBottom: "0",
              paddingLeft: "20px",
              background: "#002140",
              color: "white",
            }}
          >
            Phase 1: Research Questions and Decision
          </h4>
          <MaterialTable
            defaultValue = ""
            title=""
            columns={columns}
            data={data11}
            icons={tableIcons} 
            options={{
              toolbar: false,
              paging: false,
              draggable:false,
              sorting:false,
            actionsColumnIndex: -1
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
        <div>
          <h4
            style={{
              marginBottom: "0",
              paddingLeft: "20px",
              background: "#002140",
              color: "white",
            }}
          >
            Phase 2: Implementation
          </h4>
          
          <MaterialTable
            title=""
            columns={columns}
            data={data22}
            icons={tableIcons} 
            options={{
              toolbar: false,
              paging: false,
              sorting:false,
              draggable:false,
            actionsColumnIndex: -1
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
        <div>
          <h4
            style={{
              marginBottom: "0",
              paddingLeft: "20px",
              background: "#002140",
              color: "white",
            }}
          >
            Phase 3: Result discussing and Conclusion
          </h4>
          
          <MaterialTable
            title=""
            columns={columns}
            data={data33}
            icons={tableIcons} 
            options={{
              toolbar: false,
              paging: false,
              sorting:false,
              draggable:false,
            actionsColumnIndex: -1
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
        <div>
          <h4
            style={{
              marginBottom: "0",
              paddingLeft: "20px",
              background: "#002140",
              color: "white",
            }}
          >
            Phase 4: Final Seminar
          </h4>
          
          <MaterialTable
            title=""
            columns={columns}
            data={data44}
            icons={tableIcons}
            options={{
              toolbar: false,
              paging: false,
              sorting:false,
              draggable:false,
            actionsColumnIndex: -1
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
        <div>
          <h4
            style={{
              marginBottom: "0",
              paddingLeft: "20px",
              background: "#002140",
              color: "white",
            }}
          >
            Phase 5: Grading
          </h4>
          
          <MaterialTable
            title=""
            columns={columns}
            data={data55}
            icons={tableIcons}
            options={{
              toolbar: false,
              paging: false,
              sorting:false,
              draggable:false,
            actionsColumnIndex: -1
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
      </div>
    </Content>
  );
  
}

export default ActivityPlan;
