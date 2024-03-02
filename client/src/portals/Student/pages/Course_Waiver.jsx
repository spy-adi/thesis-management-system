import React, { useRef, useContext, useState, useEffect } from "react";
import { Button, Layout } from "antd";
import CoursesContext from "../../../context/courses/coursesContext";
import AuthContext from "../../../context/auth/authContext";
import ProgressReportContext from "../../../context/progressReport/progressReportContext";
import bytesToSize from "../../../utils/Utility_Conversions";
import "../StudentApp.css";
import { UploadOutlined } from "@ant-design/icons";
import MaterialTable from "material-table";
import Spinner from "../../../CommonComponents/Spinner";
const { Content } = Layout;

function CourseWaiver() {
  const [displayCourses, setDisplayCourses] = useState(false);
  const authContext = useContext(AuthContext);
  const coursesContext = useContext(CoursesContext);
  const progressReportContext = useContext(ProgressReportContext);
  const {
    courseWaiverSubmitted,
    proposedCourses,
    loading,
    error,
    submitCourseWaiverApplication,
    loadCourseWaiverDetails,
    clearErrors,
  } = coursesContext;
  const getProgressDetails = progressReportContext.getProgressDetails;
  const progressDetails = progressReportContext.progressReport;
  const { admn, current_semester, current_session } = authContext.user.dataValues;
  const fileInputButton = useRef();
  const [file, setfile] = useState(null);

  function handleClick() {
    setDisplayCourses(true);
  }

  const data = [
    { sno: 1, type: "S", code: "MCC502", name: "XYZ" },
    { sno: 2, type: "x", code: "MCC501", name: "RST" },
  ];
  const columns = [
    { title: "S No.", field: "sno" },
    { title: "Course Code", field: "course_code" },
    { title: "Course Name", field: "course_name" },
    { title: "Department", field: "department" },
  ];

  const onFileSelect = (event) => {
    setfile(event.target.files[0]);
  };

  const onBrowseClick = () => {
    fileInputButton.current.click();
  };

  const onSubmitClick = () => {
    if (file != null) {
      submitCourseWaiverApplication(
        admn,
        current_semester,
        current_session,
        file
      );
    }
  };

  useEffect(() => {
    loadCourseWaiverDetails(admn, current_semester, current_session);
    getProgressDetails(admn);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (courseWaiverSubmitted) {
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
            display: courseWaiverSubmitted ? "inherit" : "none",
          }}
        >
          <h3>Course Waiver Submitted!</h3>
        </div>
      </div>
    );
  }
  else {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div
          class="container-fluid"
          style={{
            textAlign: "center",
            display: displayCourses ? "none" : "inherit",
          }}
        >
          <h3 style={{ color: "#334756", textAlign: "center" }}>
            Important Note for Course Waiver
          </h3>
          <br />
          <br />
          <p
            style={{
              color: "#334756",
              fontSize: "1.3rem",
              textAlign: "left",
            }}
          >
            The scholar will get waiver of the courses only if:
          </p>
          <ul style={{ textAlign: "left" }}>
            <li>
              <p style={{ fontSize: "1.0rem" }}>
                The course offered in the current semester of Ph.D. is matching
                (80-100%) with the course cleared in master program
              </p>
            </li>
            <li>
              <p style={{ fontSize: "1.0rem" }}>
                A minimum of 60% marks or equivalent grade has been obtained in
                that course in master program.
              </p>
            </li>
          </ul>
          <br />
          <br />
          <Button
            name="proceed"
            onClick={handleClick}
            size="large"
            syle={{ align: "center" }}
            type="primary"
          >
            Proceed
          </Button>
        </div>
        <div
          class="container-fluid"
          style={{ display: displayCourses ? "inherit" : "none" }}
        >
          <p>
            <b>Courses proposed in the current semester:</b>
          </p>
          <MaterialTable
            title=""
            columns={columns}
            data={proposedCourses}
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
          <div style={{ display: courseWaiverSubmitted ? "none" : "inherit" }}>
            <h6
              style={{
                color: "#334756",
                fontSize: "1.3rem",
                textAlign: "left",
              }}
            >
              Important note:
            </h6>
            <p>
              To avail course waiver you have to submit{" "}
              <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph1.pdf" target={'_blank'}>
                <b>PH1</b>
              </a>{" "}
              form within the prescribed deadline.
            </p>
            <p>
              <b>Deadline:</b>
            </p>
            <Button
              type="primary"
              onClick={() => onBrowseClick()}
              icon={<UploadOutlined />}
            >
              FORM
            </Button>
            <input
              type="file"
              name="file"
              onChange={(event) => onFileSelect(event)}
              style={{ display: "none" }}
              ref={fileInputButton}
            />
            <p style={{ paddingTop: "4px" }}>
              {file
                ? `${file.name} (${bytesToSize(file.size)})`
                : `No file chosen!`}
            </p>
            <Button
              type="primary"
              disabled={!file}
              onClick={() => onSubmitClick()}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </Content>
  );
  }
}

export default CourseWaiver;
