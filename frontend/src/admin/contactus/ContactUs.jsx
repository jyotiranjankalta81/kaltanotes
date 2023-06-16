import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { serverInstance } from "../../API/ServerInstance";
import { toast } from "react-toastify";

const headCells = [
  {
    id: "FULLNAME",
    numeric: false,
    disablePadding: true,
    label: "FULL_NAME",
  },
  {
    id: "EMAIL",
    numeric: true,
    disablePadding: false,
    label: "EMAIL",
  },
  {
    id: "SUBJECT",
    numeric: true,
    disablePadding: false,
    label: "subject",
  },
  {
    id: "TRACKINGID",
    numeric: true,
    disablePadding: false,
    label: "trackingid",
  },
  {
    id: "MESSAGE",
    numeric: true,
    disablePadding: false,
    label: "message",
  },
  {
    id: "createdAt",
    numeric: true,
    disablePadding: false,
    label: "applied date",
  },
];

const ContactUs = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [deletesign, setDeleteSign] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);
  const navigate = useNavigate();
  const [rows, setrows] = React.useState([]);
  const screen = window.innerWidth < 1000;

  const handleViewDetails = () => {
    navigate("/admin-panel/view3");
  };

  const handleFormFilter = () => {
    setOpenFilter(!openFilter);
  };

  var numSelected = selected.length;
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const getblog = () => {
    serverInstance("main/contace-us", "get").then((res) => {
      setrows(res.data);
    });
  };

  React.useEffect(() => {
    getblog();
  }, []);

  const handledelete = (CONTACTUS_ID) => {
    serverInstance(
      "main/delete-contactus?CONTACTUS_ID=" + CONTACTUS_ID,
      "delete"
    ).then((res) => {
      if (res.success) {
        getblog();
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <>
      <div className="tables_group">
        <Box sx={{ width: "100%" }}>
          <Paper
            sx={{
              width: screen ? "92vw" : "70vw",
              mb: 2,
              mt: 1,
              boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.25)",
            }}
          >
            {numSelected > 0 ? (
              <Toolbar
                sx={{
                  pl: { sm: 2 },
                  pr: { xs: 1, sm: 1 },
                  ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                      alpha(
                        theme.palette.primary.main,
                        theme.palette.action.activatedOpacity
                      ),
                  }),
                }}
              >
                {numSelected > 0 ? (
                  <Typography
                    sx={{ flex: "1 1 100%" }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                  >
                    {numSelected} selected
                  </Typography>
                ) : (
                  <Typography
                    sx={{ flex: "1 1 100%" }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                  >
                    All Listed Blogs
                  </Typography>
                )}

                {numSelected > 0 ? (
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Filter list">
                    <IconButton>
                      <FilterListIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Toolbar>
            ) : (
              <div
                style={{
                  width: "100%",
                  display: "none",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <Tooltip title="Filter list">
                  <IconButton>
                    <FilterListIcon onClick={handleFormFilter} />
                  </IconButton>
                </Tooltip>
              </div>
            )}
            <Divider />
            <TableContainer
              sx={{
                width: screen ? "92vw" : "70vw",
                overflowX: "scroll",
              }}
            >
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                // size={dense ? 'small' : 'medium'}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          hover
                          // onClick={(event) => handleClick(event, row.name)}
                          role="checkbox"
                          // aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.PARTNERUS_ID}
                        >
                          <TableCell
                            id={labelId}
                            sx={{
                              pl: 3,
                              background: "#EEEEEE",
                              border: "3px black",
                              borderStyle: "solid none solid none",
                            }}
                          >
                            {row.FULLNAME}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              background: "#EEEEEE",
                              // maxWidth: 50,
                              border: "3px solid black",
                            }}
                          >
                            {row.EMAIL}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              background: "#EEEEEE",
                              border: "3px solid black",
                            }}
                          >
                            {row.SUBJECT}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              background: "#EEEEEE",
                              border: "3px solid black",
                            }}
                          >
                            {row.TRACKINGID}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              background: "#EEEEEE",
                              border: "3px solid black",
                            }}
                          >
                            {row.MESSAGE}
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              background: "#EEEEEE",
                              border: "3px solid black",
                            }}
                          >
                            {row.createdAt}
                          </TableCell>
                          <TableCell
                            padding="checkbox"
                            sx={{
                              border: "3px solid black",
                              borderStyle: "solid none solid solid",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                width: "100%",
                                cursor: "pointer",
                              }}
                            >
                              {/* <RemoveRedEyeIcon onClick={handleViewDetails} /> */}
                              <DeleteIcon
                                onClick={() => {
                                  handledelete(row.CONTACTUS_ID);
                                }}
                              />
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: 33 * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              sx={{
                background: "#EEEEEE",
                border: "3px black",
                borderStyle: "none none solid none",
              }}
              rowsPerPageOptions={[1, 5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default ContactUs;

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              pl: 3,
              // width: '',
              background: "#FFFFFF",
              // maxWidth: 50,
              border: "3px black",
              borderStyle: "none solid solid none",
            }}
          >
            {headCell.label}
          </TableCell>
        ))}
        <TableCell sx={{ pl: 3 }}>Action</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
