import React, { useState } from "react";
import PlainInput from "../../UtilComponents/inputs/PlainInput";
import registerImg from "../../Assets/forms/register.svg";
import { useDispatch } from "react-redux";
import { userRegister } from "../../Redux/features/authenticationSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function UserRegister() {
  const [formData, setFormData] = useState({
    USERNAME: "",
    F_NAME: "",
    L_NAME: "",
    EMAIL: "",
    PASSWORD: "",
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(userRegister({ data, navigate }));
  };

  const handleFormSubmission = (event) => {
    console.log(event, errors);
    event.preventDefault();
    dispatch(userRegister(onSubmit));
  };
  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  return (
    <div className="two-column-page">
      <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">Register</h1>
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
          validation={{
            ...register("F_NAME", { required: "First Name is required" }),
          }}
        />
        <PlainInput
          label="Last Name"
          name="L_NAME"
          errors={errors}
          required={true}
          validation={{
            ...register("L_NAME", { required: "Last Name is required" }),
          }}
        />
        <PlainInput
          label="Email"
          type="email"
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
        <PlainInput
          label="Password"
          type="password"
          name="PASSWORD"
          errors={errors}
          required={true}
          validation={{
            ...register("PASSWORD", { required: "Password is required" }),
          }}
        />
        <PlainInput
          label="Confirm Password"
          type="password"
          name="C_PASSWORD"
          errors={errors}
          required={true}
          validation={{
            ...register("C_PASSWORD", {
              required: "Confirm Password is required",
              validate: (value) => {
                if (watch("PASSWORD") !== value)
                  return "Confirm password should be same as password";
              },
            }),
          }}
        />
        <div className="remember-and-forget">
          <label htmlFor="remember" className="remember">
            <input type="checkbox" name="remember" id="remember" />
            <span>Send these credentials via email</span>
          </label>
        </div>
        <button className="btn btn--primary">Submit</button>
      </form>
      <div className="form-content-area">
        <div className="content-wrapper">
          <p className="content-side-title">Welcome Back!</p>
          <img src={registerImg} alt="" className="content-img" />
        </div>
      </div>
    </div>
  );
}
