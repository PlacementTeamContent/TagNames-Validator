import React, { useState } from "react";


const ValidationResults = ({ errors }) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const handleCardClick = (questionId) => {
    setSelectedQuestionId(questionId);
  };

  const closeModal = () => {
    setSelectedQuestionId(null);
  };

  return (
    <div className="validation-results">
      {Object.keys(errors).length === 0 ? (
    <div>
    <div class=" text-center alert alert-success p-4 m-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded" role="alert">
    
    <h2>Validation Successful! 🎉</h2>
    <p>The JSON file you uploaded has been <br/> thoroughly checked and found to be <br/>free of any errors or issues.</p>
  </div>
  
  <img alt="success-img" className="success-img" src="https://img.freepik.com/free-vector/ok-concept-illustration_114360-2060.jpg?t=st=1740469356~exp=1740472956~hmac=52ddc48fbfc4066204c51ec7a93aea5bbe112239128682ca15c82db3bcf4113c&w=740"/>
  
  </div>
      ) : (
        Object.keys(errors).map((questionId) => (
          <div key={questionId} className="error-card" onClick={() => handleCardClick(questionId)}>
            <h3>Question ID: {questionId}</h3>
            <p type="button" className="btn btn-outline-danger position-relative">
              <i className="fas fa-exclamation-triangle error-icon"></i> error(s)
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {errors[questionId].length}
              </span>
            </p>
          </div>
        ))
      )}

      {selectedQuestionId && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="error-heading">
              Error Details for: {selectedQuestionId}
            </h2>
            <div className="error-container">
              {errors[selectedQuestionId].map((error, index) => (
                <div key={index} className="error-item">
                  <h4 className="error-title">{error.message}</h4>
                  <p className="error-description">{error.description}</p>
                </div>
              ))}
            </div>
            <button className="close-modal-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValidationResults;
