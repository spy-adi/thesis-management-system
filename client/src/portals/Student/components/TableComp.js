import MaterialTable from "material-table";
import {
  DownloadOutlined
} from '@ant-design/icons';
import React from "react";
import axios from "axios";
import download from "downloadjs";
import {ArrowForwardIos, ArrowRight } from "@material-ui/icons";

function TableComp(props) {

  const onDownloadClick = async (event, rowData) => {
    const res = await axios.get(`/api/getFile/${rowData.file}`, { responseType: 'blob' });
    const file = new Blob([res.data], {type: res.data.type});
    download(file, `${rowData.type}.${res.data.type}`)
  }

  return (
    <div className="table" style={{marginTop:"4%"}}>
      <MaterialTable
        options={{
          toolbar: false,
          paging: false,
          search: false,
          headerStyle: {
            backgroundColor: "#002140",
            color: "#FFFFFF",
            fontWeight: "bold",
          },
          showTitle: false,
          actionsColumnIndex: 4,
          draggable: false,
        }}
        localization={{ header: { actions: "Report" } }}
        actions={[
          (rowData) => ({
            icon: DownloadOutlined,
            tooltip: "Download Report",
            onClick: onDownloadClick,
            disabled: !rowData.file,
          }),
        ]}
        columns={[
          { title: "S.No.", field: "serial" },
          { title: "Type", field: "type", sorting: false },
          { title: "Category/Status", field: "status", sorting: false },
          { title: "Date", field: "date", type: "date", sorting: false },
        ]}
        data={props.progData}
        title="Demo Title"
        
      detailPanel={[
        {
          tooltip: "Details",
          icon: ArrowRight,
          render: (rowData) => {
            return (
              <div
                style={{
                  fontSize: 100,
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "#43A047"
                }}
              >
                <p>Hi</p>
              </div>
            );
          }
        }
      ]}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
      />
    </div>
  );
}

export default TableComp;
