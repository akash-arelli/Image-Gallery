import React, { useState } from "react";
import ProgressBar from '../comps/PrograssBar';

export const UploadFrom = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const chanageHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  return (
    <form>
    <label>
      <input type="file" onChange={chanageHandler} />
      <span>+</span>
      </label>
      <div className="output">
        {error && <div className=" error"> {error}</div>}
        {file && <div className='file'>{file.name}</div>}
        {file && <ProgressBar file = {file} setFile={setFile}/>}
      </div>
    </form>
  );
};

export default UploadFrom;
