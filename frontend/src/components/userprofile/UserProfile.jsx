import React from "react";
import Card from "@mui/material/Card";
import "./userprofile.css";
import PlainInput from "../../UtilComponents/inputs/PlainInput";
import { useForm } from "react-hook-form";
import moment from "moment";
import {
  getuserdetails,
  selectuserDetails,
} from "../../Redux/features/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../API/axiosInstance";
import { toast } from "react-toastify";

const UserProfile = () => {
  const userDetails = useSelector(selectuserDetails);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({ mode: "onChange" });

  React.useEffect(() => {
    setValue("USERNAME", userDetails?.USERNAME);
    setValue("F_NAME", userDetails?.F_NAME);
    setValue("L_NAME", userDetails?.L_NAME);
    setValue("EMAIL", userDetails?.EMAIL);
    setValue("DOB", userDetails?.DOB);
    setValue("VISAAPPNO", userDetails?.VISANO);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    axiosInstance
      .put("main/updateprofile", {
        USERNAME: data.USERNAME,
        F_NAME: data.F_NAME,
        L_NAME: data.L_NAME,
        EMAIL: data.EMAIL,
        DOB: data.DOB,
        VISANO: data.VISAAPPNO,
      })
      .then((res) => {
        if (res.data.status) {
          toast.success(res.data.message);
        }
        dispatch(getuserdetails());
      });
  };

  return (
    <div className="profile-container">
      <Card className="profile-card">
        <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="card-header">
            {" "}
            <u>User Profile</u>{" "}
          </h2>

          <PlainInput
            label="Username"
            name="USERNAME"
            errors={errors}
            required={true}
            validation={{
              ...register("USERNAME", { required: "Username is required" }),
            }}
          />
          <PlainInput
            label="First Name"
            name="F_NAME"
            errors={errors}
            required={true}
            onChange={(e) => {
              register("F_NAME", {
                required: "First name is required",
              }).onChange(e);
            }}
            validation={{
              ...register("F_NAME", { required: "First name is required" }),
            }}
          />
          <PlainInput
            label="Last Name"
            name="L_NAME"
            errors={errors}
            required={true}
            validation={{
              ...register("L_NAME", { required: "last name is required" }),
            }}
          />

          <PlainInput
            label="Email"
            type="email"
            name="EMAIL"
            errors={errors}
            required={true}
            validation={{
              ...register("EMAIL", { required: "Email is required" }),
            }}
          />
          <PlainInput
            label="Date of Birth"
            type="date"
            name="DOB"
            errors={errors}
            required={true}
            validation={{
              ...register("DOB"),
            }}
          />

          <PlainInput
            label="Visa application no"
            name="VISAAPPNO"
            validation={{
              ...register("VISAAPPNO"),
            }}
          />

          <button className="btn btn--primary">Submit</button>
        </form>
      </Card>
    </div>
  );
};

export default UserProfile;
