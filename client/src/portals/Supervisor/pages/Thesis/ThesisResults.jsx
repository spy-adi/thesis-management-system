import React,{useState,useContext,useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Divider, Layout, Button,Form,Upload } from "antd";
import UploadOutlined from "@ant-design/icons/UploadOutlined";
import AssignedThesisContext from "../../../../context/assignedThesis/assignedThesisContext";
import ScholarContext from "../../../../context/scholar/scholarContext";
import Spinner from "../../../../CommonComponents/Spinner";
import axios from "axios";
const { Content } = Layout;



function ThesisResults() {
  const [form] = Form.useForm();
  const{Adm_No} = useParams();
  const scholarContext = useContext(ScholarContext);
  const assignedThesisContext = useContext(AssignedThesisContext);
  const { scholarDetails, getScholarDetails } = scholarContext;
  const{assignedThesis,getAssignedThesisDetails,checked} = assignedThesisContext;
  const [downloading, setdownloading] = useState(false);

  useEffect(()=>{
    getAssignedThesisDetails(Adm_No);
    getScholarDetails(Adm_No);
  },[]);
  if(assignedThesis===null || scholarDetails===null) return <Spinner/>

  const { name, photo, department, branch } = scholarDetails;
  const { title, abstract, file, synopsis } = assignedThesis.draft;

  const onSynopsisDownloadClick = async () => {
    setdownloading(true);
    try {
      let synopsisFile = await axios.get(`/api/draft/downloadFile/${synopsis}`, {responseType: 'blob'});
      synopsisFile = URL.createObjectURL(new Blob([synopsis.data], {type:synopsisFile.data.type}));
      let tempLink = document.createElement('a');
      tempLink.href = synopsisFile;
      tempLink.setAttribute('download', `${Adm_No}-Synopsis`);
      tempLink.click();
    } catch (error) {
      console.log(error);
      alert('Some error occurred!')
    } finally {
      setdownloading(false);
    }
  }

  const onThesisDownloadClick = async () => {
    setdownloading(true);
    try {
      let thesis = await axios.get(`/api/draft/downloadFile/${file}`, {responseType: 'blob'});
      thesis = URL.createObjectURL(new Blob([thesis.data], {type:thesis.data.type}));
      let tempLink = document.createElement('a');
      tempLink.href = thesis;
      tempLink.setAttribute('download', `${Adm_No}-Thesis`);
      tempLink.click();
    } catch (error) {
      console.log(error);
      alert('Some error occurred!');
    } finally {
      setdownloading(false);
    }
  }

  function onFinish(fileList) {
    console.log(fileList);
  }
  function onFinishFailed(errorInfo) {
    console.log(errorInfo);
  }

  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: "10px", height: "100%" }}
      >
      <div className="text-center">
      <h2>Thesis Reports</h2>
      </div>
        <Divider />
        <div className="student-profile py-4">
            <div className="container" style={{marginTop:"0"}}>
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="card shadow-sm"
                    style={{ marginBottom: "20px" }}
                  >
                    <div className="card-header bg-transparent text-center">
                      <img
                        className="profile_img"
                        src={photo}
                        alt="student dp"
                      />
                      <h3>Name</h3>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="pr-1">Scholar ID : </strong>{Adm_No}
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
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th width="30%">Title</th>
                            <td width="2%">:</td>
                            <td>{title}</td>
                          </tr>
                          <tr>
                            <th width="30%">Abstract</th>
                            <td width="2%">:</td>
                            <td>{abstract}</td>
                          </tr>
                          <tr>
                            <th width="30%">Synopsis</th>
                            <td width="2%">:</td>
                            <td><Button onClick={onSynopsisDownloadClick}>Click to View</Button></td>
                          </tr>
                          <tr>
                            <th width="30%">Thesis</th>
                            <td width="2%">:</td>
                            <td><Button onClick={onThesisDownloadClick}>Click to View</Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop:"50px"}}>
                <div className="col-lg-4">
                <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                    <h3 className="mb-0">
                        Examiner 1
                    </h3>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th width="20%">Review</th>
                            <td width="2%">:</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th width="20%">Report</th>
                            <td width="2%">:</td>
                            <td><Button>Click to View</Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                    <h3 className="mb-0">
                        Examiner 2
                    </h3>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th width="20%">Review</th>
                            <td width="2%">:</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th width="20%">Report</th>
                            <td width="2%">:</td>
                            <td><Button>Click to View</Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                    <h3 className="mb-0">
                        Examiner 3
                    </h3>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th width="20%">Review</th>
                            <td width="2%">:</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <th width="20%">Report</th>
                            <td width="2%">:</td>
                            <td><Button>Click to View</Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginLeft:"30px",marginTop:"50px"}}>
              <p style={{marginLeft:"-40px",fontSize:"1.1rem"}}>*Submit the statement of corrections, if any, as per Form No. <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph14.pdf"><b>PH14</b></a></p>
                <Form
                  form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                  <Form.Item 
                  name="PH14form"
                      label="Upload Form"
                      max={1}
                      action="/upload.do">
                    <Upload>
                      <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit" type="primary">Submit</Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
      </div>
    </Content>
  );
}

