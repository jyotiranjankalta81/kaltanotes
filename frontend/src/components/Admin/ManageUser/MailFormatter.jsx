import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MailSendingTemplate from "./MailSendingTemplate";
import PlainInput from "../../../UtilComponents/inputs/PlainInput";
import "./MailFormatter.css";
import axiosInstance from "../../../API/axiosInstance";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  alignItems: "center",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MailFormatter({ OpenMail, isStateData, ismyform }) {
  const handleClose = () => OpenMail(false);
  const [isSubject, setisSubject] = React.useState(null);
  const [isBody, setBody] = React.useState("");

  const onsubmitbtn = () => {
    axiosInstance
      .post("main/extra-request", {
        PERPOUS: isSubject,
        EMAIL_BODY: isBody,
        STATUS: isStateData,
        ORDER_ID: ismyform[0]?.ORDER_ID,
        EMAIL: ismyform[0]?.EMAIL,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          toast.error(res.data.message);
        }
      });
  };

  return (
    <div>
      <Modal
        open={OpenMail}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Mail Details
          </Typography>
          <PlainInput
            label="Subject:"
            onChange={(e) => setisSubject(e.target.value)}
          />

          <label
            htmlFor=""
            style={{
              width: "100%",
              textAlign: "left",
              margin: "0.1rem 0rem 0.5rem 0rem",
            }}
          >
            Body:
          </label>

          <MailSendingTemplate onchnage={setBody} />

          <Button
            type="buttton"
            variant="contained"
            className="profile_btn"
            sx={{
              width: "auto",
              mt: 2,
              textTransform: "none",
              color: "#FFFFFF",
              backgroundColor: "#AECB80",
              "&:hover": {
                backgroundColor: "#AECB80",
              },
            }}
            onClick={onsubmitbtn}
          >
            Send Mail
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
