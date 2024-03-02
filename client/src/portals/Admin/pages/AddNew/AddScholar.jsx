import React from "react";
import {
  Form,
  Input,
  Layout,
  Button,
  Col,
  Row,
  Select,
  DatePicker,
  Upload,
} from "antd";
import UploadOutlined from "@ant-design/icons/UploadOutlined"
import "../../AdminApp.css";
import "antd/dist/antd.css";
import axios from "axios";

const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

function AddScholar() {
  const [loading, setLoading] = React.useState(false);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const {
        admn,
        name,
        password,
        department,
        email,
        contact,
        address,
        registration_type,
        qualification_degree,
        status,
        fellowship_status,
        registration_date,
        upload
      } = values;
      const formData = new FormData();
      formData.append("admn", admn);
      formData.append("name", name);
      formData.append("password", "123456");
      formData.append("department", department);
      formData.append("branch", department);
      formData.append("email", email);
      formData.append("contact", contact);
      formData.append("address", address);
      formData.append("registration_type", registration_type);
      formData.append("qualification_degree", qualification_degree);
      formData.append("status", status);
      formData.append("fellowship_status", fellowship_status);
      formData.append("registration_date", registration_date);
      formData.append("current_session", "2021-2022");
      formData.append("current_semester", "Winter");
      formData.append("photo", upload.file);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const res = await axios.post(
        "/api/scholar/addScholar",
        formData,
        config
      );
      console.log(res);
      if (res.status === 200) {
        alert('Scholar added!');
        form.resetFields();        
      }
    } catch (error) {
      console.log(error);
      alert('Some error occurred!');
    }
    finally {
      setLoading(false);
    }
    console.log("Success:", values);
  }

  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }

  function onReset() {
    form.resetFields();
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
              Add Scholar
            </div>
            <div className="card-body form-body">
              <Form
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 15 }}
                layout="horizontal"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="row">
                  <div className="col-md-6">
                    <Form.Item
                      name="admn"
                      label="Admission No"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="department"
                      label="Department"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label="Email Id"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="contact"
                      label="Contact"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="address"
                      label="Address"
                      rules={[{ required: true }]}
                    >
                      <TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
                    </Form.Item>
                  </div>
                  <div className="col-md-6">
                    <Form.Item
                      name="registration_type"
                      label="Registration Type"
                      rules={[{ required: true }]}
                    >
                      <Select>
                        <Option value="full">Full</Option>
                        <Option value="part">Part</Option>
                        <Option value="external">External</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="registration_date"
                      label="Registration Date"
                      rules={[{ required: true }]}
                    >
                      <DatePicker />
                    </Form.Item>
                    <Form.Item
                      name="qualification_degree"
                      label="Qualification Degree"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="status"
                      label="Status"
                      rules={[{ required: true }]}
                    >
                      <Select>
                        <Option value="active">Active</Option>
                        <Option value="graduated">Graduated</Option>
                        <Option value="terminated">Terminated</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="fellowship_status"
                      label="Fellowship Status"
                      rules={[{ required: true }]}
                    >
                      <Select>
                        <Option value="JRF">JRF</Option>
                        <Option value="SRF">SRF</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="upload"
                      label="Upload Image"
                      max={1}
                      fieldProps={{
                        name: "file",
                      }}
                      action="/upload.do"
                    >
                      <Upload beforeUpload={() => false} multiple={false}>
                        <Button icon={<UploadOutlined />}>Click to Upload!</Button>
                      </Upload>
                    </Form.Item>
                    <Form.Item>
                    <div style={{textAlign:"center"}}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{marginRight:"10px"}}
                      >
                        Submit
                      </Button>
                      <Button htmlType="button" onClick={onReset}>
                        Reset
                      </Button>
                      </div>
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default AddScholar;
