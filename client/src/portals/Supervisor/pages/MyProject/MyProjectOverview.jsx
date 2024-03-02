import React, { useContext } from 'react';
import { Layout, Progress} from 'antd';
import "antd/dist/antd.css";
import { MyProjectNav } from '../../components';
import AssignedThesisContext from '../../../../context/assignedThesis/assignedThesisContext';
import { LineGraph } from "../../../../CommonComponents";
const {Content} = Layout;

function MyProjectOverview(){
  const assignedThesisContext = useContext(AssignedThesisContext);
  const{assignedThesis} = assignedThesisContext;
    return (
          <Content style={{ margin: "25px 25px" }}>
            <MyProjectNav  />
            <div className='site-layout-background' style={{marginLeft:'0px', padding:'10px'}}>
                <h3><u>Project Progress</u></h3>
                <div className='border rounded row' style={{margin:'10px'}}>
                <div style={{marginBottom:'10px'}}></div>
              <div className='col-8 ' style={{padding:'10px'}}>
                {assignedThesis!==null&&<LineGraph startDate={assignedThesis.start_date} admn={assignedThesis.scholarAdmn}/>}
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
            </div>
          </Content>
    )
}

export default MyProjectOverview;
