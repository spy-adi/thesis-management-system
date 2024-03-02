import React from "react";
import { Layout, Card, Col, Row,Typography } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title } = Typography;

function Tasks() {

  const { Meta } = Card;
  
  return (
    <Content style={{ margin: "25px 25px" }}>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={6}>
      <Link to={'/ad/tasks/upload_form'}>
      <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px"}}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description={<Title level={5}>Upload Form</Title>}
      bodyStyle={{fontSize:'2vw !important,fontWeight: bold;'}}
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={6}>
  <Link to={'/ad/tasks/ce'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description={<Title level={5}>Comprehensive Examination Eligibility list</Title>}
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={6}>
  <Link to={'/ad/tasks/rps'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description={<Title level={5}>Research Proposal Seminar Eligibility list</Title>}
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={6}>
  <Link to={'/ad/tasks/pss'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description={<Title level={5}>Pre-Submission Seminar Eligibility list</Title>}
    />
  </Card>
  </Link>
  </Col>

  <Col span={6}>
  <Link to={'/ad/tasks/request_thesis_consent'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description={<Title level={5}>Request for Evaluation Consent</Title>}
    />
  </Card>
  </Link>
  </Col>

  <Col span={6}>
  <Link to={'/ad/tasks/request_thesis_evaluation'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description={<Title level={5}>Request for Thesis Evaluation</Title>}
    />
  </Card>
  </Link>
  </Col>

    </Row>
    </Content>
  );
}

export default Tasks;
