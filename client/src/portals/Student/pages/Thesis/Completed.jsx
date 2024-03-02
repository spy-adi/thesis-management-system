import React, { useEffect, useContext, useState } from "react";
import StepProgressComponent from "../../components/StepProgressComponent";
import AssignedThesisContext from "../../../../context/assignedThesis/assignedThesisContext";
import AuthContext from "../../../../context/auth/authContext";
import Spinner from "../../../../CommonComponents/Spinner";
import { Divider, Layout, Button } from "antd";
import scholar from "../../images/scholar.png";
import axios from "axios";
const { Content } = Layout;

function Completed() {

  const authContext = useContext(AuthContext);
  const assignedThesisContext = useContext(AssignedThesisContext);
  const { admn, name, department, branch, photo } = authContext.user.dataValues;
  const { assignedThesis, loading, getAssignedThesisDetails } = assignedThesisContext;
  const [downloading, setdownloading] = useState(false);
  let accomplishedSteps = 0;
  if (assignedThesis) {
    console.log(assignedThesis.completed);
    if (assignedThesis.draft) {
      accomplishedSteps = 1;
    }
    if (assignedThesis.completed) {
      accomplishedSteps = 2;
    }
    if( assignedThesis.evaluation ) {
      accomplishedSteps = 3;
    }
    console.log(accomplishedSteps);
  }

  const onSynopsisDownloadClick = async () => {
    setdownloading(true);
    try {
      let synopsis = await axios.get(`/api/draft/downloadFile/${assignedThesis.draft.synopsis}`, {responseType: 'blob'});
      console.log(synopsis);
      synopsis = URL.createObjectURL(new Blob([synopsis.data], {type:synopsis.data.type}));
      let tempLink = document.createElement('a');
      tempLink.href = synopsis;
      tempLink.setAttribute('download', `${admn}-Synopsis`);
      tempLink.click();
    } catch (error) {
      console.log(error);
      alert('Some error occurred!')
    } finally {
      setdownloading(false);
    }
  }

  const onThesisDownloadClick = async () => {
    try {
      let thesis = await axios.get(`/api/draft/downloadFile/${assignedThesis.draft.file}`, {responseType: 'blob'});
      console.log(thesis);
      thesis = URL.createObjectURL(new Blob([thesis.data], {type:thesis.data.type}));
      let tempLink = document.createElement('a');
      tempLink.href = thesis;
      tempLink.setAttribute('download', `${admn}-Thesis`);
      tempLink.click();
    } catch (error) {
      console.log(error);
      alert('Some error occurred!');
    } finally {
      setdownloading(false);
    }
  }

  const onEvaluationDownloadClick = async () => {}

  useEffect(() => {
    getAssignedThesisDetails(admn);
  }, [])

  if (loading || downloading) {
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
  else {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: "10px", height: "100%" }}
      >
      <div className="text-center">
      <h2>Thesis Submission Review</h2>
      </div>
        <Divider />
        <StepProgressComponent
              steps={[
                "Draft Saved",
                "Thesis Submitted",
                "Evaluated",
              ]}
              accomplished={accomplishedSteps}
            />
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
                        src={photo ? photo : scholar}
                        alt="student dp"
                      />
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
                            <td>{assignedThesis.draft ? assignedThesis.draft.title : '-'}</td>
                          </tr>
                          <tr>
                            <th width="30%">Abstract</th>
                            <td width="2%">:</td>
                            <td>{assignedThesis.draft ? assignedThesis.draft.abstract : '-'}</td>
                          </tr>
                          <tr>
                            <th width="30%">Synopsis</th>
                            <td width="2%">:</td>
                            <td><Button disabled={!assignedThesis.draft} onClick={onSynopsisDownloadClick}>Click to View</Button></td>
                          </tr>
                          <tr>
                            <th width="30%">Thesis</th>
                            <td width="2%">:</td>
                            <td><Button disabled={!assignedThesis.draft} onClick={onThesisDownloadClick}>Click to View</Button></td>
                          </tr>
                          <tr hidden={!assignedThesis.evaluation}>
                            <th width="30%">Evaluation Report</th>
                            <td width="2%">:</td>
                            <td><Button onClick={onEvaluationDownloadClick}>Click to View</Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Content>
  );
  }
}

export default Completed;
