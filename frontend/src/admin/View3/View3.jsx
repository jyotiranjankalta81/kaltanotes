import React from "react";
import AdminSidebar from "../AdminSideBar/AdminSidebar";
import AdminNavbar from "../AdminNavbaar/AdminNavbar";
import AdminApp from "../AdminApp/AdminApp";
import "./View3.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import MailFormatter from "../../components/Admin/ManageUser/MailFormatter";
import { useSelector } from "react-redux";

function View1() {
  const navigate = useNavigate();
  const [ismyform, setismyform] = React.useState([]);
  const [openmail, setOpenMail] = React.useState(false);
  const { orderlist } = useSelector((state) => state.admin);
  let [searchParams, setSearchParams] = useSearchParams();
  const [isStateData, setStateData] = React.useState(null);

  const handleOpen = () => {
    setOpenMail(true);
  };

  React.useEffect(() => {
    if (orderlist.length !== 0) {
      const myuser = orderlist.filter(
        (data, index) =>
          data.NORMAL_ID === searchParams.get("Order_ID") ||
          data.SPECIAL_ID === searchParams.get("Order_ID")
      );
      setismyform(myuser);
    }
  }, [orderlist]);

  return (
    <div className="addusercontainer">
      {/* <AdminSidebar /> */}
      <div className="adminbody">
        {/* <AdminNavbar /> */}
        {ismyform.length !== 0 ? (
          <AdminApp ismyform={ismyform} />
        ) : (
          <p>Loading...</p>
        )}
        <div className="status">
          <h1 className="status_head">Status</h1>
          <div className="process">
            <div className="pro1">Processing Order</div>
            <div className="pro1">Awaiting Consent</div>
            <div className="pro1">Notes Applied</div>
            <div className="pro1">Completed</div>
          </div>
          <div className="status_cir">
            <span
              className={`dot1 ${
                ismyform.length !== 0 &&
                (ismyform[0].STATUS === 0 ||
                  ismyform[0].STATUS === 5000 ||
                  ismyform[0].STATUS === 2000 ||
                  ismyform[0].STATUS === 1000) &&
                "dot2"
              }`}
            ></span>
            <div
              className={`cir1 ${
                ismyform.length !== 0 &&
                (ismyform[0].STATUS === 5000 ||
                  ismyform[0].STATUS === 2000 ||
                  ismyform[0].STATUS === 1000) &&
                "cir2"
              }`}
            ></div>
            <span
              className={`dot1 ${
                ismyform.length !== 0 &&
                (ismyform[0].STATUS === 5000 ||
                  ismyform[0].STATUS === 2000 ||
                  ismyform[0].STATUS === 1000) &&
                "dot2"
              }`}
            ></span>
            <div
              className={`cir1 ${
                ismyform.length !== 0 &&
                (ismyform[0].STATUS === 5000 || ismyform[0].STATUS === 2000) &&
                "cir2"
              }`}
            ></div>
            <span
              className={`dot1 ${
                ismyform.length !== 0 &&
                (ismyform[0].STATUS === 5000 || ismyform[0].STATUS === 2000) &&
                "dot2"
              }`}
            ></span>
            <div
              className={`cir1 ${
                ismyform.length !== 0 && ismyform[0].STATUS === 5000 && "cir2"
              }`}
            ></div>
            <span
              className={`dot1 ${
                ismyform.length !== 0 && ismyform[0].STATUS === 5000 && "dot2"
              }`}
            ></span>
          </div>
        </div>
        {ismyform.length !== 0 && !ismyform[0]?.COMPLETED_BY && (
          <div className="Extension">
            <div className="status_cir1">
              <span
                className={`dot5 ${
                  ismyform.length !== 0 && ismyform[0].STATUS === 3010 && "dot6"
                }`}
              >
                {" "}
                Overdue
              </span>
              <div
                className={`cir5 ${
                  ismyform.length !== 0 && ismyform[0].STATUS === 3010 && "cir6"
                } `}
              ></div>
              <span
                className={`dot5 ${
                  ismyform.length !== 0 && ismyform[0].STATUS === 3000 && "dot6"
                }`}
              >
                Extension request
              </span>
              <div
                className={`cir5 ${
                  ismyform.length !== 0 && ismyform[0].STATUS === 3000 && "cir6"
                } `}
              ></div>
              <span
                className={`dot5 ${
                  ismyform.length !== 0 && ismyform[0].STATUS === 3020 && "dot6"
                }`}
              >
                On Hold
              </span>
              <div
                className={`cir5 ${
                  ismyform.length !== 0 && ismyform[0].STATUS === 3020 && "cir6"
                } `}
              ></div>
              <span
                className={`dot5 ${
                  ismyform.length !== 0 && ismyform[0].STATUS === 3030 && "dot6"
                }`}
              >
                Notes Delayed{" "}
              </span>
              <div
                className={`cir5 ${
                  ismyform.length !== 0 && ismyform[0].STATUS === 3030 && "cir6"
                } `}
              ></div>
              <span
                className={`dot5 ${
                  ismyform.length !== 0 && ismyform[0].STATUS === 4004 && "dot6"
                }`}
              >
                Cancel
              </span>
              <div className="cir5"></div>
              <span
                className={`dot5 ${
                  ismyform.length !== 0 && ismyform[0].STATUS === 4003 && "dot6"
                }`}
              >
                Refund
              </span>
            </div>

            <div className="status_cir2">
              {ismyform.length !== 0 && ismyform[0].STATUS !== 3000 && (
                <>
                  <span className="dot7">Cancel</span>
                  <span
                    className="dot7 dot8"
                    onClick={() => {
                      handleOpen();
                      setStateData(3000);
                    }}
                  >
                    Approved
                  </span>
                </>
              )}

              {ismyform.length !== 0 && ismyform[0].STATUS !== 3020 && (
                <>
                  <span className="dot7">Cancel</span>
                  <span
                    className="dot7 dot8"
                    onClick={() => {
                      handleOpen();
                      setStateData(3020);
                    }}
                  >
                    Approved{" "}
                  </span>
                </>
              )}
              {ismyform.length !== 0 && ismyform[0].STATUS !== 3030 && (
                <>
                  <span className="dot7">Cancel</span>
                  <span
                    className="dot7 dot8"
                    onClick={() => {
                      handleOpen();
                      setStateData(3030);
                    }}
                  >
                    Approved
                  </span>
                </>
              )}

              {ismyform.length !== 0 && ismyform[0].STATUS !== 4004 && (
                <>
                  <span className="dot7">Cancel</span>
                  <span
                    className="dot7 dot8"
                    onClick={() => {
                      handleOpen();
                      setStateData(4004);
                    }}
                  >
                    Approved
                  </span>
                </>
              )}

              {ismyform.length !== 0 && ismyform[0].STATUS !== 4003 && (
                <>
                  <span className="dot7">Cancel</span>
                  <span
                    className="dot7 dot8"
                    onClick={() => {
                      handleOpen();
                      setStateData(4003);
                    }}
                  >
                    Approved
                  </span>
                </>
              )}
            </div>
            {openmail && (
              <MailFormatter
                OpenMail={setOpenMail}
                isStateData={isStateData}
                ismyform={ismyform}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default View1;
