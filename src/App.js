import React, { useState } from "react";
import Input from "./components/Input/Input";
import Output from "./components/Output/Output";
import Buttons from "./components/Buttons/Buttons";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const messageHandler = (event) => {
    setInput(event.target.value);
  };

  let formatted;
  const formatJsonHandler = (event) => {
    try {
      formatted = JSON.stringify(JSON.parse(input),null,4);
      console.log(formatted);
      setOutput(formatted);
      console.log(output);
    } catch (err) {
      setOutput(err.message);
    }
  };

  const clearDataHandler=event=>{
    setInput('');
    setOutput('');
  };

  return (
    <React.Fragment>
      <Buttons formatJsonHandler={formatJsonHandler} clearDataHandler={clearDataHandler} />
      <Header />

      <div className="flex-container">
        <div className="column">
          <Input messageHandler={messageHandler} input={input} />
        </div>

        <div className="column">
          <Output formattedJson={output} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
