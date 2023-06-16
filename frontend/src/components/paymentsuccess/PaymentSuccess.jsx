import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./paymentsuccess.css";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { serverInstance } from "../../API/ServerInstance";
import { imageBacked } from "../../API/axiosInstance";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [isOrderType, setisOrderType] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const [isnormalid, setisnormalid] = useState(null);

  const loaction = useLocation();

  React.useEffect(() => {
    const ORDER_ID = searchParams.get("ORDER_ID");
    const paymentId = searchParams.get("paymentId");
    const paymentbody = {
      ORDER_ID: ORDER_ID,
      paymentId: paymentId,
    };

    if (!ORDER_ID && !paymentId) {
      alert(`somthing went wrong`);
      navigate("/");
    } else {
      serverInstance("main/update-payment", "put", paymentbody).then((res) => {
        if (res.success) {
          setisOrderType(res.data[0].ORDER_TYPE);
          setisnormalid(res.data[0].NORMAL_ID);
        }
      });
    }
  }, []);

  const uploadconsent = () => {
    navigate(`/consent-uploader?orderID=${isnormalid}`);
  };

  const downloadconsent = () => {
    var url = "";
    if (
      isOrderType === 1 ||
      isOrderType === 2 ||
      isOrderType === 3 ||
      isOrderType === 4
    ) {
      url = imageBacked + "consent/CBSA_Consent_Form_New.pdf";
    } else if (isOrderType === 5) {
      url = imageBacked + "consent/GCMS_Consent_Form.pdf";
    } else {
      url = imageBacked + "consent/CBSA_Consent_Form_New.pdf";
    }
    window.open(url);
  };
  const previewconsent = () => {
    var url = "";
    if (
      isOrderType === 1 ||
      isOrderType === 2 ||
      isOrderType === 3 ||
      isOrderType === 4
    ) {
      url = imageBacked + "consent/CBSA_Sample_Consent.jpg";
    } else if (isOrderType === 5) {
      url = imageBacked + "consent/GCMS_Sample_Consent.jpg";
    } else {
      url = imageBacked + "consent/CBSA_Sample_Consent.jpg";
    }
    window.open(url);
  };
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
              <CheckCircleIcon
                color="success"
                sx={{ fontSize: 150, textAlign: "center" }}
              />
            </h2>
            <h2 style={{ textAlign: "center" }}>
              Your Order is placed successfully
            </h2>
            <p
              style={{ textAlign: "center", color: "blue" }}
              onClick={previewconsent}
            >
              click here to download consent preview
            </p>

            <p
              style={{ textAlign: "center", color: "blue" }}
              onClick={downloadconsent}
            >
              click here to download consent
            </p>

            <h2 style={{ textAlign: "center" }}>
              <Button variant="contained" onClick={uploadconsent}>
                Upload Consent
              </Button>
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

export default PaymentSuccess;
