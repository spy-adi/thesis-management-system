import React from "react";
import { Divider, Input, Layout, Form, Button,Row,Col } from "antd";
import "../../AdminApp.css";
import TextArea from "antd/lib/input/TextArea";
import { SendOutlined, DraftsOutlined } from "@material-ui/icons";
import { MailSidebar } from "../../components";
const { Content } = Layout;

function Compose() {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div className="container-fluid card" style={{ minHeight: 500 }}>
        <div className="container">
          <Row>
            <Col span={18} push={6}>
              <div style={{ fontFamily: "Open Sans" }}>
                <b>New Message</b>
              </div>
              <Divider />
              <Form>
                <Form.Item label="To">
                  <Input placeholder="Type email" />
                </Form.Item>
                <Form.Item label="CC">
                  <Input placeholder="Type email" />
                </Form.Item>
                <Form.Item label="BCC">
                  <Input placeholder="Type email" />
                </Form.Item>
                <Form.Item>
                  <TextArea
                    placeholder="Click here to type.."
                    autoSize={{ minRows: 10, maxRows: 15 }}
                  />
                </Form.Item>
                <div>
                  <Form.Item style={{ display: "inline-block" }}>
                    <Button type="primary">Send</Button>
                  </Form.Item>
                  <span>
                    <Form.Item
                      style={{ display: "inline-block", margin: "0 20px" }}
                    >
                      <Button>Draft</Button>
                    </Form.Item>
                    <span>
                      <Form.Item style={{ display: "inline-block" }}>
                        <Button type="primary" danger>
                          Discard
                        </Button>
                      </Form.Item>
                    </span>
                  </span>
                </div>
              </Form>
            </Col>
            <Col span={6} pull={18}>
              <MailSidebar />
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  );
}

export default Compose;
