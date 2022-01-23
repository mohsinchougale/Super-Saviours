import React, { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";

import { Worker } from "@react-pdf-viewer/core";
import "./MedicalReport.css";
import { Button } from "@material-ui/core";

const MedicalReport = () => {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // for onchange event
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  // for submit event
  const [viewPdf, setViewPdf] = useState(null);

  // onchange event
  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };

  // form submit
  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <div className="container">
      <br></br>

      <form className="form-group" onSubmit={handlePdfFileSubmit}>
        {/* <input
          type="file"
          className="form-control"
          required
          onChange={handlePdfFileChange}
        hidden/> */}

        <label onChange={handlePdfFileChange} htmlFor="formId">
          {/* <CloudUploadIcon /> */}
          <input
            className="form-control"
            name=""
            type="file"
            id="formId"
            style={{ marginBottom: "10px", marginLeft: "725px" }}
            required
          />
        </label>

        {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
        <br></br>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginLeft: "725px", marginTop: "5px" }}
        >
          Preview PDF
        </Button>
      </form>
      <br></br>
      <h4>View PDF</h4>
      <div className="pdf-container">
        {/* show pdf conditionally (if we have one)  */}
        {viewPdf && (
          <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
              <Viewer
                fileUrl={viewPdf}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </>
        )}

        {/* if we dont have pdf or viewPdf state is null */}
        {!viewPdf && <>No pdf file selected</>}
      </div>
    </div>
  );
};

export default MedicalReport;
