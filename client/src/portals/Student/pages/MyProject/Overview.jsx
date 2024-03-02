import React, { useContext, useEffect } from 'react'
import { Layout, Progress} from 'antd';
import "antd/dist/antd.css";
import { MyProjectNav } from '../../components';
import { LineGraph } from "../../../../CommonComponents";
import AssignedThesisContext from '../../../../context/assignedThesis/assignedThesisContext';
import AuthContext from '../../../../context/auth/authContext';
import Spinner from '../../../../CommonComponents/Spinner';
const {Content} = Layout;

function Overview(){
  const assignedThesisContext = useContext(AssignedThesisContext);
  const authContext = useContext(AuthContext)
  const{assignedThesis,checked,getAssignedThesisDetails} = assignedThesisContext;
  const{user} = authContext;
  const{admn} = user.dataValues;
  useEffect(()=>{
    getAssignedThesisDetails(admn);
  },[])
  if(checked==false) return <Spinner/>
  if(checked===true&&assignedThesis===null) return(
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
  )
    return (
          <Content style={{ margin: "25px 25px" }}>
            <MyProjectNav />
            
            <div className='row site-layout-background' style={{marginLeft:'0px', padding:'10px'}}>
                <h3><u>Project Progress</u></h3>
                <div style={{marginBottom:'10px'}}></div>
              <div className='col-8 ' style={{padding:'10px'}}>
                <LineGraph startDate={assignedThesis.start_date} admn={admn} />
              </div>
              <div className='col-4'>
                <div className='border' style={{marginBottom:'10px'}}>
                <h6 style={{paddingLeft: '20px', background: '#002140', color: 'white'}}>Upcoming Events</h6>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
               
                <div className='border' style={{marginBottom:'10px'}}>
                <h6 style={{paddingLeft: '20px', background: '#002140', color: 'white'}}>Latest Events</h6>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                
                <div className='border' style={{marginBottom:'10px'}}>
                <h6 style={{paddingLeft: '20px', background: '#002140', color: 'white'}}>Final Seminar Grade</h6>
                  XXXXXX XXXXXX XXXXXX XXXXXXXXXXXX
                </div>
              </div>
            </div>
          </Content>
    )
}

export default Overview;
