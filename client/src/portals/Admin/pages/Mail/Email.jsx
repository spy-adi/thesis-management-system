import React from "react";
import { Layout,Col,Row,Divider } from "antd";
import "../../AdminApp.css";
import { MailSidebar } from "../../components";
import {CaretDownOutlined} from "@ant-design/icons"
const { Content } = Layout;

function Email() {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div className="container-fluid card" style={{minHeight:500}}>
      <div className="container">
        <Row>
          <Col span={18} push={6}>
          <Divider type="vertical"></Divider>
            <div>
              <h4 style={{fontFamily:"Open Sans"}}>Velit a Labore</h4>
              <br/>
              <span>
                <b style={{fontFamily:"Open Sans"}}>dean@iitism.ac.in</b>
              </span>
              <br/>
                to me <CaretDownOutlined />
            </div>
            <div style={{marginTop:"50px",fontSize:"1.05rem"}}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
            It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <br/>
            <p>Dean Academic<br/>IIT(ISM) DHANBAD</p>
            </div>
          </Col>
          <Col span={6} pull={18}>
            <MailSidebar/>
          </Col>
        </Row>
        </div>
      </div>
    </Content>
  );
}

export default Email;
