import React, { useState, useContext } from "react";
import { Button, Layout, notification } from "antd";
import "../index.css";
import { BellTwoTone } from "@ant-design/icons";
import AuthContext from '../context/auth/authContext';

const { Header } = Layout;

function Headerr() {
  const [size, setSize] = useState(window.innerWidth);
  const authContext = useContext(AuthContext);
  const {logout, notifications, unreadNotifications} = authContext;

  const openNotification = (placement) => {
    notifications.forEach(element => {
      notification.info({
        message: `${element.title}`,
        description: `${element.content}`,
        placement,
      });
    });
  };
  
  const onLogout = ()=>{
      logout();
  }
  React.useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });
  if (size < 1029) {
    return (
      <Header
        className="site-layout-background"
        style={{ padding: 0, height: "fit-content" }}
      >
        <span>
          <img
            src="https://moodle.iitism.ac.in/pluginfile.php/1/core_admin/logo/0x150/1633851416/IIT_ISM_Logo.png"
            alt="Indian Institute of Technology (ISM) Dhanbad"
            style={{ height: "65px", display: "inline", marginLeft: "20px" }}
          />
          <h3 style={{ color: "#396EB0", display: "inline" }}>
            IIT (ISM), Dhanbad
          </h3>
        </span>
        <div style={{float:"right", display:size<760?"none":"inherit"}}>
            <Button className="notif" data-count={unreadNotifications ? unreadNotifications : 0} spin="true" onClick={()=> openNotification('topRight')} style={{marginRight:"10px"}}>
        <BellTwoTone />
      </Button>
      <span>
        <Button onClick={onLogout} type="primary" danger style={{marginRight:"10px"}}>
          Log Out
        </Button>
      </span>
      </div>
      </Header>
    );
  } else {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <span>
          <img
            src="https://moodle.iitism.ac.in/pluginfile.php/1/core_admin/logo/0x150/1633851416/IIT_ISM_Logo.png"
            alt="Indian Institute of Technology (ISM) Dhanbad"
            style={{ height: "65px", display: "inline", marginLeft: "20px" }}
          />
          <h3 style={{ color: "#396EB0", display: "inline" }}>
            Indian Institute of Technology (ISM), Dhanbad
          </h3>
        </span>
        <div style={{float:"right"}}>
            <Button className="notif" data-count={unreadNotifications ? unreadNotifications : 0} spin="true" onClick={()=> openNotification('topRight')} style={{marginRight:"10px"}}>
        <BellTwoTone />
      </Button>
      <span>
        <Button onClick={onLogout} type="primary" danger style={{marginRight:"10px"}}>
          Log Out
        </Button>
      </span>
      </div>
      </Header>
    );
  }
}

export default Headerr;


// import React, { useState,useEffect,useContext } from 'react';
// import { Button,Layout,notification} from 'antd';
// import "../index.css";
// import "antd/dist/antd.css"
// import {
//   BellTwoTone
// } from '@ant-design/icons';
// import AuthContext from '../context/auth/authContext';

// const { Header } = Layout;

// const openNotification = placement => {
//   notification.info({
//     message: `Notification ${placement}`,
//     description:
//       'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//     placement,
//   });
// };

// function Headerr(){
//   const [size, setSize] =useState(window.innerWidth)
//   const authContext = useContext(AuthContext);
//   const {logout} = authContext;
//   const onLogout = ()=>{
//       logout();
//   }
//   React.useEffect(() => {
//     function handleResize() {
//       setSize(window.innerWidth)
//     }
//     window.addEventListener('resize', handleResize)
//   })
//   if(size < 767){
//     return(
//         <Header className="site-layout-background" style={{ padding: 0,height:"fit-content"}}>
//           <span><img src="https://moodle.iitism.ac.in/pluginfile.php/1/core_admin/logo/0x150/1633851416/IIT_ISM_Logo.png" alt="Indian Institute of Technology (ISM) Dhanbad" style={{height:"65px",display:"inline",marginLeft:"20px"}}/>
//           <h3 style={{color:"#396EB0",display:"inline"}}>IIT (ISM) Dhanbad</h3></span>
//           <div style={{float: 'right', margin: '10px',width:'130px',height:'35px'}}>
//         <Button onClick={openNotification} style={{float: 'right',marginTop:'15px'}}><BellTwoTone /></Button>
//         <Button type="primary" danger style={{float: 'right',marginTop:'15px'}}>
//             <a  href="#" onClick={onLogout}>Log Out</a>
//         </Button>
//         </div>
//         </Header>
//     );
//   }else{
//     return(
//       <Header className="site-layout-background" style={{ padding: 0}}>
//         <span><img src="https://moodle.iitism.ac.in/pluginfile.php/1/core_admin/logo/0x150/1633851416/IIT_ISM_Logo.png" alt="Indian Institute of Technology (ISM) Dhanbad" style={{height:"65px",display:"inline",marginLeft:"20px"}}/>
//         <h3 style={{color:"#396EB0",display:"inline"}}>Indian Institute of Technology (ISM), Dhanbad</h3></span>
//         <div style={{float: 'right', margin: '10px',width:'fit-Content',height:'auto'}}>
//         <Button spin="true" onClick={openNotification} style={{margin:'0 15px'}}><BellTwoTone /></Button>
//         <Button type="primary" danger style={{float: 'right',marginTop:'15px'}}>
//             <a href="#" onClick={onLogout}>Log Out</a>
//         </Button>
//         </div>
//       </Header>
//   );
//   }
// }

// export default Headerr;

