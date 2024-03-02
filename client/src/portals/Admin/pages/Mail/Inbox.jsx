/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Input, Layout, Row,Col,Pagination } from "antd";
import "../../AdminApp.css";
import { SearchOutlined } from "@material-ui/icons";
import { MailSidebar } from "../../components";

const { Content } = Layout;
const listitems = [];

for (let i = 0; i < 5; i++) {
  listitems.push(
    <div className="card" style={{ border: 0 }}>
      <div
        className="card-header"
        style={{ fontFamily: "Open Sans", fontWeight: "bold" }}
      >
        <a style={{color:"#3D56B2"}} href="/ad/inbox/email">Velit a Labore</a>
        <time style={{ float: "right" }} class="hidden-sm-down" datetime="2017">
          12:35 AM
        </time>
      </div>
      <div className="card-body">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s.
      </div>
    </div>
  );
}
function Inbox() {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div className="container-fluid card" style={{minHeight:500}}>
      <div className="container">
        <Row>
          <Col span={18} push={6}>
            <Input type="search" style={{width:"55%",marginBottom:"30px"}}/><SearchOutlined/>
            {listitems}
            <Pagination style={{float:"right",margin:"20px 0"}} defaultCurrent={1} total={50} />
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

export default Inbox;