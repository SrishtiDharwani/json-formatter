import React from "react";
import "./Buttons.css";

function Buttons({ formatJsonHandler, clearDataHandler }) {
  return (
    <div className="info">
      <div className="control--format">
        <button type="button" className="btn btn-success" onClick={formatJsonHandler}>Format JSON</button>
      </div>

      <div className="control--clear">
        <button type="button" className="btn btn-danger" onClick={clearDataHandler}>Clear data</button>
      </div>
    </div>
  );
}

export default Buttons;
