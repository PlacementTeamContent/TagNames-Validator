import { useState } from "react";

const JSONUploader = ({ onFileProcessed, setFileUploaded }) => {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        onFileProcessed(e.target.result);
        setFileUploaded(true);
       
      };
      reader.readAsText(file);
      setFileName(file.name);
    } else {
      <div class=" alert alert-warning d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
    An example alert with an icon
  </div>
</div>
    }
  };

  return (
    
     <div className="upload-container shadow-lg p-3 mb-5 bg-body-tertiary rounded">
     <h2 className="upload-title ">Upload Questions JSON</h2>
     <input
       type="file"
       accept=".json"
       className="upload-input "
       onChange={handleFileUpload}
     />
     {fileName &&  
      <div className="alert alert-success" role="alert">
      file uploaded:{fileName}
    </div>
      }
   </div>
  );
};

export default JSONUploader;
