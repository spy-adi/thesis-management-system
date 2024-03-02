import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Layout, Button, Form, Upload, Divider } from "antd";
import "../../SupervisorApp.css";
import scholar from "../../images/scholar.png";
import { UploadOutlined } from "@ant-design/icons";
import ScholarContext from "../../../../context/scholar/scholarContext";
import DscContext from "../../../../context/dsc/dscContext";
import ProfessorContext from "../../../../context/professor/professorContext";
import Spinner from "../../../../CommonComponents/Spinner";

const { Content } = Layout;

function ScholarDetails() {
  const { Adm_No } = useParams();
  const scholarContext = useContext(ScholarContext);
  const dscContext = useContext(DscContext);
  const professorContext = useContext(ProfessorContext);
  const {dscDetails,chairman,members,getDscDetails} = dscContext;
  const {supervisorDetails,chairmanDetails,membersDetails,co_supervisorDetails,getProfDetails, submitFSBS, uploading} = professorContext;
  const {getScholarDetails,scholarDetails,dsc,supervisor,co_supervisor} = scholarContext;
  const [ph3Submitted, setPh3Submitted] = useState(false);
  const [formPH2] = Form.useForm();
  const [formPH3] = Form.useForm();
  useEffect(()=>{
    getScholarDetails(Adm_No);
  },[]);
  useEffect(()=>{
    if(dsc!==null)getDscDetails(dsc);
    if(supervisor!==null)getProfDetails(supervisor,"supervisorDetails");
    if(co_supervisor!==null)getProfDetails(co_supervisor,"co_supervisorDetails");
  },[dsc,supervisor,co_supervisor]);
  useEffect(()=>{
    if(chairman!==null) getProfDetails(chairman,"chairmanDetails");
    if(members.length!==0) members.forEach(member=>{if(member!==null)getProfDetails(member,"membersDetails")});
},[chairman,members]);
  
  if(scholarDetails===null || uploading) return <Spinner/>
  if(supervisorDetails===null||co_supervisorDetails===null) return <Spinner/>
  if(dsc!==null){
  if(dscDetails===null||chairmanDetails===null||members.length===0)return <Spinner/>
  }
  const {admn,name,department,email,branch,contact,fellowship_status,qualification_degree,status,registration_date,address,photo} = scholarDetails;
  async function onFinishPH2(values) {
    const formData = new FormData();
    formData.append('PH2', values.PH3form.fileList[0].originFileObj);
    submitFSBS(supervisor, admn, formData);
  }
  async function onFinishPH3(values) {
    const formData = new FormData();
    formData.append('PH3', values.PH3form.fileList[0].originFileObj);
    await submitFSBS(supervisor, admn, formData);
    setPh3Submitted(true);
    alert('Form Submitted!');
  }
  function onFinishFailed(errorInfo) {
    console.log(errorInfo);
  }



  return (
    <Content style={{ margin: "25px 25px" }}>
      <div className="student-profile py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card shadow-sm" style={{ marginBottom: "20px" }}>
                <div className="card-header bg-transparent text-center">
                  <img className="profile_img" src={photo ? photo : scholar} alt="student dp" />
                  <h3>{name}</h3>
                </div>
                <div className="card-body">
                  <p className="mb-0">
                    <strong className="pr-1">Scholar ID : </strong>{admn}
                  </p>
                  <p className="mb-0">
                    <strong className="pr-1">Department : </strong>{department}
                  </p>
                  <p className="mb-0">
                    <strong className="pr-1">Branch : </strong>{branch}
                  </p>
                </div>
              </div>
              <div style={{ height: "26px" }}></div>
                  <div className="card shadow-sm" style={{ marginBottom: "20px" }}>
              <div className="card-header bg-transparent border-0">
                <h3 className="mb-0">
                  <i className="far fa-clone pr-1"></i>Course Details
                </h3>
              </div>
              <div className="card-body pt-0">
              <p><b>Courses Cleared (as per DSC) & their Grades</b></p>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Course Code</th>
                      <th>Course Name</th>
                      <th>Session</th>
                      <th>Session Year</th>
                      <th>Grades</th>
                    </tr>
                    <tr>
                      <td>XYZ</td>
                      <td>XYZ</td>
                      <td>XYZ</td>
                      <td>XYZ</td>
                      <td>XYZ</td>
                      <td>XYZ</td>
                    </tr>
                  </tbody>
                </table>

              <Divider />

                <p><b>Courses Cleared & their Grades</b></p>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Course Code</th>
                      <th>Course Name</th>
                      <th>Session</th>
                      <th>Session Year</th>
                      <th>Grades</th>
                    </tr>
                    <tr>
                      <td>XYZ</td>
                      <td>XYZ</td>
                      <td>XYZ</td>
                      <td>XYZ</td>
                      <td>XYZ</td>
                      <td>XYZ</td>
                    </tr>
                  </tbody>
                </table>
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
                        <th width="30%">Registration Status</th>
                        <td width="2%">:</td>
                        <td>{status}</td>
                      </tr>
                      <tr>
                        <th width="30%">Qualify Degree</th>
                        <td width="2%">:</td>
                        <td>{qualification_degree}</td>
                      </tr>
                      <tr>
                        <th width="30%">Fellowship_Status</th>
                        <td width="2%">:</td>
                        <td>{fellowship_status}</td>
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
                        <th width="30%">Supervisor</th>
                        <td width="2%">:</td>
                        <td>{supervisorDetails.name}</td>
                      </tr>
                      <tr>
                        <th width="30%">Co-Supervisor</th>
                        <td width="2%">:</td>
                        <td>{co_supervisorDetails.name}</td>
                      </tr>
                      <tr>
                        <th width="30%">Date of Joining</th>
                        <td width="2%">:</td>
                        <td>{registration_date}</td>
                      </tr>
                      <tr>
                        <th width="30%">Address</th>
                        <td width="2%">:</td>
                        <td>{address}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {dsc===null &&<div style={{ height: "26px" }}></div>}
              {dsc===null &&<div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0">
                    <i className="far fa-clone pr-1"></i>DSC Proposal
                  </h3>
                </div>
               <div className="card-body pt-0">
                  <p>
                    <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph2.pdf">
                      <b>PH2</b>
                    </a>{" "}
                    NEEDS TO BE SUBMITTED FOR THE CONSTITUTION OF DOCTORAL
                    SCRUTINY COMMITTEE (DSC)
                  </p>
                  <Form
                    form={formPH2}
                    onFinish={onFinishPH2}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      name="PH2form"
                      label="Upload Form"
                      max={1}
                      fieldprops={{
                        name: "file",
                      }}
                      action="/upload.do"
                    >
                      <Upload beforeUpload={() => false} multiple={false}>
                        <Button icon={<UploadOutlined />}>
                          Click to Upload!
                        </Button>
                      </Upload>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>}

              <div style={{ height: "26px" }}></div>
              <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0">
                    <i className="far fa-clone pr-1"></i>PROPOSE COURSES
                  </h3>
                </div>
                <div className="card-body pt-0">
                  <p>
                    
                    SUBMIT
                    <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph3.pdf">
                      <b> PH3</b>
                    </a>{" "} TO  PROPOSE COURSES FOR 2nd SEMESTER.
                  </p>
                  { ph3Submitted ? <div>Form submitted!</div> :
                  <Form
                    form={formPH3}
                    onFinish={onFinishPH3}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      name="PH3form"
                      label="Upload Form"
                      max={1}
                      fieldProps={{
                        name: "file",
                      }}
                      action="/upload.do"
                    >
                      <Upload beforeUpload={() => false} multiple={false}>
                        <Button icon={<UploadOutlined />}>
                          Click to Upload!
                        </Button>
                      </Upload>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                  }
                </div>
              </div>

              <div style={{ height: "26px" }}></div>
              <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0">
                    <i className="far fa-clone pr-1"></i>DSC Details
                  </h3>
                </div>
                <div className="card-body pt-0">
                  <table className="table table-bordered">
                    <tbody>
                    <tr>
                            <th width="30%">Name (Chairman)</th>
                            <td width="2%">:</td>
                            <td>{dsc!==null?chairmanDetails.name:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">Designation (Chairman)</th>
                            <td width="2%">:</td>
                            <td>{dsc!==null?dscDetails.designation:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">
                              Area of Specialization (Chairmain)
                            </th>
                            <td width="2%">:</td>
                            <td>{dsc!==null?dscDetails.areaofspecialization:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">Member Department</th>
                            <td width="2%">:</td>
                            <td>{dsc!==null?dscDetails.memberdepartment:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">Sister Department</th>
                            <td width="2%">:</td>
                            <td>{dsc!==null?dscDetails.sisterdepartment:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">Members</th>
                            <td width="2%">:</td>
                            <td>{dsc!==null?membersDetails.map(member=>{return(member.name+",")}):"NA"}</td>
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

export default ScholarDetails;
