import React, { useContext, useState, useEffect } from "react";
import { Button, Layout, Upload, message } from "antd";
import "../SupervisorApp.css";
import "antd/dist/antd.css";
import AuthContext from "../../../context/auth/authContext";
import { tableIcons,Selector } from "../../../CommonComponents";
import MaterialTable from "material-table";
import Spinner from "../../../CommonComponents/Spinner";
import axios from "axios";
const { Content } = Layout;

function Overview() {
  const authContext = useContext(AuthContext);
  const {user} = authContext;
  const {profId} = user.dataValues;

  const [isUploaded, setIsUploaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scholars, setScholars] = useState([]);
  const [rpsDetails, setRpsDetails] = useState([]);
  const [fileLists, setFileLists] = useState({});

  const onFileListChanged = (info, selectedAdmn) => {
    setFileLists({...fileLists, [selectedAdmn]: info.fileList.slice(-1) });
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/professor/rpsEligible/${profId}`);
      setScholars(res.data.scholars);
      setFileLists(res.data.scholars.reduce( (map, element) => { map[element.scholar.admn] = []; return map; }, {} ));
      setRpsDetails(res.data.rpsDetails);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData()
  }, []);
  const options =["S","X"];

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
      <Selector
        id={rowData.id}
        list={options}
        placeholder="S"
        style={{ width: "150px", height: "40px" }}
        // onChange={handleChange}
      ></Selector>
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
      url: `/sp/mygroupoverview/${element.scholar.admn}`
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
            List of Scholars elligible for Research Proposal Seminar
          </h4>
          <p>
            *Download{" "}
            <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph5.pdf">
              <b>PH5</b>
            </a>{" "}
            form and fill it to upload the result of Research Proposal Seminar
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
            <Button type="primary">Submit</Button>
          </div>
        </div>
      </div>
    </Content>
  );
  }
}

export default Overview;
