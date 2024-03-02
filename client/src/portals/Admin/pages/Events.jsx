import React, { useState } from "react";
import { Layout, Card, Col, Row, Button, Modal, Input, DatePicker,Form } from "antd";
import { AddCircleOutlined } from "@material-ui/icons";

const {TextArea} = Input
const { Content } = Layout;

function Events() {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  function showUploadDialog() {
    setIsModalVisible(true);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleOk = () => {
    form.submit();
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log(values);
    setIsModalVisible(false);
  };
  // const eventCard =
  //   <Card hoverable className="shadow" title="Event">
  //     Start Date: XX/XX/XXX
  //     <br />
  //     End Date: XX/XX/XXX
  //     <br />
  //     <br />
  //     Description: Lorem Ipsum is simply dummy text of the printing and
  //     typesetting industry. Lorem Ipsum has been the industry's standard dummy
  //     text ever since the 1500s
  //   </Card>;
  return (
    <Content style={{ margin: "25px 25px" }}>
      <Button
        onClick={showUploadDialog}
        type="primary"
        size="large"
        icon={<AddCircleOutlined />}
      >
        Create New
      </Button>
      <div className="container">
        <h4>Ongoing Events</h4>
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={12} lg={8}>
          <Card hoverable className="shadow" title="Event">
              Start Date: 05/01/2022
              <br />
              End Date: 09/01/2022
              <br />
              <br />
              Description: Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s
            </Card>;
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            {/* {eventCard} */}
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            {/* {eventCard} */}
          </Col>
        </Row>
      </div>
      <div className="container">
        <h4>Upcoming Events</h4>
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={12} lg={8}>
          <Card hoverable className="shadow" title="Event">
              Start Date: 10/01/2022
              <br />
              End Date: 13/01/2022
              <br />
              <br />
              Description: Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s
            </Card>;
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            {/* {eventCard} */}
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            {/* {eventCard} */}
          </Col>
        </Row>
      </div>
      <div className="container">
        <h4>Completed Events</h4>
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={12} lg={8}>
          <Card hoverable className="shadow" title="Event">
              Start Date: 30/12/2021
              <br />
              End Date: 04/01/2022
              <br />
              <br />
              Description: Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s
            </Card>;
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            {/* {eventCard} */}
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            {/* {eventCard} */}
          </Col>
        </Row>
      </div>
      <Modal
        title="Create New Event"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical" onFinish={onFinish} >
          <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Title is Required' }]}>
            <Input/>
          </Form.Item>
          <Form.Item name="Date" label="Date">
          <DatePicker.RangePicker style={{ width: '70%' }} />
          </Form.Item>
          <Form.Item name="Description" label="Description">
            <TextArea autoSize={{minRows: 3, maxRows: 6 }}/>
          </Form.Item>
        </Form>
      </Modal>
    </Content>
  );
}
export default Events;
