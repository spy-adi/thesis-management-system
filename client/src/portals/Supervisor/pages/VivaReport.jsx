import React from "react";
import { Form, Input, Layout, Button, Col, Row, Upload } from "antd";
import UploadOutlined from "@ant-design/icons/UploadOutlined";
import "../SupervisorApp.css";
import "antd/dist/antd.css";

const { Content } = Layout;
const { TextArea } = Input;

function VivaReport() {
  const [form] = Form.useForm();
  function onFinish(values) {
    console.log("Success:", values);
  }

  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }

  function onReset() {
    form.resetFields();
  }

  function normFile(e) {
    if (e) {
      console.log("Upload event:", e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
  }

  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div
          className="container-fluid"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="card">
            <div className="card-header text-center form-header">
              Viva Report
            </div>
            <div className="card-body form-body" style={{width:"500px"}}>
              <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                //layout="horizontal"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="ScholarId"
                  label="Scholar ID"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="name"
                  label="Name"
                >
                  <Input  disabled/>
                </Form.Item>
                <Form.Item
                  name="department"
                  label="Department"
                >
                  <Input disabled/>
                </Form.Item>
                <Form.Item
                  name="ph15"
                  label="Form PH15 "
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[{ required: true }]}
                >
                  <Upload name="logo" action="/upload.do">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
                <Form.Item
                  name="ph16"
                  label="Form PH16 "
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[{ required: true }]}
                >
                  <Upload name="logo" action="/upload.do">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
                <Form.Item
                  name="ph17"
                  label="Form PH17 "
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[{ required: true }]}
                >
                  <Upload name="logo" action="/upload.do">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
                <Form.Item
                  name="ph18"
                  label="Form PH18 "
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[{ required: true }]}
                >
                  <Upload name="logo" action="/upload.do">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
                <Form.Item
                  name="finalThesis"
                  label="Final Thesis"
                >
                  
                </Form.Item>
                <Form.Item>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ marginRight: "10px" }}
                    >
                      Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                      Reset
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}
export default VivaReport;
