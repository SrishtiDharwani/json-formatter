import React from "react";
import "./Input.css";

function Input({messageHandler,input}) {
  
  return (
    <div>
      <textarea
        className="input"
        rows="40"
        cols="80"
        placeholder="Enter your JSON here..."
        onChange={messageHandler}
        value={input}
      ></textarea>
    </div>
  );
}

export default Input;
