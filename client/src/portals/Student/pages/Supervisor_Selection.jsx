import React,{useContext, useEffect, useState} from 'react';
import { Button, Layout, Modal} from "antd";
import { Selector } from '../../../CommonComponents';
import AuthContext from "../../../context/auth/authContext";
import SupervisorAllocationContext from '../../../context/supervisorAllocation/supervisorAllocationContext';
import AlertContext from '../../../context/alert/alertContext';
import Spinner from "../../../CommonComponents/Spinner";
import Alert from '../../../CommonComponents/Alert';
import '../StudentApp.css';
import MaterialTable from 'material-table';
const {Content} = Layout;
function Supervisor(){
    const authContext = useContext(AuthContext);
    const supervisorAllocationContext = useContext(SupervisorAllocationContext);
    const alertContext = useContext(AlertContext)
    const{setAlert} = alertContext;
    const {allocateSupervisor,supervisorList,error,getSaList,clearError,checked} = supervisorAllocationContext;
    const {user} = authContext;
    const {admn} = user.dataValues;
    const [submitted, setSubmit] = useState(false);
    const [isModalVisible,setModalVisible] = useState(false);
    const [priorityList, setPriorityList] = useState([]);
    useEffect(()=>{
      getSaList(admn);
    },[]);
    const noOfSupervisor = 5;
    const rows=[];
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kell'
    ]
    const columns=[
      {title:"Priority Order",field:"sno",sorting:true},
      {title:"Supervisor",field:"name",sorting:false}
    ]
    for(var i=1;i<=noOfSupervisor;i++){
      rows.push({
          key:i,
      })
    }

    function handleChange(props){
      // eslint-disable-next-line array-callback-return
      const index = priorityList.findIndex((o, i) => {
          if (o.sno === `${props.id}`) {
              o.name = props.value;
              return true;
          }
      });
      console.log(index);
      if(index===-1){
          priorityList.push({
              sno: `${props.id}`,
              name:props.value
          })
      }

      priorityList.sort((o1, o2) => o1.sno>o2.sno);

      setPriorityList(priorityList);
    }

    function showUploadDialog() {
      setModalVisible(true);
    }

    async function handleOk() {
      await allocateSupervisor([...priorityList,admn]);
      
        if(supervisorList!==null){      
          setSubmit(true);
          setModalVisible(false);
        }
        else{
          setAlert(error);
          clearError();
        }
    }

    function handleCancel() {
      setModalVisible(false);
    }
    const col=[
      {title:"Priority Order", field:"key"},
      {title:"Supervisor",
      render: (rowData)=>(
        <Selector id={rowData.key} list={names} placeholder="Supervisor" style={{height:"fit-content",width:"200px"}} onChange={handleChange}></Selector>
      )}
    ]
    if(checked===false) return <Spinner/>
    if(checked&&supervisorList===null){
      return (
            <Content style={{ margin: "25px 25px" }}>
              <Alert/>
              <div
                className="site-layout-background text-center"
                style={{ padding: 24, minHeight: 400 }}
              >
               {/* display when submitted is false */}
                <div
                  className="container-fluid"
                  style={{ display: submitted ? "none" : "inherit" }}
                >
                  <p style={{ textAlign: "left", fontSize: "1.1rem" }}>
                    <b>NOTE: </b>The DPGC convener in consultation with scholars
                    and faculty member will assign Supervisor and co-supervisor
                    (if any) to all eligible scholars of the department.
                  </p>
                  <br />
                  <br />
                  <MaterialTable
                    columns={col}
                    data={rows}
                    style={{ margin: "0.5% 20%" }}
                    options={{
                      toolbar: false,
                      paging: false,
                      draggable: false,
                      sorting: false,
                      headerStyle: {
                        backgroundColor: "#002140",
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        fontFamily: "Open Sans",
                      },
                    }}
                  />
                  <br />
                  <br />
                  <Button type="primary" size="large" onClick={showUploadDialog}>
                    Submit
                  </Button>
                </div>
                <Modal
                  title="Confirm Supervisor Selection"
                  visible={isModalVisible}
                  okText="Confirm"
                  onOk={handleOk}
                  onCancel={handleCancel}
                  centered={true}
                >
                  <div
                    className="container-fluid"
                    style={{ textAlign: "center" }}
                  >
                    <h4 style={{ color: "#1890FF" }}>Selected List</h4>
                    <MaterialTable
                      columns={columns}
                      data={priorityList}
                      options={{
                        toolbar: false,
                        paging: false,
                        draggable: false,
                        sorting: false,
                        headerStyle: {
                          backgroundColor: "#002140",
                          color: "#FFFFFF",
                          fontWeight: "bold",
                          fontFamily: "Open Sans",
                        },
                      }}
                    ></MaterialTable>
                  </div>
                </Modal>
  
                {/* display when submitted is true */}
                <div
                  className="container-fluid"
                  style={{
                    marginTop: "15%",
                    textAlign: "center",
                    display: submitted ? "inherit" : "none",
                  }}
                >
                  <h3>Response Submitted!</h3>
                </div>
              </div>
            </Content>
      );}
    else{
    return (
        <Content style={{ margin: "25px 25px" }}>
          {/* <Alert/> */}
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
            <h3>Response Submitted!</h3>
                </div>
          </div>
            </Content>
    )}
    
}

export default Supervisor;
