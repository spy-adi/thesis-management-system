import React from "react";
import { Layout } from "antd";
import "../ConsentApp.css";

const { Content } = Layout;

function ConsentConfirmation() {
    
  return (
    <Content style={{ margin: "25px 25px" }}>
    <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
      <div
        style={{
          marginTop:'100px',
          textAlign:'center'
        }}
      >
        <div><h2>Thank You for submitting response.</h2></div>
        <div><p>Further details will be mailed to you by the respective authority.</p></div>
      </div>
      </div>
    </Content>
  );
}

export default ConsentConfirmation;
