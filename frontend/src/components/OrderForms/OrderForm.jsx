/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PlainInput from "../../UtilComponents/inputs/PlainInput";
import PlainTextArea from "../../UtilComponents/inputs/PlainTextArea";
import "./OrderForm.css";
import orderImg from "../../Assets/forms/order.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { serverInstance } from "../../API/ServerInstance";
import { toast } from "react-toastify";
import { selectuserDetails } from "../../Redux/features/authenticationSlice";
import moment from "moment";
import { ApplicationType } from "../../UtilComponents/ApplicationType/ApplicationType";

export default function OrderForm() {
  const [spouse, setSpouse] = useState(1);
  const [paymentType, setpaymentType] = useState(null);
  const [OrderType, setOrderType] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const userDetails = useSelector(selectuserDetails);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [formData, setFormData] = useState({
    ORDER_TYPE: "",
    F_NAME: "",
    L_NAME: "",
    DOB: "",
    VISA_APP_NO: "",
    EMAIL: "",
    PATNER_TYPE: 0,
    SUPPOSE_F_NAME: "",
    SUPPOSE_L_NAME: "",
    SUPPOSE_DOB: "",
    UCI_NUMBER: "",
    ATIP: "",
    HEAR_CMT: "",
    PAYMENT_TYPE: "",
    PAYMENT_ID: "",
  });

  React.useEffect(() => {
    setValue("USERNAME", userDetails?.USERNAME);
    setValue("F_NAME", userDetails?.F_NAME);
    setValue("L_NAME", userDetails?.L_NAME);
    setValue("EMAIL", userDetails?.EMAIL);
    setValue("DOB", userDetails?.DOB);
    setValue("VISA_APP_NO", userDetails?.VISANO);
  }, []);

  const onFormSubmit = (data) => {
    if (!OrderType) {
      alert("somthing went wrong!!");
      return false;
    }

    const databody = {
      ORDER_TYPE: JSON.parse(OrderType),
      F_NAME: data?.F_NAME,
      L_NAME: data?.L_NAME,
      DOB: data?.DOB,
      VISA_APP_NO: data?.VISA_APP_NO,
      EMAIL: data?.EMAIL,
      PATNER_TYPE: spouse,
      SUPPOSE_F_NAME: formData?.SUPPOSE_F_NAME,
      SUPPOSE_L_NAME: formData?.SUPPOSE_L_NAME,
      SUPPOSE_DOB: formData?.SUPPOSE_DOB,
      UCI_NUMBER: formData?.UCI_NUMBER,
      ATIP: formData?.ATIP,
      HEAR_CMT: formData?.HEAR_CMT,
      PAYMENT_TYPE: paymentType,
      PAYMENT_ID: null,
    };
    serverInstance("main/create-order", "post", databody).then((res) => {
      if (res?.code === 401) {
        toast.error(res.message);
      }
      if (res.success) {
        const paymentbody = {
          ORDER_ID: res.data.ORDER_ID,
          EMAIL: data?.EMAIL,
          name: ApplicationType(JSON.parse(OrderType)),
        };
        serverInstance(
          "payment/create-checkout-session",
          "post",
          paymentbody
        ).then((res) => {
          if (res.success) {
            window.location.href = res.data.clienturl;
          }
          if (res?.code === 401) {
            toast.error(res.message);
          }
        });
      }
    });
  };

  const handleFieldChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  React.useEffect(() => {
    if (searchParams.get("payment")) {
      setpaymentType(searchParams.get("payment"));
    }
    if (searchParams.get("ordertype")) {
      setOrderType(searchParams.get("ordertype"));
    }
  }, []);

  return (
    <div className="order-form-wrapper">
      <form
        className="order-forms-container"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h2 className="form--title">Primary Applicant</h2>
        <div className="order-form-grid">
          <PlainInput
            label="Family Name"
            onChange={handleFieldChange}
            name="F_NAME"
            errors={errors}
            required={true}
            validation={{
              ...register("F_NAME", { required: "First Name is required" }),
            }}
          />

          <PlainInput
            label="Given Name"
            onChange={handleFieldChange}
            name="L_NAME"
            errors={errors}
            required={true}
            validation={{
              ...register("L_NAME", { required: "Last  Name is required" }),
            }}
          />
          <PlainInput
            label="Date of birth"
            type="date"
            onChange={handleFieldChange}
            name="DOB"
            errors={errors}
            required={true}
            validation={{
              ...register("DOB", { required: "Date of Birth is required" }),
            }}
          />
          <PlainInput
            label="Visa Application Number"
            onChange={handleFieldChange}
            name="VISA_APP_NO"
            errors={errors}
            required={true}
            validation={{
              ...register("VISA_APP_NO", {
                required: "visa application no is required",
              }),
            }}
          />
          <PlainInput
            label="Email Address"
            onChange={handleFieldChange}
            name="EMAIL"
            errors={errors}
            required={true}
            validation={{
              ...register("EMAIL", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }),
            }}
          />
          <label className="plain-input-wrapper">
            <span>Spouse/Law Partner</span>
            <div className="order-form-radio-wrapper">
              <label htmlFor="spouse-radio" className="radio-wrapper">
                <input
                  type="radio"
                  value={1}
                  onChange={(e) => setSpouse(JSON.parse(e.target.value))}
                  name="spouse-radio"
                  id="spouse-radio"
                />
                <span>Yes</span>
              </label>
              <label htmlFor="spouse-radio" className="radio-wrapper">
                <input
                  type="radio"
                  value={0}
                  onChange={(e) => setSpouse(JSON.parse(e.target.value))}
                  name="spouse-radio"
                  id="spouse-radio"
                />
                <span>No</span>
              </label>
            </div>
          </label>
        </div>
        {spouse === 1 ? (
          <div className="spouse-form-wrapper">
            <h2 className="form--title">Spouse</h2>
            <div className="spouse-form">
              <div className="spouse-form-left">
                <PlainInput
                  label="Family Name"
                  onChange={handleFieldChange}
                  name="SUPPOSE_F_NAME"
                />
                <PlainInput
                  label="Date of birth"
                  type="date"
                  onChange={handleFieldChange}
                  name="SUPPOSE_DOB"
                />
                <PlainTextArea
                  label="How did you hear about us?"
                  onChange={handleFieldChange}
                  name="HEAR_CMT"
                />
              </div>
              <div className="spouse-form-right">
                <PlainInput
                  label="Given Name"
                  onChange={handleFieldChange}
                  name="SUPPOSE_L_NAME"
                />
                <PlainInput
                  label="UCI Number"
                  onChange={handleFieldChange}
                  name="UCI_NUMBER"
                />
                <img src={orderImg} alt="" className="order-form-image" />
              </div>
            </div>
          </div>
        ) : (
          <div className="main-img-wrapper">
            <img src={orderImg} alt="" className="main-img" />
          </div>
        )}

        <button className="btn btn--primary">Submit</button>
      </form>
    </div>
  );
}
