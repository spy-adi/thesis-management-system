import React from "react";
import {Button} from "antd";
import { MailOutlined,StarOutlined,SendOutlined,FileOutlined,DeleteOutlined } from "@ant-design/icons";
function MailSidebar() {
    return(
            <div>
              <h5>Mail Service</h5>
            <p>adean@iitism.ac.in</p>
            <br/>
            <a href="/ad/inbox/compose"><Button type="primary">Compose Mail</Button></a>
            <div className="card lii" style={{fontSize:"1.1rem",marginTop:"30px",textAlign:"left",width:"170px",border:0}}>
              <div style={{margin:"8px 0"}}><a href="#" style={{color:"white"}}><span style={{margin:"5px 10px"}}><MailOutlined/></span>Inbox</a></div>
              <div style={{padding:"8px 0"}}><a href="#" style={{color:"white"}}><span style={{margin:"5px 10px"}}><SendOutlined/></span>Sent Mail</a></div>
              <div style={{padding:"8px 0"}}><a href="#" style={{color:"white"}}><span style={{margin:"5px 10px"}}><StarOutlined/></span>Importants</a></div>
              <div style={{padding:"8px 0"}}><a href="#" style={{color:"white"}}><span style={{margin:"5px 10px"}}><FileOutlined/></span>Drafts</a></div>
              <div style={{padding:"8px 0"}}><a href="#" style={{color:"white"}}><span style={{margin:"5px 10px"}}><StarOutlined/></span>Tags</a></div>
              <div style={{padding:"8px 0"}}><a href="#" style={{color:"white"}}><span style={{margin:"5px 10px"}}><DeleteOutlined/></span>Trash</a></div>
            </div>
            </div>
    );
}

export default MailSidebar;