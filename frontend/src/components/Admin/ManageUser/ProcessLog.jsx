import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridFilterListIcon } from "@mui/x-data-grid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import moment from "moment";
import axiosInstance from "../../../API/axiosInstance";

export default function ProcessLog() {
  const [rows, setrows] = React.useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  const columns = [
    {
      field: "id",
      headerName: "S. no.",
    },
    {
      field: "ProcessName",
      headerName: "Process Name",
      width: 450,
    },
    {
      field: "processDate",
      headerName: "Process Date",
      width: 400,
    },
  ];

  React.useEffect(() => {
    const orderId = searchParams.get("orderId");
    let arry = [];
    axiosInstance
      .post("main/process-log", { ORDER_ID: orderId })
      .then((res) => {
        if (res.data.success) {
          const body = res.data.data;
          body.forEach((data, index) => {
            arry.push({
              id: index + 1,
              ProcessName: data.PERPOUS,
              processDate: moment(data.createdAt).format("YYYY-MM-DD"),
            });
          });

          setrows(arry);
        }
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
