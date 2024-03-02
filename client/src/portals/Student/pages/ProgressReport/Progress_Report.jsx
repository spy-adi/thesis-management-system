import React, {useEffect,useContext,useState } from "react";
import StepProgressComponent from "../../components/StepProgressComponent";
import TableComp from "../../components/TableComp";
import { Divider, Layout, Modal } from "antd";
import Button from "antd-button-color";
import bytesToSize from "../../../../utils/Utility_Conversions";
import "../../StudentApp.css";
import "antd/dist/antd.css";
import AuthContext from "../../../../context/auth/authContext";
import Spinner from "../../../../CommonComponents/Spinner";
import ProgressReportContext from "../../../../context/progressReport/progressReportContext";
import axios from "axios";
import { CED_RPS, JRF_2_SRF, PSS } from "../../components";
const { Content } = Layout;

function ProgressReport(){
  
const authContext = useContext(AuthContext);
const progressReportContext = useContext(ProgressReportContext);
const {user} = authContext;
const {admn} = user.dataValues;
const {progressReport,getProgressDetails, getPssApplied, pssApplied} = progressReportContext;
  const [applyPSSEnabled] = useState(true);
  const [fileInputButton] = useState(React.createRef());
  const [state,setState] = useState({ isModalVisible: false,file: null});
useEffect(()=>{
    getProgressDetails(admn);
    getPssApplied(admn);
    //eslint-disable-next-line
  },[]);
  if(progressReport===null) return <Spinner/>
  const{comprehensive_exam_status,rps_status,fellowship_status,pss_status,phd_degree,viva_voice_status,thesis_submission_status,thesis_evaluation_status, ce_rep, rps_rep, pss_rep, overall_thesis_eval, vv_rep}=progressReport;
  let status = [comprehensive_exam_status,rps_status,fellowship_status,pss_status,thesis_submission_status,thesis_evaluation_status,viva_voice_status,phd_degree];
  let n=0,i;
  for(i=0;i<status.length-1;i++){
    if(status[i]==="S"||status[i]==="SRF"||status[i]==="submitted"||status[i]==="awarded"||status[i]==="evaluated"){
      n++;
    }
  }
  console.log(progressReport);
    function onFileSelect(e){
      setState({...state, file: e.target.files[0] });
    }

    function onBrowseClick(){
      fileInputButton.current.click();
    }
    
    function showUploadDialog(){
      setState({
        isModalVisible: true,
      });
    }

    function handleOk() {
      try {
        const formData = new FormData();
        formData.append('scholarId', admn);
        formData.append('supervisor', user.dataValues.supervisorId);
        formData.append('file', state.file);
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        };
        axios.post('/api/pssRequest/add', formData, config).then((res) => {
          setState({
            ...state,
            file: null,
            isModalVisible: false,
          });
        })
      } catch (error) {
        console.error(error);
      }
    }

    function handleCancel() {
      setState({
        ...state,
        isModalVisible: false,
      });
    }

    // DATA
    const ced = [
      {
        date:'XXXXX',
        rodsc:'XXXX',
        upon:'XXXX',
        upby:'XXXX',
        url:'XXXXX'
      }
    ]

    const rps = [
      {
        date:'XXXXY',
        rodsc:'XXXXY',
        upon:'XXXXY',
        upby:'XXXXY',
        url:'XXXXY'
      },
      {
      date:'XXXXY',
      rodsc:'XXXXY',
      upon:'XXXXY',
      upby:'XXXXY',
      url:'XXXXY'
    }
    ]

    const j2s = {
      date:'XXXXY',
      upon:'XXXXY',
      upby:'XXXXY',
      url:'XXXXY'
    }

    const pss = {
        date:'XXXXX',
        rodsc:'XXXX',
        upon:'XXXX',
        upby:'XXXX',
        url:'XXXXX'
      }

    return (
      <Content style={{ margin: "25px 25px" }}>
      
      <div className="container">
      <StepProgressComponent
              accomplished={n}
            />
        </div>

        <div>
          <div
            className="site-layout-backgroundm"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minWidth: "0",
              backgroundColor: "white",
              padding: "5%",
              paddingTop: "0",
            }}
          >


            <br />
            <br />
            
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="center" ><Button type="primary"  style={{width:'93%' }}>Comprehensive Examination</Button></td>
                    <td> 
                      <CED_RPS ced={ced[0]}/>
                      {ced.length===2?<span><Divider /><CED_RPS ced={ced[1]}/></span>:<span></span>} 
                      </td>
                  </tr>
                  <tr>
                    <td className="center" ><Button type="danger" style={{width:'90%' }}>Research Proposal Seminar</Button></td>
                    <td> 
                      <CED_RPS ced={rps[0]}/>
                      {rps.length===2?<div><Divider /><CED_RPS ced={rps[1]}/></div>:<div></div>}
                    </td>
                  </tr>
                  <tr>
                    <td className="center" ><Button type="danger" style={{ background: "#f39c12", borderColor: "#e08e0b", width:'90%' }}>JRF to SRF</Button></td>
                    <td> <JRF_2_SRF j2s={j2s}/></td>
                  </tr>
                  <tr>
                    <td className="center" ><Button type="primary" style={{ width:'90%' }}>Pre Submission Seminar</Button></td>
                    <td> <PSS pss={pss}/></td>
                  </tr>
                  <tr>
                    <td className="center" ><Button type="danger" style={{ background: "#00c0ef", borderColor: "#00acd6", width:'90%' }}>Synopsis & Draft Thesis</Button></td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td className="center" ><Button type="danger" style={{ background: "#f39c12", borderColor: "#e08e0b", width:'90%' }}>PhD Viva-voce</Button></td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td className="center" ><Button type="danger" style={{ background: "#00a65a", borderColor: "#008d4c", width:'90%' }}>Final Thesis</Button></td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td className="center" ></td>
                    <td> </td>
                  </tr>
                </tbody>
              </table>

            <br />
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // eslint-disable-next-line no-dupe-keys
                display:applyPSSEnabled ? "inherit" : "none",
              }}
            >
              {pssApplied ? <div><h4>PSS Application Submitted</h4></div> : applyPSSEnabled&&<Button type="primary" onClick={() => showUploadDialog()}>
                Apply for Pre Submission Seminar
              </Button>}
              <Modal
                title="Submit PSS Application"
                visible={state.isModalVisible}
                okText="Submit"
                onOk={() => handleOk()}
                onCancel={() => handleCancel()}
                centered={true}
                width="40%"
                style={{ minWidth: "500px", maxWidth: "900px" }}
              >
                <div>
                  <a
                    href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph6.pdf"
                    target="_blank"
                    style={{ fontSize: "large", fontWeight: "bold" }}
                    rel="noreferrer"
                  >
                    Click Here to download Form-PH6
                  </a>
                  <div style={{ height: "12px" }}></div>
                  <p>
                    IMPORTANT INSTRUCTIONS:
                    <br />
                    You may apply for a Pre-Submission Seminar only when at
                    least one research paper is accepted for
                    publication/published in SCI/SCIE/SSCI*/AHCI*/ABDC/MCI
                    Journals (Q1 or Q2) and the entire draft of the thesis has
                    cleared the plagiarism check as prescribed and is certified
                    by the supervisor for submission of the thesis. The DSC will
                    forward your application (Form No. PH6) to the Academic
                    Section, if the thesis is ready in all respect.
                  </p>
                  <div style={{ paddingTop: "16px" }}>
                    <p style={{ fontSize: "large" }}>
                      Upload Filled Application:
                    </p>
                    <Button type="primary" onClick={() => onBrowseClick()}>
                      Choose File
                    </Button>
                    <input
                      type="file"
                      name="file"
                      onChange={(event) => onFileSelect(event)}
                      style={{ display: "none" }}
                      ref={fileInputButton}
                    />
                    <p style={{ paddingTop: "4px" }}>
                      {state.file
                        ? `${state.file.name} (${bytesToSize(
                            state.file.size
                          )})`
                        : `No file chosen!`}
                    </p>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </Content>
    );
  }

export default ProgressReport;
