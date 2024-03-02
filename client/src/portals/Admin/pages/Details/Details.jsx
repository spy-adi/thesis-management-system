import React from "react";
import { Layout, Card, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title } = Typography;

function Details() {

  const { Meta } = Card;
  return (
    <Content style={{ margin: "25px 25px" }}>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={6}>
      <Link to={'/ad/details/scholar'}>
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
      description={<Title level={5}>Scholar</Title>}
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={6}>
  <Link to={'/ad/details/supervisor'}>
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
      description={<Title level={5}>Supervisor</Title>}
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={6}>
  <Link to={'/ad/details/examiner'}>
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
      description={<Title level={5}>Examiner</Title>}
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={6}>
  <Link to={'/ad/details/dsc'}>
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
      description={<Title level={5}>DSC</Title>}
    />
  </Card>
  </Link>
  </Col>

  <Col span={6}>
  <Link to={'/ad/details/thesis'}>
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
      description={<Title level={5}>Thesis</Title>}
    />
  </Card>
  </Link>
  </Col>
  <Col span={6}>
  <Link to={'/ad/details/forms'}>
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
      description={<Title level={5}>Forms</Title>}
    />
  </Card>
  </Link>
  </Col>
    </Row>
    </Content>
  );
}

export default Details;
