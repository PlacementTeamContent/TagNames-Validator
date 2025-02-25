import { useState } from "react";
import JSONUploader from "./components/pages/JSONUploader";
import ValidationResults from "./components/pages/ValidationResults";
import Button from "./components/common/Button";
import Loader from "./components/common/Loader";
import validateJSONData from "./utils/validateJSON";
import "./App.css";

const App = () => {
  const [jsonData, setJsonData] = useState(null);
  const [errors, setErrors] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [topicsData, setTopicsData] = useState(false);
  const [viewResults, setViewResults] = useState(false); // State to track if results should be shown
  const [viewHome, setViewHome] = useState(true); // State to track home page visibility

  const validateJSON = async () => {
    if (!fileUploaded || !topicsData) {
      setErrorMessage("Both JSON files must be uploaded beforehand to ensure successful validation.");
      setShowErrorModal(true);
      return;
    }

    setViewHome(false); // Hide home page after clicking validate
    setLoading(true); // Show the loader immediately

    setTimeout(async () => {
      try {
        const parsedData = JSON.parse(jsonData);
        const validationErrors = await validateJSONData(parsedData, topicsData);
        if (validationErrors.length === 0) {
          setErrors([]);
          setIsValid(true);
        } else {
          setErrors(validationErrors);
          setIsValid(false);
        }
      } catch (error) {
        setErrors(["Invalid JSON Format. Please provide a correctly formatted JSON file."]);
        setIsValid(false);
      }
      setLoading(false); // Hide the loader after 5 seconds
      setShowErrorModal(true);
      setViewResults(true); // Show validation results after 5 seconds
    }, 3000); // Loader visible for 5 seconds
  };

  const closeModal = () => setShowErrorModal(false);

  const handleFileUpload = (fileContent) => {
    try {
      const parsedJSON = JSON.parse(fileContent);
      
      const sectionKeys = Object.keys(parsedJSON).filter((key) => key.endsWith("_section_question_tags"));
      
      if (sectionKeys.length === 0) {
        throw new Error("No valid '_section_question_tags' keys found in the JSON.");
      }
      
      const extractedData = sectionKeys.reduce((acc, key) => {
        acc[key] = parsedJSON[key];
        return acc;
      }, {});

      setTopicsData(extractedData);
      setFileUploaded(true);
    } catch (error) {
      alert(`Invalid JSON file: ${error.message}`);
    }
  };

  const handleReset = () => {
    // Reset all states and refresh the page
    setJsonData(null);
    setErrors([]);
    setFileUploaded(false);
    setIsValid(false);
    setLoading(false);
    setShowErrorModal(false);
    setTopicsData({});
    setViewResults(false);
    setViewHome(true); // Show home page again
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="app-container">
      {viewHome && !viewResults ? (
        <div className="main-card-container">
          <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded card">
            <div className="header">
              <h1 className="app-title">JSON Validator</h1>
              <JSONUploader onFileProcessed={setJsonData} setFileUploaded={setFileUploaded} />
              <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded upload-container">
                <h2 className="upload-title">Upload Topics & Sub-Topics JSON</h2>
                <input
                  type="file"
                  accept=".json"
                  className="upload-input"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => handleFileUpload(reader.result);
                      reader.readAsText(file);
                    }
                  }}
                />
              </div>
              <Button label="Validate" onClick={validateJSON} />
            </div>
            {showErrorModal && (
              <div className="modal-overlay shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="modal-content">
                  <h2 className="modal-header">Error<i className="fas fa-exclamation-triangle error-icon"></i></h2>
                  <p className="modal-header">{errorMessage}</p>
                  <button className="close-modal-btn" onClick={closeModal}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          {loading ? <Loader /> : <ValidationResults errors={errors} isValid={isValid} />}
          <div className="r-button-container">
            <button className="reset-btn" onClick={handleReset}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
