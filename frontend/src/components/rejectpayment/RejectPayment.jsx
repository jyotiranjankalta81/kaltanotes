import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { serverInstance } from "../../API/ServerInstance";

const RejectPayment = () => {
  const navigate = useNavigate();
  const [isloading, setisloading] = useState(true);
  let [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const ORDER_ID = searchParams.get("ORDER_ID");
    const paymentbody = { ORDER_ID: ORDER_ID };
    serverInstance("main/delete-order", "post", paymentbody).then((res) => {
      if (res.success) {
        console.log(res);
      }
    });
  }, []);

  return (
    <div style={{ marginTop: "6%" }}>
      <Box
        style={{
          display: "grid",
          placeItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div
          className="outercenter "
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={3}
            style={{
              padding: "3rem",
            }}
          >
            <h2 style={{ textAlign: "center" }}>
              <CancelIcon
                sx={{ color: "red", fontSize: 150, textAlign: "center" }}
              />
            </h2>
            <h2 style={{ textAlign: "center" }}>
              Opps! your order is not placed
            </h2>
            <h2 style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/");
                }}
              >
                back to home screen
              </Button>
            </h2>
          </Paper>
        </div>
      </Box>
    </div>
  );
};

export default RejectPayment;
