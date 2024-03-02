import React, { useContext, useState, useEffect } from "react";
import { Button, Layout, Upload, message } from "antd";
import "../SupervisorApp.css";
import AuthContext from "../../../context/auth/authContext";
import { Selector, tableIcons } from "../../../CommonComponents";
import MaterialTable from "material-table";
import Spinner from "../../../CommonComponents/Spinner";
import axios from "axios";
const { Content } = Layout;

function Overview() {
  const authContext = useContext(AuthContext);
  const {user} = authContext;
  const {profId} = user.dataValues;

  const [loading, setLoading] = useState(true);
  const [scholars, setScholars] = useState([]);
  const [ceDetails, setCeDetails] = useState([]);
  const [fileLists, setFileLists] = useState({});
  const [status, setStatus] = useState({});

  const onFileListChanged = (info, selectedAdmn) => {
    setFileLists({...fileLists, [selectedAdmn]: info.fileList.slice(-1) });
  };

  const handleChange = value => {
    status[value.id] = value.value==="Satisfactory"?"S":"X";
    setStatus(status);
  };

  const onSubmitClick = async () => {
    setLoading(true);
    let submissionData = [];
    for (const admn in fileLists) {
      if (fileLists[admn].length > 0 && status[admn]) {
        submissionData.push({
          admn,
          file: fileLists[admn][0].originFileObj,
          status: status[admn]
        });
      }
    }
    try {
      await Promise.all(submissionData.map(async (element) => {
        const formData = new FormData();
        console.log(element);
        formData.append('result1', element.status);
        formData.append('rep1', element.file);
        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        };
        const content = await axios.put(`/api/ceRep/${element.admn}`, formData, config);
        if (content.status === 200) {
          await axios.put(`/api/progressReport/${element.admn}`, {comprehensive_exam_status: element.status});
        }
        console.log(content);
      }));
      loadData();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/professor/ceEligible/${profId}`);
      setScholars(res.data.scholars);
      setFileLists(res.data.scholars.reduce( (map, element) => { map[element.scholar.admn] = []; return map; }, {} ));
      setCeDetails(res.data.ceDetails);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData()
  }, []);
  const options =["Satisfactory","Unsatisfactory"];

  const columns = [
    { title: "Admission No.", field: "id" },
    { title: "Name", field: "name" },
    { title: "Department", field: "department" },
    {
      title: "Details",
      field: "url",
      render: (rowData) => <a href={rowData.url}>View</a>,
    },
    { title: "Status",field:"status",
    render: (rowData) => (
      rowData.status==="pending"?
      <Selector
        id={rowData.id}
        list={options}
        placeholder="Unsatisfactory"
        style={{ width: "150px", height: "40px" }}
        onChange={handleChange}
      ></Selector>:<p>{rowData.status.toUpperCase()}</p>
    )
  },
    {
      title: "Upload Result",
      filed: "url",
      render: (rowData) => (
        <>
          <Upload fileList={fileLists[rowData.id]} beforeUpload={() => false} multiple={false} onChange={info => onFileListChanged(info, rowData.id)}>
            <Button type="primary">Upload</Button>
          </Upload>
        </>
      ),
    },
  ];
  let data = scholars.map( (element, index) => {
    return {
      id: element.scholar.admn,
      name: element.scholar.name,
      department: element.scholar.department,
      url: `/sp/mygroupoverview/${element.scholar.admn}`,
      status: ceDetails[index] ? ceDetails[index].result2 ? ceDetails[index].result2 : ceDetails[index].result1 : null,
    };
  });
  
  if (loading) {
    return <Spinner />
  } else {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div className="container-fluid">
          <h4 style={{ color: "#334756", fontSize: "1.2rem", margin: "3% 0" }}>
            List of Scholars elligible for Comprehensive Examination
          </h4>
          <p>
            *Download{" "}
            <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph4.pdf">
              <b>PH4</b>
            </a>{" "}
            form and fill it to upload the result of Comprehensive
            Examination
          </p>
          <MaterialTable
            title="Thesis"
            columns={columns}
            data={data}
            icons={tableIcons}
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
          <div className="container text-center">
            <Button onClick={onSubmitClick} type="primary">Submit</Button>
          </div>
        </div>
      </div>
    </Content>
  );
  }
}

export default Overview;

