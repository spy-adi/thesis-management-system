import React from "react";
import { Layout } from "antd";
import { Button } from "antd";
import { MyProjectNav } from "../../components";
const { Content } = Layout;

function Final() {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <MyProjectNav />
      <div className="row border rounded border-2" style={{padding:'10px',marginBottom:'20px'}}>
      <h4><u>Aditya Mishra</u></h4>
        <div className="col-4">
          <div
            className="border border-2 rounded"
            style={{ padding: "10px", marginBottom: "10px" }}
          >
            <p>
              <b>
                <u>Seminar Details</u>
              </b>
            </p>
            <p>
              <b>Date:</b>
              <br />
              XX/XX/XXXX
            </p>
            <p>
              <b>Room:</b>
              <br />
              N/A
            </p>
            <p>
              <b>Max Participants:</b>
              <br />2
            </p>
            <p>
              <b>Min Opponents:</b>
              <br />1
            </p>
          </div>
          <div
            className="border border-2 rounded"
            style={{ padding: "10px", marginBottom: "10px" }}
          >
            <p>
              <b>
                <u>Project Details</u>
              </b>
            </p>
            <p>
              <b>Type:</b>
              <br />
              XXXXXXXX
            </p>
            <p>
              <b>Head Supervisor:</b>
              <br />
              XXXXXXXX
            </p>
            <p>
              <b>Co-supervisor:</b>
              <br />
              XXXXXXXX
            </p>
            <p>
              <b>Reviewer:</b>
              <br />
              XXXXXXXX
            </p>
          </div>
        </div>
        <div className="col-8">
          <div
            className="site-layout-background"
            style={{ marginBottom: "10px" }}
          >
            <p
              style={{
                background: "#002140",
                color: "white",
                paddingLeft: "10px",
              }}
            >
              <b>Final Seminar Thesis File</b>
            </p>
            <div style={{ paddingLeft: "10px" }}>
              <p>
                <b>Thesis File:</b>
                <br />
                <Button type="primary">Download</Button>
              </p>
              <p>
                <b>Synopsis File:</b>
                <br />
                <Button type="primary">Download</Button>
              </p>
              <br />
            </div>
          </div>
          <div
            className="site-layout-background"
            style={{ marginBottom: "10px" }}
          >
            <p
              style={{
                background: "#002140",
                color: "white",
                paddingLeft: "10px",
              }}
            >
              <b>Respondents</b>
            </p>
            <div style={{ paddingLeft: "10px" }}>
              <ul>
                <li> XYZ </li>
                <li> ABC </li>
              </ul>
              <br />
            </div>
          </div>
          <div
            className="site-layout-background"
            style={{ marginBottom: "10px" }}
          >
            <p
              style={{
                background: "#002140",
                color: "white",
                paddingLeft: "10px",
              }}
            >
              <b>Opponents</b>
            </p>
            <div style={{ paddingLeft: "10px" }}>
              <ul>
                <li> XYZ </li>
                <li> ABC </li>
              </ul>
              <br />
            </div>
          </div>
          <div
            className="site-layout-background"
            style={{ marginBottom: "10px" }}
          >
            <p
              style={{
                background: "#002140",
                color: "white",
                paddingLeft: "10px",
              }}
            >
              <b>Active Participants</b>
            </p>
            <div style={{ paddingLeft: "10px" }}>
              <ul>
                <li> XYZ </li>
                <li> ABC </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Final;
