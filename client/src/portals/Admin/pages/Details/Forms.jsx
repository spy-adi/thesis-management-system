import React from "react";
import { Layout } from "antd";
import "../../AdminApp.css";
import MaterialTable from "material-table";

const { Content } = Layout;
const data = [
  {
    sno: 1,
    purpose: "Course Waiver to Ph.D. Scholar",
    code: "PH1",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph1.pdf",
    name: "Convener (DPGC)",
  },
  {
    sno: 2,
    purpose: "Constitution of Doctoral Scrutiny Committee (DSC)",
    code: "PH2",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph2.pdf",
    name: "Dean (Academic)",
  },
  {
    sno: 3,
    purpose:
      "Form for 2nd Semester Course Work Proposed By DSC for Ph.D Scholar",
    code: "PH3",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph3.pdf",
    name: "Dean (Academic)",
  },
  {
    sno: 4,
    purpose: "Comprehensive Examination Report",
    code: "PH4",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph4.pdf",
    name: "Dean (Academic)",
  },
  {
    sno: 5,
    purpose: "Research Proposal Seminar Report",
    code: "PH5",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph5.pdf",
    name: "Dean (Academic)",
  },
  {
    sno: 6,
    purpose: "Pre-Submission Thesis Assessment by Doctoral Scrutiny Committee",
    code: "PH6",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph6.pdf",
    name: "Convener (DPGC)",
  },
  {
    sno: 7,
    purpose: "Pre-Submission Report of Ph.D. Scholar",
    code: "PH7",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph7.pdf",
    name: "Convener (DPGC)",
  },
  {
    sno: 8,
    purpose: "Certificate for Acceptance of Draft Thesis by DSC ",
    code: "PH7-A",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph7a.pdf",
    name: "Convener (DPGC)",
  },
  {
    sno: 9,
    purpose: "Suggested Panel of Examiners",
    code: "PH8",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph8.pdf",
    name: "Dean (Academic)",
  },
  {
    sno: 10,
    purpose: "Particulars of candidate for Submission of Synopsis for Ph.D",
    code: "PH9",
    url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph9.pdf",
    name: " Dean (Academic)",
  },
];
const columns = [
  { title: "S No.", field: "sno" },
  { title: "Application for", field: "purpose" },
  { title: "Form No", field: "code" },
  {
    title: "Download",
    field: "url",
    render: (rowData) => (
      <a href={rowData.url}>
        <img
          alt=""
          class="icon"
          src="https://img.icons8.com/fluent/48/000000/pdf.png"
        />
      </a>
    ),
  },
  { title: "Submitted To", field: "name" },
];
function Forms() {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background text-center"
        style={{ padding: 24, minHeight: 400 }}
      >
        <MaterialTable
          title=""
          columns={columns}
          data={data}
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
      </div>
    </Content>
  );
}
export default Forms;
