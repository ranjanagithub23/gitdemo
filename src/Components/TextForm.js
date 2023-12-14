import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    alert("Button Clicked");
    setName("Enter the Value in String");
  };
  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setName(event.target.value);
  };
  const [name, setName] = useState("Enter the Text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control abc"
          aria-label="With textarea"
          value={name}
          onChange={handleOnChange}
        ></textarea>

        <button className="btn-lg btn btn-primary" onClick={handleUpClick}>
          Convert to Upper case
        </button>
      </div>
    </>
  );
}

export default TextForm;
