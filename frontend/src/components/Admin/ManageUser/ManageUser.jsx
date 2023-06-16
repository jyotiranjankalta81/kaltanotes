import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridFilterListIcon } from "@mui/x-data-grid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import FilterForm from "./FilterForm";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import {
  ApplicationType,
  StatusType,
} from "../../../UtilComponents/ApplicationType/ApplicationType";
import moment from "moment";
import { toast } from "react-toastify";

export default function ManageUser() {
  const [rows, setrows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const { orderlist } = useSelector((state) => state.admin);
  const handleOnClick = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    let arry = [];
    if (orderlist && orderlist.length !== 0) {
      orderlist.forEach((data, index) => {
        arry.push({
          id: index + 1,
          Action: null,
          L_NAME: data.L_NAME,
          F_NAME: data.F_NAME,
          ORDER_TYPE: ApplicationType(data.ORDER_TYPE),
          DOB: data.DOB,
          APPLICATION_NUMBER: data.SPECIAL_ID
            ? data.SPECIAL_ID
            : data.NORMAL_ID,
          EMAIL: data.EMAIL,
          STATUS: StatusType(data?.STATUS),
          ATIP_UCI_ID: data.ATIP ? data.ATIP : data.UCI_NUMBER,
          NOTES_APPLIEDON: data.NOTES_APPLIEDON
            ? moment(data.NOTES_APPLIEDON).format("YYYY-MM-DD")
            : "-",
          DAYREMAIN: data.COMPLETION_DATE
            ? moment(data.COMPLETION_DATE).diff(data.createdAt, "days")
            : "-",
          COMPLETION_DATE: data.COMPLETION_DATE
            ? moment(data.COMPLETION_DATE).format("YYYY-MM-DD")
            : "-",
          PAYMENT_ID: data.PAYMENT_ID,
          COMPLETED_BY: data.COMPLETED_BY ? data.COMPLETED_BY : "-",
        });
      });
      // setTimeout(() => {
      setrows(arry);
      // }, 5000);
    }
  }, [orderlist]);

  const handleDelete = (params) => {
    toast.error("Delete feature will be avilable on production Mode");
    // console.log(params, "this is delete");
  };

  const columns = [
    {
      field: "id",
      headerName: "order No",
    },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => actionElement(params),
    },
    {
      field: "processlog",
      headerName: "Process Log",
      width: 150,

      renderCell: (params) => processlogscreen(params),
    },
    {
      field: "L_NAME",
      headerName: "Last Name",
      width: 150,
    },
    {
      field: "F_NAME",
      headerName: "First Name",
      width: 150,
      //
    },
    {
      field: "ORDER_TYPE",
      headerName: "Order Type",
      width: 150,
      //
    },
    {
      field: "DOB",
      headerName: "Date of birth",
      width: 150,
    },
    {
      field: "APPLICATION_NUMBER",
      headerName: "Application Number",
      width: 150,
    },
    {
      field: "EMAIL",
      headerName: "Email Address",
      width: 150,
    },
    {
      field: "STATUS",
      headerName: "Current Status",
      width: 150,
    },
    {
      field: "ATIP_UCI_ID",
      headerName: "ATIP / UCI Number",
      width: 150,
    },
    {
      field: "NOTES_APPLIEDON",
      headerName: "Notes Applied On",
      width: 150,
    },
    {
      field: "DAYREMAIN",
      headerName: "Day Left/Taken",
      width: 150,
    },
    {
      field: "COMPLETION_DATE",
      headerName: "Completion Date",
      width: 150,
    },
    {
      field: "PAYMENT_ID",
      headerName: "Payment Id",
      width: 150,
    },
    {
      field: "COMPLETED_BY",
      headerName: "Completed By",
      width: 150,
    },
  ];

  const handleView = (params) => {
    console.log(params, "this is edit");
  };

  const actionElement = (params) => (
    <div className="action-wrapper">
      <Link
        to="/admin-panel/view3"
        style={{ listStyle: "none", color: "black" }}
      >
        <RemoveRedEyeIcon className="action-icon" />
      </Link>
      <DeleteIcon onClick={handleDelete} className="action-icon" />
    </div>
  );

  const processlogscreen = (params) => (
    <div className="action-wrapper">
      <Link
        to={"/admin-panel/Processlog?orderId=" + params.row.APPLICATION_NUMBER}
        style={{ listStyle: "none", color: "black" }}
      >
        <RemoveRedEyeIcon className="action-icon" />
      </Link>
    </div>
  );

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {/* <div className="filter_sign">
        <button
          className="filter"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <Tooltip title="Filter">
            <GridFilterListIcon onClick={handleOnClick} />
          </Tooltip>
        </button>
      </div> */}
      {open && <FilterForm openform={setOpen} />}
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
