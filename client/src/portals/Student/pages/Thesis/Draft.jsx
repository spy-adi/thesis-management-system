import React, { useState, useEffect, useContext } from "react";
import { Divider, Layout, Form, Input, Button, Upload, message } from "antd";
import "../../StudentApp.css";
import AssignedThesisContext from "../../../../context/assignedThesis/assignedThesisContext";
import AuthContext from "../../../../context/auth/authContext";
import Spinner from "../../../../CommonComponents/Spinner"
import { UploadOutlined } from "@ant-design/icons";
import setAuthToken from "../../../../utils/setAuthToken";
import axios from "axios";
const { Content } = Layout;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} is required!",
};

function Draft() {

  const [thesisFL, setthesisFL] = useState([]);
  const [synopsisFL, setsynopsisFL] = useState([]);
  const [inPageLoading, setinPageLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const assignedThesisContext = useContext(AssignedThesisContext);
  const { admn } = authContext.user.dataValues;
  const { assignedThesis, loading, getAssignedThesisDetails } = assignedThesisContext;
  const [form] = Form.useForm();

  const handleThesisChange = ({ file, fileList }) => {
    fileList = fileList.slice(-1);
    setthesisFL(fileList)
  };

  const handleSynopsisChange = ({ file, fileList }) => {
    fileList = fileList.slice(-1);
    setsynopsisFL(fileList);
  }

  const onSubmitDraft = async (values) => {
    setinPageLoading(true);
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const formData = new FormData();
      formData.append("title", values.user.title);
      formData.append("abstract", values.user.abstract);
      formData.append("thesis", thesisFL[0].originFileObj);
      formData.append("synopsis", synopsisFL[0].originFileObj);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const res = await axios.put(`http://localhost:3000/api/draft/save/${admn}`, formData, config);
      if (res.status === 200) {
        alert('Draft saved successfully!');
        setthesisFL([]);
        setsynopsisFL([]);
        form.resetFields();
      }
      else if (res.status === 404) {
        alert(res.message);
      }
      else {
        alert('Some error occurred');
      }
    } catch (error) {
      console.log(error);
      alert('Some error occurred!');
    } finally {
      setinPageLoading(false);
    }
  }
  useEffect(() => {
    getAssignedThesisDetails(admn);
  }, [])

  if (inPageLoading || loading) {
    return <Spinner />
  }
  else if(assignedThesis===null){
    return(
      <Content style={{ margin: "25px 25px" }}>
            <div
              className="site-layout-background text-center"
              style={{ padding: 24, minHeight: 400 }}
            >
            <div
              className="container-fluid"
              style={{
                marginTop: "15%",
                textAlign: "center",
                display: "inherit",
              }}
            >
              <h3>Project has not been assigned yet!</h3>
                  </div>
            </div>
              </Content>
    )
  }
  else if (assignedThesis.completed) {
    return (
      <div
        className="site-layout-background"
        style={{ padding: 24, margin: "25px 25px" }}
      >
        <div
          className="container-fluid"
          style={{
            marginTop: "40px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h3>You have already submitted your thesis!</h3>
        </div>
      </div>
    );
  }
  else {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div className="site-layout-background" style={{ padding: "10px" }}>
        <h2 style={{ paddingTop: "10px" }}>Save Draft</h2>
        <Divider />
        <Form
          {...layout}
          name="nest-messages"
          form={form}
          validateMessages={validateMessages}
          onFinish={onSubmitDraft}
        >
          <Form.Item
            name={["user", "title"]}
            label="Title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "abstract"]}
            label="Abstract"
            style={{ flex: "0" }}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea style={{ height: "100px", float: "left" }} />
          </Form.Item>
          <Form.Item
            name={["user", "synopsis"]}
            label="Synopsis"
            style={{ flex: "0" }}
            rules={[
              {
                required: true,
                message: 'You must choose a Synopsis file!',
              },
              ({}) => ({
                validator(_, value) {
                  console.log(value);
                  if (!value || synopsisFL.length) {
                    return Promise.resolve()
                  }
                  return Promise.reject('You must choose a Synopsis file!');
                }
              })
            ]}
          >
            <Upload fileList={synopsisFL} onChange={handleSynopsisChange} beforeUpload={() => false} multiple={false}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name={["user", "thesis"]}
            label="Thesis"
            style={{ flex: "0" }}
            rules={[
              {
                required: true,
                message: 'You must choose a Thesis file!'
              },
              ({}) => ({
                validator(_, value) {
                  if (!value || thesisFL.length) {
                    return Promise.resolve()
                  }
                  return Promise.reject('You must choose a Thesis file!');
                }
              })
            ]}
          >
            <Upload fileList={thesisFL} onChange={handleThesisChange} beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
  }
}

export default Draft;
