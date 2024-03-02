import React,{useContext,useEffect,useState} from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import MaterialTable from "material-table";
import { MyProjectNav } from "../../components";
import { tableIcons } from "../../../../CommonComponents";
import { Selector } from "../../../../CommonComponents";
import AssignedThesisContext from '../../../../context/assignedThesis/assignedThesisContext';
import AuthContext from '../../../../context/auth/authContext';
import ActivityPlanContext from "../../../../context/activityPlan/activityPlanContext";
import Spinner from '../../../../CommonComponents/Spinner';
const { Content } = Layout;
function ActivityPlan() {
  const assignedThesisContext = useContext(AssignedThesisContext);
  const authContext = useContext(AuthContext);
  const activityPlanContext = useContext(ActivityPlanContext);
  const{activityPlan,getActivityPlanDetails,updateActivityPlan,checkedAp} = activityPlanContext;
  const{assignedThesis,checked,getAssignedThesisDetails} = assignedThesisContext;
  const{user} = authContext;
  const{admn} = user.dataValues;

  
   const data11 = [
    {
      id:1,
      sr: "1",
      action: "First meeting: Basics, agreements and getting ready",
      status:activityPlan===null?"Incomplete":activityPlan.m1,
      date: activityPlan===null?"XX/XX/XXXX":activityPlan.m1_date.substring(0,10),
    },
    {
      id:2,
      sr: "2",
      action: "Peer Review - Project Plan",
      status:activityPlan===null?"Incomplete":activityPlan.m2,
      date: activityPlan===null?"XX/XX/XXXX":activityPlan.m2_date.substring(0,10),
    },
    {
      id:3,
      sr: "3",
      action: "Submit Project Plan",
      status:activityPlan===null?"Incomplete":activityPlan.m3,
      date: activityPlan===null?"XX/XX/XXXX":activityPlan.m3_date.substring(0,10),
    },
    {
      id:4,
      sr: "4",
      action: "Approval of Project Plan",
      status:activityPlan===null?"Incomplete":activityPlan.m4,
      date: activityPlan===null?"XX/XX/XXXX":activityPlan.m4_date.substring(0,10),
    },
    {
      id:5,
      sr: "5",
      action:
        "Thesis text including: Research problem, aim and question(s) method",
        status:activityPlan===null?"Incomplete":activityPlan.m5,
      date: activityPlan===null?"XX/XX/XXXX":activityPlan.m5_date.substring(0,10),
    },
  ];
  
  //Phase 2
  const data22 = [
    {
      id:6,
      sr: "1",
      action: "Data Collection                                               ",
      status:activityPlan===null?"Incomplete":activityPlan.m6,
      date: activityPlan===null?"XX/XX/XXXX":activityPlan.m6_date.substring(0,10),
    },
  ];
  
  //Phase 3
  const data33 = [
    {
      id:7,
      sr: "1",
      action: "Thesis text including: results, discussion and conclusions",
      status:activityPlan===null?"Incomplete":activityPlan.m7,
      date: activityPlan===null?"XX/XX/XXXX":activityPlan.m7_date.substring(0,10),
    },
  ];
  
  //Phase 4
  const data44 = [
    {
      id:8,
      sr: "1",
      action: "Submit Final Seminar Thesis                                    ",
      status:activityPlan===null?"Incomplete":activityPlan.m8,
      date: activityPlan===null?"XX/XX/XXXX":activityPlan.m8_date.substring(0,10),
    },
    {
      id:9,
      sr: "2",
      action: "Final Seminar",
      status:activityPlan===null?"Incomplete":activityPlan.m9,
      date: activityPlan===null?"XX/XX/XXXX":activityPlan.m9_date.substring(0,10),
    },
    {
      id:10,
      sr: "3",
      action: "Final Thesis - Revised version",
      status:activityPlan===null?"Incomplete":activityPlan.m10,
      date: activityPlan===null?"XX/XX/XXXX":activityPlan.m10_date.substring(0,10),
    },
  ];
  
  //Phase 5
  const data55 = [
    { id:11,sr: "1", action: "Grading",status:activityPlan===null?"Incomplete":activityPlan.m11,date:activityPlan===null?"XX/XX/XXXX":activityPlan.m11_date.substring(0,10) }
  ];
  

  const options =["incomplete","completed"];
  let [data1,setdata1] = useState(data11);
  let [data2,setdata2] = useState(data22);
  let [data3,setdata3] = useState(data33);
  let [data4,setdata4] = useState(data44);
  let [data5,setdata5] = useState(data55);
  function handleChange(props){
    let found=false;
    if(!found){
      data1.find((item)=>{
        if(item.id===props.id){
          item.status=props.value;
          setdata1(data1);
          found = true;
          return true;
        }
      });
    }
    if(!found){
      data2.find((item)=>{
        if(item.id===props.id){
          item.status=props.value;
          setdata2(data2);
          found = true;
          return true;
        }
      });
    }
    if(!found){
      data3.find((item)=>{
        if(item.id===props.id){
          item.status=props.value;
          setdata3(data3);
          found = true;
          return true;
        }
      });
    }
    if(!found){
      data4.find((item)=>{
        if(item.id===props.id){
          item.status=props.value;
          setdata4(data4);
          found = true;
          return true;
        }
      });
    }
    if(!found){
      data5.find((item)=>{
        if(item.id===props.id){
          item.status=props.value;
          setdata5(data5);
          found = true;
          return true;
        }
      });
    }
    console.log(props.id,props.value);
      const date = new Date().toISOString().slice(0, 10);
      const updatedata = {data:{[`m${props.id}`]:`${props.value}`,[`m${props.id}_updated_date`]:(`${date}`)}} 
      updateActivityPlan(updatedata.data,admn)
    
    
  }
  useEffect(()=>{
    getAssignedThesisDetails(admn);
    getActivityPlanDetails(admn);
  },[])
  
  if(checked==false&&checkedAp===false) return <Spinner/>
  if(checked===true&&checkedAp===true) {
    if(assignedThesis===null)
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
            <h3>Project has not been assigned yet!</h3>
                </div>
          </div>
            </Content>
  );
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
}
data1=data11;
data2=data22;
data3=data33;
data4=data44;
data5=data55;

const columns = [
    { title: "Sr No", field: "sr",editable: 'never'},
    { title: "Action", field: "action",editable: 'never'},
    { title: "Due Date", field: "date",editable: 'never'},
    {title: "Current Status", field:"status" },
    { title: "Set Status",
      render: (rowData) => (
        <Selector
          id={rowData.id}
          list={options}
          placeholder="Incomplete"
          style={{ width: "150px", height: "40px" }}
          onChange={handleChange}
        ></Selector>
      )
    },
    
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
            data={data2}
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
            data={data3}
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
            data={data4}
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
            data={data5}
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