import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance, { imageBacked } from "../../API/axiosInstance";
import { toast } from "react-toastify";

export default function BlogTable() {
  const { blogs } = useSelector((state) => state.admin);

  const [rows, setrow] = React.useState([]);

  React.useEffect(() => {
    axiosInstance.get("main/register-user").then((res) => {
      if (res.data.success) {
        if (res.data.data.length > 0) {
          setrow(res.data.data);
        }
        // console.log(res.data.data);
      }
    });
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "user Id",
    },
    {
      field: "USERNAME",
      headerName: "username",
      width: 250,
      editable: true,
    },
    {
      field: "F_NAME",
      headerName: "Name",
      width: 250,
      editable: true,
    },
    {
      field: "EMAIL",
      headerName: "Email",
      width: 250,
      editable: true,
    },
    {
      field: "USERROLE",
      headerName: "user role",
      width: 250,
      editable: true,
    },
    {
      headerName: "Actions",
      renderCell: (params) => actionElement(params),
    },
  ];

  const handleDelete = (params) => {
    toast.error("you can't delete user");
    // if (window.confirm("Do You really want to delete blog") === true) {
    //   axiosInstance
    //     .delete("main/mycreate-blog?BLOG_ID=" + params.row.id)
    //     .then((res) => {
    //       if (res.data.success) {
    //         toast.success(res.data.message);
    //         // window.location.reload();
    //       }
    //     });
    // }
  };

  const handleedit = (params) => {};

  const actionElement = (params) => (
    <div className="action-wrapper">
      {/* <RemoveRedEyeIcon
        onClick={() => handleedit(params)}
        className="action-icon"
      /> */}
      <DeleteIcon
        onClick={() => handleDelete(params)}
        className="action-icon"
      />
    </div>
  );

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
