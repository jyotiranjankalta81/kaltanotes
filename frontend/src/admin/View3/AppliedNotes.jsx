import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PlainInput from "../../UtilComponents/inputs/PlainInput";
import axiosInstance from "../../API/axiosInstance";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function AppliedNotes({ NotesApplied, ismyform }) {
  const handleClose = () => NotesApplied(false);
  const [isSpecialId, setisSpecialId] = React.useState(null);

  const handlenotes = () => {
    if (!isSpecialId) {
      toast.error("please enter  application id");
      return false;
    }
    axiosInstance
      .put("main/notes-applied", {
        ORDER_ID: ismyform[0].ORDER_ID,
        SPECIAL_ID: isSpecialId,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          window.location.reload();
        } else {
          toast.error(res.data.message);
        }
      });
  };

  return (
    <div>
      <Modal
        open={NotesApplied}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Application No.
          </Typography>
          <br />
          <br />
          <PlainInput
            label="Applied Notes No:"
            onChange={(e) => setisSpecialId(e.target.value)}
          />
          <br />
          {!ismyform[0].SPECIAL_ID && (
            <button
              className="btn btn--primary"
              type="button"
              onClick={handlenotes}
            >
              Submit
            </button>
          )}
        </Box>
      </Modal>
    </div>
  );
}
