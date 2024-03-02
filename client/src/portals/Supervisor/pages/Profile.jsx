import React,{useContext} from "react";
import { Layout } from "antd";
import "../SupervisorApp.css";
import scholar from "../images/scholar.png";
import AuthContext from "../../../context/auth/authContext";
const { Content } = Layout;

function Profile() {
  const authContext = useContext(AuthContext);
  const {user} = authContext;
  const {profId,name,department,email,branch,contact,address,photo} = user.dataValues;
  return (
        <Content style={{ margin: "25px 25px" }}>
          <div className="student-profile py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="card shadow-sm"
                    style={{ marginBottom: "20px" }}
                  >
                    <div className="card-header bg-transparent text-center">
                      <img
                        className="profile_img"
                        src={ photo ? photo : scholar}
                        alt="student dp"
                      />
                      <h3>{name}</h3>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="pr-1">ID : </strong>{profId}
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Department : </strong>{department}
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Branch : </strong>{branch}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                      <h3 className="mb-0">
                        <i className="far fa-clone pr-1"></i>General Information
                      </h3>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th width="30%">Email</th>
                            <td width="2%">:</td>
                            <td>{email}</td>
                          </tr>
                          <tr>
                            <th width="30%">Contact</th>
                            <td width="2%">:</td>
                            <td>{contact}</td>
                          </tr>
                          <tr>
                            <th width="30%">Present Address</th>
                            <td width="2%">:</td>
                            <td>{address}</td>
                          </tr>
                          <tr>
                            <th width="30%">Alternate Email</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Alternate Contact</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Permanent Address</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div style={{ height: "26px" }}></div>
                  <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                      <h3 className="mb-0">
                        <i className="far fa-clone pr-1"></i>Other Information
                      </h3>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th width="30%">XYZ</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Date of Joining</th>
                            <td width="2%">:</td>
                            <td>dd-mm-yyyy</td>
                          </tr>
                          <tr>
                            <th width="30%">XYZ</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">XYZ</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">XYZ</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
  );
}

export default Profile;
