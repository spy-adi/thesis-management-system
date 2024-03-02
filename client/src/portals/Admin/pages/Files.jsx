import React from "react";
import { Layout,Button } from "antd";
import "../AdminApp.css";
import { tableIcons } from "../../../CommonComponents";
import MaterialTable from "material-table";
import DownloadOutlined from "@ant-design/icons/DownloadOutlined"
const { Content } = Layout;

function Files() {
  const columns = [
    { title: "S No.", field: "sno",sorting: false, },
    { title: "Category", field: "fname",sorting: false, },
    { title: "Submitted By", field: "name",sorting: false, },
    { title: "Submission Date", field: "date", type: "date",sorting:true},
    {
      title:"Download File",
      field: "url",
      sorting: false,
      render: (rowData) => <a href={rowData.url}><DownloadOutlined style={{ fontSize: '25px'}} /></a>,
    },
  ];
  const data = [
    {
      sno: "1",
      fname: "PH1",
      name: "Ayush Tripathi",
      date: "11/12/2020",
      url: "thesis/thesis_id",
    },
    {
      sno: "2",
      fname: "PH8",
      name: "Mrinal Pathak",
      date: "11/11/2021",
      url: "thesis/thesis_id",
    },
    {
      sno: "3",
      fname: "PH7",
      name: "Aditya Mishra",
      date: "12/12/2021",
      url: "thesis/thesis_id",
    },
    {
      sno: "4",
      fname:
        "PH4",
      name: "Pattewar Darshan",
      date: "12/12/2021",
      url: "thesis/thesis_id",
    },
  ];
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <MaterialTable
          title="Files"
          columns={columns}
          data={data}
          icons={tableIcons}
          options={{
            // toolbar: false,
            search: true,
            paging: false,
            draggable: false,
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

export default Files;
