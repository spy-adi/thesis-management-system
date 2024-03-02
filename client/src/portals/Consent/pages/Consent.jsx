import React, {useState} from "react";
import { Layout,Divider, Button, Select } from "antd";
import "../ConsentApp.css";
import scholar from "../images/scholar.jpg";

const { Content } = Layout;
const { Option } = Select;

function Consent() {
  const [ch, setCH] = useState(true);
    function handleChange(value) {
        console.log(value);
        setCH(false);
      }
  return (
    <Content style={{ margin: "25px 25px" }}>
    <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
      <div style={{textAlign:'center'}}><h1>Consent Response Form</h1></div>
      <Divider />
      <div className="student-profile">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                <h3>Scholar Details</h3>
                  <div
                    className="card shadow-sm"
                    style={{ marginBottom: "20px" }}
                  >
                    <div className="card-header bg-transparent text-center">
                      <img
                        className="profile_img"
                        src={scholar}
                        alt="student dp"
                      />
                      <h3>Pattewar Darshan</h3>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="pr-1">Scholar ID : </strong>19JE0599
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Department : </strong>Physics
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Branch : </strong>Engineering Physics
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                <h3>Thesis Details</h3>
                  <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th width="30%">Title</th>
                            <td width="2%">:</td>
                            <td>Magnetism and its properties</td>
                          </tr>
                          <tr>
                            <th width="30%">Abstract</th>
                            <td width="2%">:</td>
                            <td>Magnetism is a class of physical attributes that are mediated by magnetic fields. Electric currents and the magnetic moments of elementary particles give rise to a magnetic field, which acts on other currents and magnetic moments. Magnetism is one aspect of the combined phenomenon of electromagnetism.</td>
                          </tr>
                          <tr>
                            <th width="30%">Due Date of Giving Response</th>
                            <td width="2%">:</td>
                            <td>22-02-2022</td>
                          </tr>
                          <tr>
                            <th width="30%">Synopsis</th>
                            <td width="2%">:</td>
                            <td><a href="files\\drafts\\theses\\19JE0599.pdf', 'files\\drafts\\synopses\\19JE0599.pdf"><Button>Click to View</Button></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <h1>Please Confirm Your Response</h1>
          <p>Select your response for the consent of evaluation of the respective thesis.</p>
          <div><h3>Your response : 
          <Select
                labelInValue
                defaultValue={{ value: 'Select' }}
                style={{ width: 120,marginLeft:'10px' }}
                onChange={handleChange}
            >
                <Option value="accepted">Accepted</Option>
                <Option value="unavailable">Unavailable</Option>
                <Option value="rejected">Rejected</Option>
            </Select>
            </h3>
            </div>
            <Divider />
            <div className="row">
                <div className="col" style={{textAlign:'left'}}>
                    <Button type="danger">Cancel</Button>
                </div>
                <div className='col' style={{textAlign:'right'}}>
                    <Button disabled={ch} type="primary"><a href='/co/c'>I Confirm This Response</a></Button>
                </div>
            </div>
      </div>
    </Content>
  );
}

export default Consent;
