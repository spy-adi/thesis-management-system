import React, { useContext, useState } from "react";
import AuthContext from "../../../../context/auth/authContext";
import { Divider, Layout, Button } from "antd";
import scholar from "../../images/scholar.png";
import { useLocation, useNavigate } from "react-router-dom";
import Modal1 from "antd/lib/modal/Modal";
import { Modal } from 'antd';
import Spinner from "../../../../CommonComponents/Spinner";
import setAuthToken from "../../../../utils/setAuthToken";
import axios from "axios";
const { Content } = Layout;

function Confirmation() {

  const authContext = useContext(AuthContext);
  const { admn, name, department, branch, photo } = authContext.user.dataValues;

  const { state } = useLocation();
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!state) {
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
          <h3>Invalid Request!</h3>
        </div>
      </div>
    );
  }
  const thesis = URL.createObjectURL(state.thesis);
  const synopsis = URL.createObjectURL(state.synopsis);

  const showSubmittedModal = () => {
    Modal.info({
      title: 'Thesis Submitted!',
      content: (
        <div>
          Your thesis has been submitted successfully!
        </div>
      ),
      onOk: ()  => { finished(); },
    });
  };

  const finished = () => {
    navigate('/st/thesis/completed', { replace: true } );
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setLoading(true);
    setIsModalVisible(false);
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const formData = new FormData();
      formData.append("title", state.title);
      formData.append("abstract", state.abstract);
      formData.append("thesis", state.thesis);
      formData.append("synopsis", state.synopsis);
      formData.append("finalSubmission", true);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const res = await axios.put(`http://localhost:3000/api/draft/save/${admn}`, formData, config);
      console.log(res.status);
      if (res.status === 200) {
        showSubmittedModal();
      }
      else if (res.status === 404) {
        alert(res.message);
        setLoading(false);
      }
      else {
        alert('Some error occurred');
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      alert('Some error occurred!');
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (loading) {
    return <Spinner />
  }
  else {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: "10px", height: "100%" }}
      >
      <div className="text-center">
      <h2>Thesis Review and Submission</h2>
      </div>
        <Divider />
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
                            <td>{state.title}</td>
                          </tr>
                          <tr>
                            <th width="30%">Abstract</th>
                            <td width="2%">:</td>
                            <td>{state.abstract}</td>
                          </tr>
                          <tr>
                            <th width="30%">Synopsis</th>
                            <td width="2%">:</td>
                            <td><Button><a href={`${synopsis}`} download={`${admn}-Synopsis`}>Click to View</a></Button></td>
                          </tr>
                          <tr>
                            <th width="30%">Thesis</th>
                            <td width="2%">:</td>
                            <td><Button><a href={`${thesis}`} download={`${admn}-Thesis`}>Click to View</a></Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center">
            <Button type="primary" onClick={showModal}>Submit</Button>
          </div>
          <Modal1 title="Confirmation Dialog" visible={isModalVisible} okText={'Yes'} onOk={handleOk} onCancel={handleCancel}>
            <h5>Are you sure you wish to submit your thesis?</h5>
          </Modal1>
      </div>
    </Content>
  );
  }
}

export default Confirmation;