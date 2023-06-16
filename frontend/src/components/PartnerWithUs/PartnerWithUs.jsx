import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postContactDetail } from "../../Redux/features/commonSlice";
import { toast } from 'react-toastify'
import PlainTextArea from "../../UtilComponents/inputs/PlainTextArea";
import PlainInput from "../../UtilComponents/inputs/PlainInput";

function PartnerWithUs() {
  const initialState = {
    FULLNAME: "",
    EMAIL: "",
    SUBJECT: "",
    MESSAGE: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [formValue, setFormValue] = React.useState(initialState);
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(postContactDetail({ data, toast }));
  };

  return (
    <div className="contact1">
      <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='contact-title'>Contact Us</h1>
        <PlainInput
          label='Full Name:'
          type='text'
          name='FULLNAME'
          errors={errors}
          validation={{
            ...register('FULLNAME', { required: 'Fullname is required' })
          }}
        />
        <PlainInput
          label='Email Address:'
          type='email'
          name='EMAIL'
          errors={errors}
          validation={{
            ...register('EMAIL', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })
          }}
        />
        <PlainInput
          label='Subject:'
          type='text'
          name='SUBJECT'
          errors={errors}
          validation={{
            ...register('SUBJECT', { required: 'Subject Field is required' })
          }}
        />
        <PlainInput
          label='Tracking Number'
          type='text'
          name='TRACKINGID'
          errors={errors}
          validation={{
            ...register('TRACKINGID', { required: 'Tracking Id is required' })
          }}
        />
        <PlainTextArea
          label='Messages'
          type='text'
          name='MESSAGE'
          errors={errors}
          validation={{
            ...register('MESSAGE', { required: 'Message Field is required' })
          }}
        />
        <div className='btn-wrapper'>
          <button className='btn btn--primary'>Submit</button>
        </div>
      </form>

      <div className="contact_right">
        <img
          className="p_right_img"
          src={require("../Images/Partner_Pic.png")}
        />
      </div>
    </div>
  );
}

export default PartnerWithUs;
