import React from "react";
import "./Output.css";

function Output({formattedJson}) {

  return (
    <div>
      <textarea
        readOnly
        className="output"
        rows="40"
        cols="80"
        placeholder="Formatted JSON will appear here..."
        value={formattedJson}
      ></textarea>
    </div>
  );
}

export default Output;