export default ThesisResults;
// import React from "react";
// import { Divider, Layout, Button } from "antd";
// import scholar from "../../images/scholar.png";
// const { Content } = Layout;



// function ThesisResults() {
//   return (
//     <Content style={{ margin: "25px 25px" }}>
//       <div
//         className="site-layout-background"
//         style={{ padding: "10px", height: "100%" }}
//       >
//       <div className="text-center">
//       <h2>Thesis Reports</h2>
//       </div>
//         <Divider />
//         <div className="student-profile py-4">
//             <div className="container" style={{marginTop:"0"}}>
//               <div className="row">
//                 <div className="col-lg-4">
//                   <div
//                     className="card shadow-sm"
//                     style={{ marginBottom: "20px" }}
//                   >
//                     <div className="card-header bg-transparent text-center">
//                       <img
//                         className="profile_img"
//                         src={scholar}
//                         alt="student dp"
//                       />
//                       <h3>Name</h3>
//                     </div>
//                     <div className="card-body">
//                       <p className="mb-0">
//                         <strong className="pr-1">Scholar ID : </strong>19DRXXXX
//                       </p>
//                       <p className="mb-0">
//                         <strong className="pr-1">Department : </strong>XYZ
//                       </p>
//                       <p className="mb-0">
//                         <strong className="pr-1">Branch : </strong>XYZ
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-8">
//                   <div className="card shadow-sm">
//                     <div className="card-header bg-transparent border-0">
//                     </div>
//                     <div className="card-body pt-0">
//                       <table className="table table-bordered">
//                         <tbody>
//                           <tr>
//                             <th width="30%">Title</th>
//                             <td width="2%">:</td>
//                             <td>Lorem Ipsum</td>
//                           </tr>
//                           <tr>
//                             <th width="30%">Abstract</th>
//                             <td width="2%">:</td>
//                             <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
//                           </tr>
//                           <tr>
//                             <th width="30%">Synopsis</th>
//                             <td width="2%">:</td>
//                             <td><Button>Click to View</Button></td>
//                           </tr>
//                           <tr>
//                             <th width="30%">Thesis</th>
//                             <td width="2%">:</td>
//                             <td><Button>Click to View</Button></td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row" style={{marginTop:"50px"}}>
//                 <div className="col-lg-4">
//                 <div className="card shadow-sm">
//                     <div className="card-header bg-transparent border-0">
//                     <h3 className="mb-0">
//                         Examiner 1
//                     </h3>
//                     </div>
//                     <div className="card-body pt-0">
//                       <table className="table">
//                         <tbody>
//                           <tr>
//                             <th width="20%">Review</th>
//                             <td width="2%">:</td>
//                             <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</td>
//                           </tr>
//                           <tr>
//                             <th width="20%">Report</th>
//                             <td width="2%">:</td>
//                             <td><Button>Click to View</Button></td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4">
//                 <div className="card shadow-sm">
//                     <div className="card-header bg-transparent border-0">
//                     <h3 className="mb-0">
//                         Examiner 2
//                     </h3>
//                     </div>
//                     <div className="card-body pt-0">
//                       <table className="table">
//                         <tbody>
//                           <tr>
//                             <th width="20%">Review</th>
//                             <td width="2%">:</td>
//                             <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</td>
//                           </tr>
//                           <tr>
//                             <th width="20%">Report</th>
//                             <td width="2%">:</td>
//                             <td><Button>Click to View</Button></td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4">
//                 <div className="card shadow-sm">
//                     <div className="card-header bg-transparent border-0">
//                     <h3 className="mb-0">
//                         Examiner 3
//                     </h3>
//                     </div>
//                     <div className="card-body pt-0">
//                       <table className="table">
//                         <tbody>
//                           <tr>
//                             <th width="20%">Review</th>
//                             <td width="2%">:</td>
//                             <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</td>
//                           </tr>
//                           <tr>
//                             <th width="20%">Report</th>
//                             <td width="2%">:</td>
//                             <td><Button>Click to View</Button></td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//       </div>
//     </Content>
//   );
// }

// export default ThesisResults;
