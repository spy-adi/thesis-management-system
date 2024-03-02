import React from "react";
import { Layout } from "antd";
import "../../AdminApp.css";
import { tableIcons } from "../../../../CommonComponents";
import MaterialTable from "material-table";
const { Content } = Layout;

function Thesis() {
  const columns = [
    { title: "ID", field: "id" },
    { title: "Title", field: "title" },
    { title: "Submitted By", field: "name" },
    { title: "Submission Date", field: "date", type: "date" },
    {
      title: "Details",
      filed: "url",
      render: (rowData) => <a href={rowData.url}>View</a>,
    },
  ];
  const data = [
    {
      id: "1",
      title: "Translational Data Analytics and Decision Science",
      name: "Ayush Tripathi",
      date: "12/12/2021",
      url: "/st/profile",
    },
    {
      id: "2",
      title: "Resilient, Sustainable and Global Food Security for Health",
      name: "Mrinal Pathak",
      date: "12/12/2021",
      url: "/st/profile",
    },
    {
      id: "3",
      title: "Prevention and Treatment of Chronic Brain Injury",
      name: "Aditya Mishra",
      date: "12/12/2021",
      url: "/st/profile",
    },
    {
      id: "4",
      title:
        "Personalized Food and Nutritional Metabolic Profiling to Improve Health.",
      name: "Pattewar Darshan",
      date: "12/12/2021",
      url: "/st/profile",
    },
  ];
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <MaterialTable
          title="Thesis"
          columns={columns}
          data={data}
          icons={tableIcons}
          options={{
            // toolbar: false,
            search: true,
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

export default Thesis;
