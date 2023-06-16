import React from "react";
import "./ConsentUpload.css";
import { ImUpload } from "react-icons/im";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { serverInstance } from "../../API/ServerInstance";
import axiosInstance from "../../API/axiosInstance";

export default function ConsentUpload() {
  const [file, setFile] = useState(null);
  const [isUploadFile, setUploadFile] = useState(null);
  const [isorderId, setisorderId] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    if (searchParams.get("orderID")) {
      setisorderId(searchParams.get("orderID"));
    }
  }, []);

  const dragOverHandler = (event) => {
    event.preventDefault();
  };

  const dropHandler = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 1) {
      toast.error("You can't upload more than 1 file!");
      return false;
    }
    if (event.dataTransfer.files) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  const fileInsert = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setUploadFile(event.target.files[0]);
    }
  };

  const uploadconsent = () => {
    const formdata = new FormData();
    formdata.append("ORDER_ID", isorderId);
    formdata.append("Constantpdf", isUploadFile);
    axiosInstance.put("main/upload-constant", formdata).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error("somthing went wrong mail us directly!");
      }
    });
  };

  return (
    <form className="consent-upload-page" enctype="multipart/form-data">
      <h1 className="consent-upload-title">Upload your consent file</h1>
      <label
        htmlFor="consent"
        className="consent-uploader-wrapper"
        onDragOver={dragOverHandler}
        onDrop={dropHandler}
      >
        {file === null ? (
          <>
            <span className="drag-heading">Drag and drop files</span>
            <span>OR</span>
            <span className="browse-heading">Browse Files</span>
            <ImUpload className="upload-icon" />
            <input
              type="file"
              name="consent"
              className="consent-file"
              onChange={fileInsert}
              id="consent"
            />
          </>
        ) : (
          <span>File Inserted for uploading</span>
        )}
      </label>
      {console.log(file)}
      <button
        type="button"
        className="btn-consent-upload"
        disabled={file === null}
        onClick={uploadconsent}
      >
        Upload Consent{" "}
      </button>
    </form>
  );
}
