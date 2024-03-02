import React, { Fragment, useContext, useEffect } from 'react';
import { Progress} from 'antd';
import { Line } from '@ant-design/charts';
import ActivityPlanContext from '../context/activityPlan/activityPlanContext';
import Spinner from './Spinner';

const LineGraph = ({startDate,admn}) => {
  const activityPlanContext = useContext(ActivityPlanContext);
  const{activityPlan,getActivityPlanDetails,checkedAp} = activityPlanContext;
  useEffect(()=>{
    getActivityPlanDetails(admn);
  },[]);
  if(checkedAp===false) return <Spinner/>
  const {m1_updated_date,m2_updated_date,m3_updated_date,m4_updated_date,m5_updated_date,m6_updated_date,m7_updated_date,m8_updated_date,m9_updated_date,m10_updated_date,m11_updated_date,m1_date,m2_date,m3_date,m4_date,m5_date,m6_date,m7_date,m8_date,m9_date,m10_date,m11_date,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11} = activityPlan;
  let i=0;
  const days=(a,b,c=false)=>{
    if(c===true) i++;
    a= new Date(a);
    b = new Date(b);
    var Difference_In_Time = -a.getTime() + b.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return (Difference_In_Days).toString();
  }
  
  // for( i=1;i<=11;i++){
  //   if([`m${i}`]==="completed"){i++}
  // }
  const data = [
    { 
      milestones: 0,
      days: "0",
      category: "Estimated Timeline",
    },
    { 
      milestones: 1,
      days: days(startDate,m1_date),
      category: "Estimated Timeline",
    },
    { 
      milestones: 2,
      days: days(startDate,m2_date),
      category: "Estimated Timeline",
    },
    { 
      milestones: 3,
      days: days(startDate,m3_date),
      category: "Estimated Timeline",
    },
    { 
      milestones: 4,
      days: days(startDate,m4_date),
      category: "Estimated Timeline",
    },
    { 
      milestones: 5,
      days: days(startDate,m5_date),
      category: "Estimated Timeline",
    },
    { 
      milestones: 6,
      days: days(startDate,m6_date),
      category: "Estimated Timeline",
    },
    { 
      milestones: 7,
      days: days(startDate,m7_date),
      category: "Estimated Timeline",
    },
    { 
      milestones: 8,
      days: days(startDate,m8_date),
      category: "Estimated Timeline",
    },
    { 
      milestones: 9,
      days: days(startDate,m9_date),
      category: "Estimated Timeline",
    },
    { 
      milestones: 10,
      days: days(startDate,m10_date),
      category: "Estimated Timeline",
    },
    { 
      milestones: 11,
      days: days(startDate,m11_date),
      category: "Estimated Timeline",
    },
    m1==="completed"&&{
      milestones: 1,
      days: days(startDate,m1_updated_date,true),
      category: 'Actual Timeline',
    },
    (m1==="completed"&&m2==="completed")&&{
      milestones: 2,
      days: days(startDate,m2_updated_date,true),
      category: 'Actual Timeline',
    },
    (m2==="completed"&&m3==="completed")&&{
      milestones: 3,
      days: days(startDate,m3_updated_date,true),
      category: 'Actual Timeline',
    },
   ( m3==="completed"&&m4==="completed")&&{
      milestones: 4,
      days: days(startDate,m4_updated_date,true),
      category: 'Actual Timeline',
    },
    (m4==="completed"&&m5==="completed")&&{
      milestones: 5,
      days: days(startDate,m5_updated_date,true),
      category: 'Actual Timeline',
    },
    (m5==="completed"&&m6==="completed")&&{
      milestones: 6,
      days: days(startDate,m6_updated_date,true),
      category: 'Actual Timeline',
    },
    (m6==="completed"&&m7==="completed")&&{
      milestones: 7,
      days: days(startDate,m7_updated_date,true),
      category: 'Actual Timeline',
    },
    (m7==="completed"&&m8==="completed")&&{
      milestones: 8,
      days: days(startDate,m8_updated_date,true),
      category: 'Actual Timeline',
    },
    (m8==="completed"&&m9==="completed")&&{
      milestones: 9,
      days: days(startDate,m9_updated_date,true),
      category: 'Actual Timeline',
    },
    (m9==="completed"&&m10==="completed")&&{
      milestones: 10,
      days: days(startDate,m10_updated_date,true),
      category: 'Actual Timeline',
    },
    (m10==="completed"&&m11==="completed")&&{
      milestones: 11,
      days: days(startDate,m11_updated_date,true),
      category: 'Actual Timeline',
    },
  ];
  const config = {
    data,
    xField: 'milestones',
    yField: 'days',
    seriesField:"category",
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };

  return <Fragment>
    <div>{days(new Date().toISOString().slice(0, 10),m11_date)} days remaining</div>
    <Progress percent={Math.round(((i/11)*100))} status='active' />
    <Line {...config} />
  </Fragment>;
};

export default LineGraph;