import React,{useContext} from "react";
import AuthContext from "../../../context/auth/authContext";
import { Layout,Divider } from "antd";
import "../StudentApp.css";
import scholar from "../images/scholar.png";
const { Content } = Layout;
function Home() {
  const authContext = useContext(AuthContext);
  const {user} = authContext;
  const {admn,name,department,email,branch,photo} = user.dataValues;
  return (
        <Content style={{ margin: "25px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 400 }}
          >
            <div className="container">
              <div className="row" style={{ width: "100%", height: "auto", padding: "1%" }}>
                <div className="col-lg-3">
                  <img
                    style={{
                      margin: "0 5% 2% 0",
                      float: "left",
                      width: "170px",
                      height: "150 px",
                    }}
                    src={photo ? photo : scholar}
                    alt="Scholar"
                  />
                </div>
                <div className='col-lg-9' style={{ margin: "0 auto" }}>
                <table className="table">
                        <tbody>
                          <tr>
                            <th>Admission No</th>
                            <td>:</td>
                            <td>{admn}</td>
                          </tr>
                          <tr>
                            <th>Name</th>
                            <td>:</td>
                            <td>{name}</td>
                          </tr>
                          <tr>
                            <th>Department</th>
                            <td>:</td>
                            <td>{department}</td>
                          </tr>
                          <tr>
                            <th>Branch</th>
                            <td>:</td>
                            <td>{branch}</td>
                          </tr>
                          <tr>
                            <th>Email</th>
                            <td>:</td>
                            <td>{email}</td>
                          </tr>
                          </tbody>
                          </table>
                </div>
              </div>
              <Divider />
              <h2>
                <u>
                  <strong>Upcoming/Expected Events</strong>
                </u>
              </h2>
              <div className="container">
                <div>
                  <p>
                    <strong>Date</strong> : Upcoming Comprehensive Exam
                  </p>
                  <p>
                    <strong>Date </strong> : Upcoming Research Proposal seminar
                  </p>
                  <p>
                    <strong>Date </strong> : Pre-submission Seminar
                  </p>
                  <p>
                    <strong>Date </strong> : Thesis Submission
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Content>
  );
}

export default Home;
