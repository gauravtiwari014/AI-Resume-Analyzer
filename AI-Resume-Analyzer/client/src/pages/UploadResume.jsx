import { useState } from "react";
import axios from "axios";

function UploadResume() {

  const [file, setFile] = useState();

  const upload = async () => {

    const formData = new FormData();
    
formData.append("resume", selectedFile);

await axios.post(
  "http://localhost:5000/api/resume/upload",
  formData,
  {
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "multipart/form-data"
    }
  }
);

    alert("Uploaded Successfully");

  };

  return (

    <div>

      <h1>Upload Resume</h1>

      <input

        type="file"

        accept=".pdf,.docx"

        onChange={(e) =>
          setFile(e.target.files[0])
        }

      />

      <br />

      <button onClick={upload}>

        Upload

      </button>

    </div>

  );

}

export default UploadResume;