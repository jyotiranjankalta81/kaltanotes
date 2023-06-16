import React, { useState } from "react";
import Button from "@mui/material/Button";
import PlainInput from "../../UtilComponents/inputs/PlainInput";
import "./ForgotPasswordMail.css";
import logo from "../Images/gcmslogo.png";
import { Link, useNavigate } from "react-router-dom";
import { serverInstance } from "../../API/ServerInstance";
import { toast } from "react-toastify";

export default function ForgotPasswordMail() {
  const [isEmail, setisEmail] = useState(null);
  const navigate = useNavigate();

  const handlesubmit = () => {
    if (!isEmail) {
      toast.error("Please Enter email");
    }

    serverInstance("user/forgot-password", "POST", {
      EMAIL: isEmail.trim(),
    }).then((res) => {
      if (res.success) {
        toast.success(res.message);
        setisEmail(null);
        navigate("/");
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <>
      <div className="background_img">
        <div className="forgotpassword_container1">
          <div className="forgotpassword_container">
            <img src={logo} alt="_" />
            <div className="forgotheading">
              <h2>Reset Password</h2>
              <p style={{ textAlign: "center" }}>
                Please enter your email address and we'll send <br /> you a link
                to reset your password.
              </p>
            </div>
            <div className="forgot_input">
              <PlainInput
                label="Enter Email"
                onChange={(e) => setisEmail(e.target.value)}
              />
            </div>
            {/* <Link
              to="/reset-password"
              style={{
                listStyle: "none",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            > */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#AECB80",
                width: "auto",
                color: "#FFFFF",
                "&:hover": { backgroundColor: "#AECB80" },
              }}
              onClick={handlesubmit}
            >
              Submit
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
