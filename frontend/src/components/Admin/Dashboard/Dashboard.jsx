import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import "./Dashboard.css";
import LineChartExample from "./LineChartExample.jsx";
import PieChart from "./PieChart";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import { width } from "@mui/system";
import { useSelector } from "react-redux";
import axiosInstance from "../../../API/axiosInstance";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Dashboard() {
  const { orderlist } = useSelector((state) => state.admin);
  const [recentlyApplied, setrecentlyApplied] = useState([]);
  const [consentsubmit, setconsentsubmit] = useState([]);
  const [users, setusers] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    axiosInstance.get("main/dashboard-details").then((res) => {
      if (res.data.success) {
        setrecentlyApplied(res.data.RecentlyApplied);
        setconsentsubmit(res.data.latest_consent);
        setusers(res.data.latest_user);
      } else {
        toast.error(res.data.message);
      }
      console.log(res.data);
    });
  }, []);

  const checkprofile = (form_Id) => {
    navigate(`/admin-panel/view3?Order_ID=${form_Id}`);
  };

  return (
    <>
      <div className="user_dashboard">
        <div className="user_details1">
          <div className="user_details12">
            <h3>Recent Applied User</h3>
            <p>115</p>
          </div>

          <div
            className="user_details13"
            style={{ display: "flex ", justifyContent: "space-between" }}
          >
            <div className="user_details14">
              <b>
                <u> User Id </u>
              </b>
            </div>
            <div className="user_details14">
              <b>
                <u> Email </u>
              </b>
            </div>
          </div>

          {recentlyApplied.length !== 0 &&
            recentlyApplied.map((data, index) => (
              <div className="user_details13">
                <div className="user_details14">{data.ORDER_ID}</div>
                <div className="user_details14">{data.EMAIL}</div>
              </div>
            ))}

          {/* <div className="last_user">
            <p>last 10 users ........</p>
          </div> */}
        </div>
        <div className="user_details2">
          <div className="user_details12">
            <h3>Consent Notes Status</h3>
            <p>20</p>
          </div>
          <div className="user_details15">
            <div className="user_details14">
            
              {consentsubmit.length !== 0 &&
                consentsubmit.map((item, index) => {
                  return (
                    <div
                      className="user_details5"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        checkprofile(
                          item.SPECIAL_ID ? item.SPECIAL_ID : item.NORMAL_ID
                        )
                      }
                    >
                      <p>
                        {item.SPECIAL_ID ? item.SPECIAL_ID : item.NORMAL_ID}
                      </p>
                      <p>
                        <Chip
                          label="Accept"
                          sx={{ margin: "0%" }}
                          icon={<DoneIcon style={{ color: "green" }} />}
                        />
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* <div className="last_user">
            <p>last 10 users ........</p>
          </div> */}
        </div>
        <div className="user_details3">
          <div className="user_details12">
            <h3>User Details</h3>
            <p>85</p>
          </div>
          {users.length !== 0 &&
            users.map((data, index) => (
              <div className="user_details13">
                <div className="user_details14">
                  {data.EMAIL.length > 12
                    ? data.EMAIL.substring(0, 12) + "...."
                    : data.EMAIL}
                </div>
                <div className="user_details14">
                  {" "}
                  {moment(data.createdAt).format("DD/MM/YYYY")}
                </div>
              </div>
            ))}
          {/* <div className="last_user">
            <p>last 10 users ........</p>
          </div> */}
        </div>
      </div>
      <br />
      <br />
      {/* <LineChartExample /> */}
      <br />
      <br />
      <PieChart />
      <br />
      <br />
    </>
  );
}
