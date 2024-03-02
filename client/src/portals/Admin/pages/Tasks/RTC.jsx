import React from "react";
import { Form, Input, Layout, Button,Select, Upload, Alert, Divider } from "antd";
import UploadOutlined from "@ant-design/icons/UploadOutlined";
import "../../AdminApp.css";
import "antd/dist/antd.css";
import { tableIcons } from "../../../../CommonComponents";
import MaterialTable from "material-table";

const { Content } = Layout;
const { Option } = Select;


function RTC() {
  const columns=[
    {title:"Priority",field:"id"},
    {title:"Examiner Name",field:"name"},
    {title:"Name of the Institute/University",field:"insti"},
  ];
  const dataI=[
    {id:"1",name:"Ayush Tripathi",insti:"ISM"},
    {id:"2",name:"Mrinal Pathak",insti:"ISM"},
    {id:"3",name:"Aditya Mishra",insti:"ISM"},
    {id:"4",name:"Pattewar Darshan",insti:"ISM"}
  ]
  const dataF=[
    {id:"1",name:"Ayush Tripathi",insti:"ISM"},
    {id:"2",name:"Mrinal Pathak",insti:"ISM"},
    {id:"3",name:"Aditya Mishra",insti:"ISM"},
    {id:"4",name:"Pattewar Darshan",insti:"ISM"}
  ]

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

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div
          className="container-fluid"
          style={{ justifyContent: "center" }}
        >
        <div className="row">
          <div className="col-lg-6">
          <h4>Priority List</h4>
          <Divider />
          <h5>1. Foreign Examiner</h5>
          <MaterialTable title="Foreign Examiner" columns={columns} data={dataF}
              icons={tableIcons}
              options={{
                    toolbar: false,
                    paging: false,
                    draggable: false,
                    sorting: false,
                    headerStyle: {
                      backgroundColor: "#002140",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontFamily: "Open Sans",
                    },
                  }}
                  style={{margin:'10px'}}
            />
            <Divider />
          <h5>2. Indian Examiner</h5>
            <MaterialTable title="Foreign Examiner" columns={columns} data={dataI}
              icons={tableIcons}
              options={{
                    toolbar: false,
                    paging: false,
                    draggable: false,
                    sorting: false,
                    headerStyle: {
                      backgroundColor: "#002140",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontFamily: "Open Sans",
                    },
                  }}
                  style={{margin:'10px'}}
            />
          </div>
          <div className="col-lg-6">          
          <div className="card">
            <div className="card-header text-center form-header">
              Request Form
            </div>
            <div className="card-body form-body">
               <Alert
                message="Info"
                description="Thesis Synopsis will be attached in the consent mail"
                type="info"
                showIcon
                style={{marginBottom:'10px'}}
              />
              <Form
                labelCol={{ span: 11 }}
                wrapperCol={{ span: 22 }}
                layout="horizontal"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
              <Form.Item
                  name="scholarid"
                  label="Scholar ID"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="scholarname"
                  label="Scholar Name"
                >
                  <Input defaultValue="XYZ" disabled />
                </Form.Item>
                <Form.Item
                  name="scholardep"
                  label="Scholar Department"
                >
                  <Input defaultValue="XYZ" disabled />
                </Form.Item>
                <Form.Item
                  name="scholaremailid"
                  label="Scholar Email ID"
                >
                  <Input defaultValue="XYZ" disabled />
                </Form.Item>
                <Form.Item
                  name="examiner"
                  label="Examiner"
                  rules={[{ required: true }]}
                >
                  <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                </Form.Item>
                <Form.Item
                  name="examiner_email_id"
                  label="Examiner Email Id"
                >
                  <Input defaultValue="XYZ" disabled />
                </Form.Item>
                <Form.Item
                  name="examiner_phone"
                  label="Examiner Contact No"
                >
                  <Input defaultValue="XYZ" disabled />
                </Form.Item>
                
                <Form.Item
                  name="upload"
                  label="Request letter"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[{ required: true }]}
                >
                  <Upload name="form" action="/upload.do">
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>
                <Form.Item>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ marginRight: "10px" }}
                    >
                      Send
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                      Reset
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div></div>
        </div>

        </div>
      </div>
    </Content>
  );
}

export default RTC;
